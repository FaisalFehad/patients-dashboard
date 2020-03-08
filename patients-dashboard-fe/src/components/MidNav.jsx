import React from "react";

const MidNav = () => {
  return (
    <div class="card-top pl-0 pr-0 py-2 justify-content-end">
      <div class="right-items ">
        <button type="button" class="btn btn-light ml-2">
          <img src="assets/img/icons/path.svg" />
        </button>
        <button type="button" class="btn btn-primary mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5.74"
            height="9.309"
            viewBox="0 0 5.74 9.309"
          >
            <path
              id="path"
              d="M8.222,5.74,4.654,2.172,1.086,5.74,0,4.654,4.654,0,9.308,4.654Z"
              transform="translate(5.74) rotate(90)"
              fill="#ffffff"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>

        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#success-box"
          data-backdrop="false"
        >
          <img src="assets/img/icons/path-white.svg" /> &nbsp; Back to List View
        </button>
      </div>
    </div>
  );
};

export default MidNav;
