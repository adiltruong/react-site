import React, { Component } from 'react';
import Modal from './Modal';
import First from './images/dog1.jpg';
import Second from './images/dog2.jpg';
import Third from './images/dog3.jpg';
import Me from './images/medal.jpg';
import Iframe from 'react-iframe';

export default class Gallery extends Component {
      constructor() {
        super();
        this.state = {
            activeImage: 'None',
            imgClicked: false
        }

        this.changeActivePhoto = (imageName) => {
            this.setState ({
                activeImage: imageName,
                imgClicked: true
            })
        }
      }

        render() {
        return (
          <div id="main-body">
            <h1 style={{textAlign:"center"}}> Favorite Animation </h1>
            <center><Iframe width="400" height="300" url="https://www.youtube.com/embed/sdUUx5FdySs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></center>
            <h1 style={{textAlign:"center"}}> Photos </h1>
              <div id="photo-col"
               className="photo-collection">
                  <img onClick={this.changeActivePhoto.bind(this, 'dog1')} src= {First} />
                  <img onClick={this.changeActivePhoto.bind(this, 'dog2')} src= {Second} />
                  <img onClick={this.changeActivePhoto.bind(this, 'dog3')} src= {Third} />
                  <img onClick={this.changeActivePhoto.bind(this, 'medal')} src= {Me} />
              </div>

                   <Modal activeImage={this.state.activeImage} imgClicked={this.state.imgClicked}/>

    		    </div>
        )
    }
  }
