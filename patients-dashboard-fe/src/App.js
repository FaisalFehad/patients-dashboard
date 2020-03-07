import React, { Component } from "react";
import InfoBar from "./components/InfoBar";
import PersonalInfo from "./components/PersonalInfo";
import ContactInfo from "./components/ContactInfo";
import axios from "axios";

class App extends Component {
  state = { personal: {}, addresses: {} };

  componentDidMount() {
    axios
      .get("http://localhost:9090")
      .then(({ data }) => {
        this.setState({
          personal: data.personal[0],
          addresses: data.addresses
        });
      })
      // handle success
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <body>
        <div class="content-wrap">
          <InfoBar />
          <main>
            <PersonalInfo
              personal={this.state.personal}
              address={this.state.addresses}
            />
            <ContactInfo />
          </main>
        </div>
      </body>
    );
  }
}

export default App;
