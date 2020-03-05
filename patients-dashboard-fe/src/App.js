import React, { Component } from "react";
import InfoBar from "./components/InfoBar";
import PersonalInfo from "./components/PersonalInfo";

class componentName extends Component {
  render() {
    return (
      <body>
        <div class="content-wrap">
          <InfoBar />
          <main>
            <PersonalInfo />
          </main>
        </div>
      </body>
    );
  }
}

export default componentName;
