import React, { Component } from 'react'

export default class Submission extends Component {

    render() {
      var msgDateTime = new Date(this.props.msgDateTime);
      msgDateTime = msgDateTime.toString();
      var msgDateTimeArr = msgDateTime.split(" ");

      msgDateTime = msgDateTimeArr[1] + " " + msgDateTimeArr[2] + " "
      + msgDateTimeArr[3] + " " + msgDateTimeArr[4] + " " + msgDateTimeArr[5];

      const msgName = this.props.msgName;
        var initialsArr = msgName.split(" ");
        var initials;
        if (initialsArr.length === 1) {
            initials = initialsArr[0].charAt(0).toUpperCase();
        }
        else {
            initials = initialsArr[0].charAt(0).toUpperCase() + initialsArr[1].charAt(0).toUpperCase();
        }

        const msgDesc = this.props.msgDesc;
        const msgText = this.props.msgText;

        return(
        <div className="msg-right-div">
                        <span className="msg-date-time">{msgDateTime}</span><br/>
                        <span className="msg-name">{msgName}</span>
                        <span className="msg-desc">{msgDesc}</span> <br/>
                        <span className="msg-text">{msgText}</span>
                    </div>
        )
      }
    }
