import React, { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        firstName: "Jan",
        lastName: "Nowak",
        email: "jan.nowak@example.com"
      },
      {
        id: 2,
        firstName: "Adam",
        lastName: "Kowalski",
        email: "adam.kowalski@example.com"
      },
      {
        id: 3,
        firstName: "Zbigniew",
        lastName: "Koziol",
        email: "zbigniew.koziol@example.com"
      },
      {
        id: 4,
        firstName: "Mirek",
        lastName: "Dresler",
        email: "m.dresler@wp.pl"
      }
    ]
  };

  render() {
    return (
      <div className="app">
        <React.Fragment>
          <main className="container">
            <ContactForm />
            <Contacts contacts={this.state.contacts} />
          </main>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
