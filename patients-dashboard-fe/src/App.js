import React, { Component } from "react";
import InfoBar from "./components/InfoBar";
import PersonalInfo from "./components/PersonalInfo";
import ContactInfo from "./components/ContactInfo";

class componentName extends Component {
  render() {
    return (
      <body>
        <div class="content-wrap">
          <InfoBar />
          <main>
            <PersonalInfo />
            <ContactInfo />
          </main>
        </div>
      </body>
    );
  }
}

export default componentName;
