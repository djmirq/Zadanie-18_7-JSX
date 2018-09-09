import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    console.log(this.props.contact);

    return (
      <div className="contactItem">
        <div className="contactIcon">
          <img
            className="contactImage"
            src="https://image.flaticon.com/icons/svg/121/121956.svg"
            alt="foto"
            width="40px"
            height="40px"
          />
        </div>

        <div className="contact">
          <div className="name">
            <p className="contactLabel">{this.props.contact.firstName}</p>
            <p className="contactLabel">{this.props.contact.lastName}</p>
          </div>
          <a className="contactEmail" href="mailto:jan.nowak@example.com">
            {this.props.contact.email}
          </a>
        </div>

        <div className="infoIcon">
          <img
            className="infoImage"
            src="https://image.flaticon.com/icons/svg/131/131917.svg"
            alt="foto"
            width="20px"
            height="20px"
          />
        </div>
      </div>
    );
  }
}

export default Contact;
