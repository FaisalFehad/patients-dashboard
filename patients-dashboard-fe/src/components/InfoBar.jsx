import React from "react";

const componentName = ({ data }) => {
  return (
    <header>
      <nav class="navbar navbar-light ">
        <div class="container-fluid">
          <div class="page-name">
            <h5>Patients</h5>
            <div class="details">
              Total
              <br />
              {data.number} Found
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default componentName;
