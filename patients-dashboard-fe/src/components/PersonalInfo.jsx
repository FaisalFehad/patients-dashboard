import React from "react";

const PersonalInfo = () => {
  return (
    <div class="col-sm-8 ">
      <div class="row full-height">
        <div class="col-sm-7">
          <div class="card p-0 card-sm full-height">
            <div class="card-content p-3">
              <article>
                <div class="row">
                  <div class="col-sm-5">
                    <div class="value-pair">
                      <div class="text">Patient ID</div>
                      <div class="value">P123wq3</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Patient ID</div>
                      <div class="value">P123wq3</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Title</div>
                      <div class="value">Mr.</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">First Name</div>
                      <div class="value">John</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Middle Name</div>
                      <div class="value">Doe</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Surname</div>
                      <div class="value">Smith</div>
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <div class="value-pair">
                      <div class="text">DOB</div>
                      <div class="value">13.05.80</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Age</div>
                      <div class="value">26</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Discount</div>
                      <div class="value">15%</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">First Name</div>
                      <div class="value">98 Hudson St, DUNCHURCH, CV22 3ZH</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Default Add.</div>
                      <div class="value">079 4327 4373</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Mobile</div>
                      <div class="value">Smith</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="col-sm-5">
          <div class="card p-0 card-sm full-height">
            <div class="card-top">
              <div class="left-items">
                <div class="page-title">
                  <h6>Addresses</h6>
                </div>
              </div>
              <div class="right-items">
                <button
                  type="button"
                  class="btn btn-icon"
                  data-toggle="modal"
                  data-target="#newAddress"
                  data-backdrop="false"
                >
                  <img src="assets/img/icons/plus_big.svg" />
                </button>
              </div>
            </div>
            <div class="card-content px-3 pb-3">
              <article>
                <div class="row">
                  <div class="col">
                    <div class="action-header">
                      <div class="action-text">
                        <strong>Work</strong>
                        <img src="assets/img/icons/tick_green.svg" />
                      </div>
                      <div class="action-btn">
                        <button class="btn btn-icon btn-sm">
                          <img src="assets/img/icons/edit.svg" />
                        </button>
                        <button class="btn btn-icon btn-sm">
                          <img src="assets/img/icons/delete.svg" />
                        </button>
                      </div>
                    </div>
                    Flat 2 <br />
                    100 Lansdowne Place <br />
                    Hove <br />
                    United Kingdom <br />
                    East Sussex
                  </div>
                  <div class="col">
                    <div class="action-header">
                      <div class="action-text">
                        <strong>Work</strong>
                      </div>
                      <div class="action-btn">
                        <button class="btn btn-icon btn-sm">
                          <img src="assets/img/icons/edit.svg" />
                        </button>
                        <button class="btn btn-icon btn-sm">
                          <img src="assets/img/icons/delete.svg" />
                        </button>
                      </div>
                    </div>
                    Flat 2 <br />
                    100 Lansdowne Place <br />
                    Hove <br />
                    United Kingdom <br />
                    East Sussex
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
