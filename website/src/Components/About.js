import React, { Component } from 'react'
import Prof from './images/me_and_soju.jpg'

export default class About extends Component {
    render() {
        return (
          <div class="home">
              <div>
                <h1> Adil Truong </h1>
              </div>

              <div>
                <div>
                  <img src={Prof}
                      class = "pic"
                      width = "400"
                      height = "auto"
                  />
                  <p>
                    <br />
                    <br />
                    Hi! I'm Adil, a 4th year at UCSB
                    <br />
                    <br />
                    Welcome to my portfolio
                  </p>
                </div>
              </div>
          </div>
        );
    }
}
