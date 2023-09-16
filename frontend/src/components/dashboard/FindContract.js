import React from "react";

const FindContract = () => {
  return (
    <div className="mx-5">
      {/* title */}
      <div className="fs-3 mb-4 fw-bold">Find Company For Contract</div>
      <div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title fw-bold mb-3">Special title treatment</h5>
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
                <div className="d-flex align-items-center justify-content-start ms-0">
                  <a href="/">
                    <button class="btn outline-button btn-success btn-sm px-3 me-5">
                      Contact
                    </button>
                  </a>
                  <a href="/contractDetails">
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
