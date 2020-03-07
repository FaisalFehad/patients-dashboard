import React from "react";

const PersonalInfo = props => {
  const {
    Patient_id,
    title,
    first_name,
    middle_name,
    surname,
    dob,
    age,
    discount,
    first_name_address,
    default_add,
    mobile
  } = props.personal;
  const { work } = props.address;

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
                      <div class="value">{Patient_id}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Patient ID</div>
                      <div class="value">{Patient_id}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Title</div>
                      <div class="value">{title}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">First Name</div>
                      <div class="value">{first_name}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Middle Name</div>
                      <div class="value">{middle_name}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Surname</div>
                      <div class="value">{surname}</div>
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <div class="value-pair">
                      <div class="text">DOB</div>
                      <div class="value">{dob}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Age</div>
                      <div class="value">{age}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Discount</div>
                      <div class="value">{discount}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">First Name</div>
                      <div class="value">{first_name_address}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Default Add.</div>
                      <div class="value">{default_add}</div>
                    </div>
                    <div class="value-pair">
                      <div class="text">Mobile</div>
                      <div class="value">{mobile}</div>
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
                    {work}
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
                    {work}
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
