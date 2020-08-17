import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

// import Amplify from 'aws-amplify'
// import config from './conf'

import App from './App';
import * as serviceWorker from './serviceWorker';

//
// Global Style: index.html에서는 모두 제외하고 여기에서 할 것.....
//
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css';
//
// fontAwesome css only
//
import '@fortawesome/fontawesome-free/css/all.min.css'

// Amplify.configure({
//   Auth: {
//     mandatorySignIn: false,
//     region: config.cognito.REGION,
//     userPoolId: config.cognito.USER_POOL_ID,
//     identityPoolId: config.cognito.IDENTITY_POOL_ID,
//     userPoolWebClientId: config.cognito.APP_CLIENT_ID
//   },
//   Storage: {
//     region: config.s3.REGION,
//     bucket: config.s3.BUCKET,
//     identityPoolId: config.cognito.IDENTITY_POOL_ID
//   },
//   API: {
//     endpoints: [
//       {
//         name: config.strings.API_NAME,
//         endpoint: config.apiGateway.URL,
//         region: config.apiGateway.REGION
//       },
//     ]
//   }
// })

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
