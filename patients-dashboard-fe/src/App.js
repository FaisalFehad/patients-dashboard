import React, { Component } from "react";
import InfoBar from "./components/InfoBar";
import PersonalInfo from "./components/PersonalInfo";
import ContactInfo from "./components/ContactInfo";
import axios from "axios";

class App extends Component {
  state = { personal: {} };

  componentDidMount() {
    axios
      .get("http://localhost:9090")
      .then(({ data: { personal } }) => {
        this.setState({ personal: personal[0] });
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
            <PersonalInfo personal={this.state.personal} />
            <ContactInfo />
          </main>
        </div>
      </body>
    );
  }
}

export default App;
