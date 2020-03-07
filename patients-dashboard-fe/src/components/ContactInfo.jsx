import React from "react";

const ContactInfo = () => {
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
                    07714306877
                    <button class="btn btn-sm btn-icon">
                      <img src="assets/img/icons/delete.svg" />
                    </button>
                  </div>
                </div>
                <div class="value-pair">
                  <div class="text">Email Address</div>
                  <div class="value">
                    Helen@abcclinic.co.uk
                    <button class="btn btn-sm btn-icon">
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
};

export default ContactInfo;
