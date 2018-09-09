import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact} //przekazanie całego obiektu dalej
          />
        ))}
      </div>
    );
  }
}

export default Contacts;

 