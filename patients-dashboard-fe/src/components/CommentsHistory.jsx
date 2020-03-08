import React from "react";

const CommentsHistory = ({ dispatch_address, notes }) => {
  return (
    <div class="row mt-2">
      <div class="col-sm-8">
        <div class="card p-0 card-sm full-height">
          <div class="card-top">
            <div class="left-items">
              <div class="page-title">
                <h6>Notes</h6>
              </div>
            </div>
            <div class="right-items">
              <button type="button" class="btn btn-icon">
                <img src="assets/img/icons/plus_big.svg" />
              </button>
            </div>
          </div>
          <div class="card-content px-3 pb-3">
            <ul class="note-list">
              <li>
                <p>{notes[0].msg}</p>
                <div class="note-desc">{notes[0].details}</div>
              </li>
              <li>
                <p>{notes[1].msg}</p>
                <div class="note-desc">{notes[1].details}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card p-0 card-sm full-height">
          <div class="card-top">
            <div class="left-items">
              <div class="page-title">
                <h6>Patient Dispatch Address</h6>
              </div>
            </div>
            <div class="right-items">
              <button type="button" class="btn btn-icon">
                <img src="assets/img/icons/print.svg" />
              </button>
            </div>
          </div>
          <div class="card-content px-3 pb-3">
            <div class="row">
              <div class="col">{dispatch_address.address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsHistory;
