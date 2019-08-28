 import React, { Component } from 'react'
 import YourNote from '../Components/YourNote'
 import firebase from 'firebase';
 
 export default class yournote extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_DATABASE_URL,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STOREGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    };
    firebase.initializeApp(config);
  }
   render() {
     return (
       <YourNote firebase={firebase}/>
     )
   }
 }
 