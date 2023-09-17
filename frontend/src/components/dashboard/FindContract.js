import React from "react";



import { Icon } from '@iconify/react';
const FindContract = () => {

  const uRole = parseInt(localStorage.getItem("urole"))
  const uid = localStorage.getItem("uid")
  return (
    <div className="mx-5">
      {/* title */}
      <div className="fs-3 mb-4 fw-bold">Find {uRole === 1 ? "Farmer" : "Company"} For Contract</div>
      <div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div class="card">
              <div class="card-body position-relative">
                <h5 class="card-title fw-bold mb-3">Special title treatment <span className="fw-light" style={{ fontSize: "12px" }}>{"3 days ago"}</span></h5>
                <p class="card-text">
                  Requirements
                </p>
                <ul>
                  <li>Crop Type: { }</li>
                  <li>Quantity Needed: { }</li>
                  <li>Quantity Requirements: { }</li>
                  <li>Deliver Timeframe: { }</li>
                  <li>Location: { }</li>
                </ul>
                <div className="mb-3">
                  <a href="/" className="text-success">
                    Contractor's Details and Policy
                  </a>
                </div>
                <div className="position-absolute top-0 end-0 pe-5 pt-2">
                  <a href="/profile">
                    <button class="btn outline-button btn-success btn-sm rounded-circle fs-5" data-bs-toggle="tooltip"  data-bs-custom-class="custom-tooltip" data-bs-placement="bottom" data-bs-title="Profile">
                      <Icon icon="basil:image-solid" />
                    </button>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-start ms-0">
                  <a href="/">
                    <button class="btn outline-button btn-success btn-sm px-3 me-5">
                      Contact
                    </button>
                  </a>
                  <a href="/contractDetails/65057e6aaf10c778e6cf9da4">
                    <button class="btn contained-button btn-outlined btn-sm px-3">
                      See More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindContract;
