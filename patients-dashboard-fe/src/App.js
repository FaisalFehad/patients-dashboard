import React, { Component } from "react";
import InfoBar from "./components/InfoBar";
import PersonalInfo from "./components/PersonalInfo";
import ContactInfo from "./components/ContactInfo";
import axios from "axios";

class App extends Component {
  state = {
    personal: null,
    addresses: null,
    contact: null,
    history_of_prescriptions: null,
    notes: null,
    dispatch_address: null,
    history_of_items: null,
    data_loaded: false
  };

  componentDidMount() {
    return axios
      .get("http://localhost:9090")
      .then(
        ({
          data: {
            patient: {
              personal,
              addresses,
              contact,
              history_of_prescriptions,
              notes,
              dispatch_address,
              history_of_items
            }
          }
        }) => {
          this.setState({
            personal,
            addresses,
            contact,
            history_of_prescriptions,
            notes,
            dispatch_address,
            history_of_items,
            data_loaded: true
          });
        }
      )
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    {
      if (this.state.data_loaded) {
        return (
          <body>
            <div class="content-wrap">
              <InfoBar />
              <main>
                <div class="row dynamic-section">
                  <PersonalInfo
                    personal={this.state.personal}
                    addresses={this.state.addresses}
                  />
                  <ContactInfo contactDetails={this.state.contact} />
                </div>
              </main>
            </div>
          </body>
        );
      } else {
        return null;
      }
    }
  }
}

export default App;
