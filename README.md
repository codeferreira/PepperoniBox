<img src="https://i.imgur.com/FgPd2o9.png" align="left" />

# PepperoniBox

PepperoniBox is a Dropbox Clone created as a personal project to learn more about file upload and socket.io in NodeJS enviroment.

## Installation

ou will need NodeJS@10.16 or higher to run this project.

I recommend to use [Yarn](https://yarnpkg.com/lang/en/) as packge manager.

First of all, clone the repository. 

```bash
git clone https://github.com/JKFher/PepperoniBox.git
```

### Backend

1. Enter into the backend folder. `cd backend`.
2. Install all the dependencies. `yarn` or `npm i`.
3. Change the Mongoose connection URL into the `routes.js` file.
  ```javascript
  mongoose.connect(URL_CONNECTION, 
    {
      useNewUrlParser: true
    }
  );
  ```
4. Start the application. `yarn dev` or `npm run dev`.
5. Have fun!

### Frontend

1. Enter into the frontend folder. `cd frontend`.
2. Install all the dependencies. `yarn` or `npm i`.
3. Start the application. `yarn start` or `npm run start`.
4. Have fun!


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
