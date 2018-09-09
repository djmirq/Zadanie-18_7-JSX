import React, { Component } from "react";

class ConstactForm extends Component {
  render() {
    return (
      <form className="contactForm">
        <div className="name">
          <label htmlFor="">Imię</label>
          <input type="text" placeholder="..." />
        </div>
        <div className="surname">
          <label htmlFor="">Nazwisko</label>
          <input type="text" placeholder="..." />
        </div>
        <div className="email">
          <label htmlFor="">mail</label>
          <input type="email" placeholder="..." />
        </div>
        <button type="submit">Dodaj kontakt</button>
      </form>
    );
  }
}

export default ConstactForm;
