# Petcare-hub.com Reactapp

To-Do List
* **done** navbar, layout
* **done** page auto height
* implement SEO, helmet
* google analytic

## Overview

General
* React Demo Web Application working with AWS Serverless Stack
* Required Stacks: API Gateway + Lambda + DynamoDB, S3
* used Framework: reactjs + aws Amplify

Application Features
* Articles Admin: 
    - Authenticated users can create, get, list and update Articles
    - UnAuthenticated users can list and get Articles
* IoT connection to devices

### Install
```bash
$ git clone https://github.com/kebinlee1/project-petcarehub-reactapp projectname
$ cd projectname
$ yarn install
$ npm start
```

## Pages

## Troubleshootings

## Styles and Animation in React

### Google Fonts
* https://fonts.google.com/

### React access to DOM
```js
this.myRef = React.createRef()
```

### Styles
* [9 Ways To Implement CSS in React JS](https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3)

### Animation
* [5 Ways to animate a React app.](https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf)


## Troubleshooting
* **ERROR** window.onscroll event: only one Block works     
  **Solution** use setInterval | React.createRef | componentWillUnmount


