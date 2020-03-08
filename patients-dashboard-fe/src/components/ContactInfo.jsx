import React, { Component } from "react";

class ContactInfo extends Component {
  state = {};

  constructor(pros) {
    super(pros);
    console.log(pros.contactDetails, "<<<<< constructor");
  }

  render() {
    return <div></div>;
  }
}

export default ContactInfo;
