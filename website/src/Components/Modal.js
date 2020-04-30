import React, { Component } from 'react'
import First from './images/dog1.jpg';
import Second from './images/dog2.jpg';
import Third from './images/dog3.jpg';
import Me from './images/medal.jpg';

export default class Modal extends Component {
    makeVisible = () => {
        if (this.props.imgClicked) {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        }
    }

    addClickListener = () => {
        var modal = document.getElementById("myModal");
        if (modal) {
            modal.addEventListener("click", e=>{
                if(e.target !== e.currentTarget)
                    return;
                modal.style.display = "none";
            })
        }
    }
    render() {
      const photos = [
        {src: First, title: 'dog1'},
        {src: Second, title: 'dog2'},
        {src: Third, title: 'dog3'},
        {src: Me, title: 'medal'}
      ];

        const thisImage = photos.find((image) => image.title === this.props.activeImage)
        var thisImageSrc = null;
        if (thisImage) {
            thisImageSrc = thisImage.src
        }

        this.makeVisible();
        this.addClickListener();
        return (
            <div id="myModal" className="w3-modal w3-padding-32">
              <img id="modal-img" src={thisImageSrc} style={{margin: "auto", width: "60%", display: "block", maxWidth: "600px"}} alt="lightbox photo"/>
            </div>
        )
    }
}
