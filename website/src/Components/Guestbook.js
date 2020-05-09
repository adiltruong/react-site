import React, { Component } from 'react'
import config from '../config';
import Form from './Form'
import Submission from './Submission'
const firebase = require('firebase')

export default class Guestbook extends Component {
  constructor() {
        super();
        this.state = {
        firebaseData: {}
        }
    }

    mountMessage() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        //load and update data
        let ref = firebase.database().ref('data')
        ref.on('value', snapshot => {
            const data = snapshot.val()
            this.setState({firebaseData: data})
            console.log("updated firebase state")
        })
    }

    render() {

      const data = this.state.firebaseData;


      var msgArr = [];
        Object.keys(data).forEach(function(key) {
              msgArr.push(data[key]);
        });

      msgArr.reverse();

      const renderedMsgs = msgArr.map((msg, i) => (
            <Submission msgDateTime={msg.datetime} msgName={msg.name} msgDesc={msg.about} msgText={msg.message}></Submission>
        ));

        return (
          <section class="container">
          <div class="left-half">
          <div class="form-style-6">
            <h1>Send me a message!</h1>
            <Form />
          </div>
          </div>
          <div class="right-half">
            {renderedMsgs}
          </div>
          </section>
        );
    }
}
