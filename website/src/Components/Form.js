import React, { Component } from 'react'
import config from '../config';
const firebase = require('firebase')

export default class Form extends Component {
    //Add a state
    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.state = {
            firebaseData: {},
            formErrorName: null,
            formErrorMsg: null,
        }
    }

    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
    }

    submit(event) {
        event.preventDefault();

        //Check for input requirements
        const data = new FormData(event.target);

        console.log("form data")
        console.log(data);

        var formJson = {};
        data.forEach(function(value, key){
            formJson[key] = value;
        });

        console.log("form json");
        console.log(formJson);

        var setError = false
        if (formJson["name"].length <= 5 || formJson["name"].length >= 20) {
            this.setState({formErrorName: "Name must be 6-19 characters"})
            setError = true;
        }
        else {
            this.setState({formErrorName: null})
        }
        if (formJson["message"].length <= 15 || formJson["name"].length >= 500) {
            this.setState({formErrorMsg: "Message must be 16-499 characters"})
            setError = true;
        }
        else {
            this.setState({formErrorMsg: null})
        }

        //if no errors raised
        console.log(" form errors")
        console.log(this.state.formErrorName)
        console.log(this.state.formErrorMsg)
        if (!setError) {

            formJson["datetime"] = firebase.database.ServerValue.TIMESTAMP;

            //submit data to firebase
            firebase.database().ref('data').push().set(formJson);
            alert("Your message was sent!")
        }
        else {
            alert("There are issues with your submission. Please check the red text on the form.")
        }
      }

        render() {
          return (
          <form onSubmit={this.submit}>
          <input type="text" name="name" placeholder="Your Name" required/>
          <textarea name="about" placeholder="About You"></textarea>
          <textarea name="message" placeholder="Type your Message"></textarea>
          <input type="email" name="email" placeholder="Email Address" />
            <label for="public">
            <input type="checkbox" id="public" name="public" value="makePublic"/>
                &nbsp; Make Public
            </label>
          <center><button type="submit">Submit</button></center>
          </form>
        )
        }

}
