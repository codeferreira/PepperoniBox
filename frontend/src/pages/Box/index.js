import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

import socket from 'socket.io-client';
import api from '../../services/api';

import { MdInsertDriveFile } from 'react-icons/md'

import logo from '../../assets/logo.svg';
import './styles.css';

export default class Box extends Component {

  state = {
    box: {}
  }

  componentDidMount () {
    this.subscribeToNewFile();
    this.getBoxData();
  }

  subscribeToNewFile = () => {
    const boxID = this.props.match.params.id;
    const io = socket('https://jkbox-backend.herokuapp.com');
    io.emit('connectRoom', boxID);

    io.on('file', data => {
      this.setState({
        box: {...this.state.box, files: [data, ...this.state.box.files]}
      })
    })
  }

  getBoxData = async () => {
    const boxID = this.props.match.params.id;
    const response = await api.get(`/boxes/${boxID}`);
    const box = response.data;
    this.setState({ box })
  }

  handleUpload = (files) => {
    files.forEach(file => {
      const data = new FormData();
      const boxID = this.props.match.params.id;

      data.append('file', file);

      api.post(`boxes/${boxID}/files`, data);
    })
  }

  render() {
    const { box } = this.state;
    return (
      <div id="box-container">
        <header>
          <img src={logo}/>
          <h1>{box.title}</h1>
        </header>
        <Dropzone onDropAccepted={this.handleUpload}>
          {
            ({ getRootProps, getInputProps }) => (
              <div className="upload" {...getRootProps()}>
                <input {...getInputProps()}/>

                <p>Arraste o arquivo ou clique aqui.</p>
              </div>
            )
          }
        </Dropzone>
        <ul>
          {
            box.files && box.files.map(file => (    
              <li key={file._id}>
                <a className="fileInfo" href={file.url}>
                  <MdInsertDriveFile size={24} color="#A5CFFF" />
                  <strong>{file.title}</strong>
                </a>
                <span>
                  há{" "}
                  {distanceInWords(file.createdAt, new Date(), {
                    locale: pt
                  })}
                </span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
