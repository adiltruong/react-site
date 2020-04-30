import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default class Contact extends Component {
    render() {
        return (
            <div align="center">
              <br />
              <br />
              <SocialIcon url="http://facebook.com/adiltruong" fgColor = "white" style={{padding: "5px"}} class="icon"/>
              <SocialIcon url="http://twitter.com/adilpickle10" fgColor = "white" style={{padding: "5px"}} class="icon"/>
              <SocialIcon url="https://www.google.com/search?q=adil+truong&rlz=1C1CHBF_enUS842US842&oq=adil+truong&aqs=chrome..69i64j5j69i60j5l4.9458j0j4&sourceid=chrome&ie=UTF-8" fgColor= "white" style={{padding: "5px"}} class="icon"/>
              <SocialIcon url="http://linkedin.com/in/jaketrent" fgColor = "white" style={{padding: "5px"}} class="icon"/>
            </div>
        )
    }
}
