import React, { Component } from 'react'
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import "./styles.css";

export default class Main extends Component {
  state = {
    newBox: ''
  }

  handleSubmit = async event => {
    const { history } = this.props;
    event.preventDefault();
    const { newBox } = this.state;

    if(!newBox.length) return

    try{
      const response = await api.post('/boxes', {
        title: newBox
      })
      history.push(`/box/${response.data._id}`)
    } catch (err) {
      console.log(err)
    }
  }

  handleInputChange = (event) => {
    const newBox = event.target.value;
    this.setState({
      newBox
    })
  }

  render() {
    const { newBox } = this.state;
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
            <img src={logo} alt=""/>
            <h2>Pepperoni Box</h2>
            <input 
                type="text"
                placeholder="Criar um box"
                value={newBox}
                onChange={this.handleInputChange}
            />
            <button type="submit">Criar</button>
        </form>
      </div>
    )
  }
}
