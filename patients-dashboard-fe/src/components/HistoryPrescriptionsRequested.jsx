import React from "react";

const HistoryPrescriptionsRequested = ({
  history_of_prescriptions,
  history_of_items
}) => {
  console.log(history_of_items);
  return (
    <div class="row">
      <div class="col">
        <div class="card p-0">
          <div class="card-top">
            <div class="left-items">
              <button class="btn btn-primary">
                Add new <img src="assets/img/icons/plus.svg" />
              </button>
              <div class="ml-3 ">
                <h6 class="mb-0">History of Prescriptions</h6>
              </div>
            </div>
          </div>
          <div class="card-content">
            <div class="table-wrap">
              <table class="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th class="sort">
                      <div>Date</div>
                    </th>
                    <th class="sort asc">
                      <div>ID</div>
                    </th>
                    <th class="sort dsc">
                      <div>Prescriber</div>
                    </th>
                    <th class="sort">
                      <div>Status</div>
                    </th>
                    <th class="sort">
                      <div>Portal</div>
                    </th>
                    <th class="sort">
                      <div>Checks</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{history_of_prescriptions[0].date}</td>
                    <td>{history_of_prescriptions[0].id}</td>
                    <td>{history_of_prescriptions[0].prescriber}</td>
                    <td class="text-success">
                      {history_of_prescriptions[0].status}
                    </td>
                    <td>
                      <img src="assets/img/icons/tick_green.svg" />
                    </td>
                    <td>
                      <img src="assets/img/icons/help.svg" />
                    </td>
                  </tr>
                  <tr>
                    <td>{history_of_prescriptions[0].date}</td>
                    <td>{history_of_prescriptions[0].id}</td>
                    <td>{history_of_prescriptions[0].prescriber}</td>
                    <td class="text-success">
                      {" "}
                      {history_of_prescriptions[0].status}
                    </td>
                    <td>
                      <img src="assets/img/icons/tick_green.svg" />
                    </td>
                    <td>
                      <img
                        data-container="body"
                        data-toggle="popover"
                        data-placement="left"
                        data-content='
                      <div class="p-2">
                      <h6 class="mb-3">Prescription Check Details</h6>
                      <div class="form-group">
                        <label for="">PCT Check</label>
                        <input type="text" class="form-control" id="">
                      </div>
                      <div class="form-group">
                        <label for="">PCT Check Timestamp</label>
                        <input type="text" class="form-control" id="">
                      </div>
                      <hr/>
                      <div class="form-group">
                        <label for="">Clinical Check</label>
                        <input type="text" class="form-control" id="">
                      </div>
                      <div class="form-group">
                          <label for="">Clinical Check Timestamp</label>
                          <input type="text" class="form-control " id="">
                        </div>
                      </div>
                      '
                        src="assets/img/icons/help.svg"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card p-0">
          <div class="card-top">
            <div class="left-items">
              <button class="btn btn-primary">
                Add new <img src="assets/img/icons/plus.svg" />
              </button>
              <div class="ml-3 ">
                <h6 class="mb-0">History of Requested Items</h6>
              </div>
            </div>
          </div>
          <div class="card-content">
            <div class="table-wrap">
              <table class="table table-sm table-borderless">
                <thead>
                  <tr>
                    <th class="sort">
                      <div>Date</div>
                    </th>
                    <th class="sort asc">
                      <div>ID</div>
                    </th>
                    <th class="sort dsc">
                      <div>Requested Items</div>
                    </th>
                    <th class="sort">
                      <div>Pack Size</div>
                    </th>
                    <th class="sort">
                      <div>Status</div>
                    </th>
                    <th class="sort">
                      <div>Checks</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{history_of_items[0].date}</td>
                    <td>{history_of_items[0].id}</td>
                    <td>{history_of_items[0].requested_items}</td>
                    <td>{history_of_items[0].pack_size}</td>
                    <td class="text-success">Request Made</td>
                    <td>
                      <img src="assets/img/icons/help.svg" />
                    </td>
                  </tr>
                  <tr>
                    <td>{history_of_items[1].date}</td>
                    <td>{history_of_items[1].id}</td>
                    <td>{history_of_items[1].requested_items}</td>
                    <td>{history_of_items[1].pack_size}</td>
                    <td class="text-success">Request Made</td>
                    <td>
                      <img src="assets/img/icons/help.svg" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPrescriptionsRequested;
