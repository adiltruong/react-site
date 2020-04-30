import React, { Component } from 'react'
import Procore from './images/procore.png'
import Wh from './images/wh.jpg'
import Overheard from './images/ear.jpg'

export default class Experiences extends Component {
    render() {
        return (
          <div>
            <div>
              <h1 style={{textAlign: "center"}}> Experiences </h1>
            </div>
            <div class="row">
              <div class="column">
              <img src= {Procore}
              width = "200"
              height = "auto"
              class = "pic" />
          </div>
              <div class="column">
                <br />
              <p>
                <b> Procore Technologies </b>
                  <br />
                  <br />
                  Software Engineer Intern
                  <br />
                  <br />
                  Worked on Notifications Team. Mainly used Ruby on Rails
              </p>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <img src= {Wh}
              width = "200"
              height = "auto"
              class = "pic" />
            </div>
            <div class="column">
              <p>
                <br />
                  <b> WomxnHacks 2.0 </b>
                  <br />
                  <br />
                  Head of Marketing
                  <br />
                  <br />
                  Chair of Internal and External affairs for womxn-inclusive hackathon at UCSB
              </p>
            </div>
          </div>
          <div class= "row">
            <div class= "column">
              <img src= {Overheard}
              width = "200"
              height = "auto"
              class = "pic" />
            </div>
            <div class="column">
              <p>
                <br />
                  <b> Overheard at UCSB </b>
                  <br />
                  <br />
                  Founder
                  <br />
                  <br />
                  Founded group page of 20,000+ users for UCSB community posts
              </p>
            </div>
            <script src="experience_script.js"> </script>
            </div>
            </div>
        )
    }
}
