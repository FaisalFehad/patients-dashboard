import React, { Component } from "react";

class ContactInfo extends Component {
  state = {
    mobile: null,
    email: null,
    mobile: null,
    email: null,
    rx_sms: null,
    rx_email: null,
    marketing_sms: null,
    marketing_email: null
  };

  componentDidMount() {
    const {
      mobile,
      email,
      rx_sms,
      rx_email,
      marketing_sms,
      marketing_email
    } = this.props.contactDetails;
    this.setState({
      mobile,
      email,
      rx_sms,
      rx_email,
      marketing_sms,
      marketing_email
    });
  }

  handleChangeValue = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    return (
      <div class="col-sm-4">
        <div class="row full-height">
          <div class="col ">
            <div class="card p-0 card-sm full-height">
              <div class="card-top">
                <div class="left-items">
                  <div class="page-title">
                    <h6>Contact Details and Marketing</h6>
                  </div>
                </div>
                <div class="right-items">
                  <button type="button" class="btn btn-icon">
                    <img src="assets/img/icons/plus_big.svg" />
                  </button>
                </div>
              </div>
              <div class="card-content px-3 pb-3">
                <article>
                  <div class="value-pair">
                    <div class="text">Mobile</div>
                    <div class="value">
                      {this.state.mobile}
                      <button
                        onClick={() => {
                          this.handleChangeValue("mobile", "");
                        }}
                        class="btn btn-sm btn-icon"
                      >
                        <img src="assets/img/icons/delete.svg" />
                      </button>
                    </div>
                  </div>
                  <div class="value-pair">
                    <div class="text">Email Address</div>
                    <div class="value">
                      {this.state.email}
                      <button
                        onClick={() => {
                          this.handleChangeValue("email", "");
                        }}
                        class="btn btn-sm btn-icon"
                      >
                        <img src="assets/img/icons/delete.svg" />
                      </button>
                    </div>
                  </div>
                  <div class="value-pair">
                    <div class="text">Rx Notifications</div>
                    <div class="value">
                      <div class="switch-bar">
                        <div class="item">
                          <div>SMS</div>
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                        <div class="item">
                          <div>Email</div>
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="value-pair">
                    <div class="text">Marketing Notifications</div>
                    <div class="value">
                      <div class="switch-bar">
                        <div class="item">
                          <div>SMS</div>
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                        <div class="item">
                          <div>Email</div>
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div class="col alt-opt">
            <div class="v-btn-group">
              <button
                id="Allergies-btn"
                type="button"
                class="btn bnt-lg btn-block btn-danger"
              >
                Allergies
              </button>
              <button
                id="Preferred-btn"
                type="button"
                class="btn bnt-lg btn-block btn-success"
              >
                Preferred Customisation
              </button>
              <button
                type="button"
                class="btn bnt-lg btn-block btn-danger"
                data-toggle="modal"
                data-target="#log-modal"
              >
                View Comms Log*
              </button>
              <button
                type="button"
                class="btn bnt-lg btn-block btn-primary"
                data-toggle="modal"
                data-target="#paymentDetails"
              >
                Edit Credit Card
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
