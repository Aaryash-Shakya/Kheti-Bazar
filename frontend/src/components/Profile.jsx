import React from 'react'
import ProfilePicture from '../assets/images/profile-picture.png'
import News from '../assets/images/News.png'

const Profile = () => {
    return (
        <div>
            <div id="profile" className="container-lg ms-lg-4 px-md-5 ms-2 px-2">
                <div className="row g-3">
                    <div className="col-lg-2 col-3 profile-pic-container">
                        <img src={ProfilePicture} alt="a person face upclose" />
                    </div>
                    <div className="col-lg-6 col-8 d-flex flex-column align-items-start justify-content-center">
                        <p style={{ fontSize: "20px" }}>
                            <strong className='fw-bold'>Mr. Rajendra Acharya</strong>
                            <br />Farmer</p>
                    </div>
                </div>
                <h3 className='mt-5 mb-3 fw-bold' style={{ fontSize: "20px" }}>Land and Crops Description</h3>
                <div className="row g-3">
                    <div className="col-md-8 p-3" style={{ backgroundColor: "#edf8e8" }}>
                        <p>Land location : </p>
                        <p>Land Size ( in Sq. Meter ) : </p>
                        <p>Fertility : </p>
                        <p>Soil Type : </p>
                        <p>Main Crops : </p>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-start justify-content-end">
                        <button className='btn btn-success outline-button'>
                            Check Contract Status
                        </button>
                        <button className='btn btn-success contained-button mt-2'>
                            Send Contract
                        </button>
                    </div>
                </div>
                <h3 className='mt-5 mb-3 fw-bold' style={{ fontSize: "20px" }}>Previous Contracts Testimonials</h3>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="testimonial-card border border-black">
                            <div className="logo-holder">
                                <img src={News} alt="" />
                            </div>
                            <div className="text-holder w-50" style={{ fontSize: "14px" }}>
                                <p>
                                    Working with Rajendra Acharya is awesome. It was best experience, ever .
                                    His product is awesome.
                                    And that was awesome.
                                </p>
                                <p>
                                    Must Contract if his land and
                                    contract is pending
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="testimonial-card border border-black">
                            <div className="logo-holder">
                                <img src={News} alt="" />
                            </div>
                            <div className="text-holder w-50" style={{ fontSize: "14px" }}>
                                <p>
                                    Working with Rajendra Acharya is awesome. It was best experience, ever .
                                    His product is awesome.
                                    And that was awesome.
                                </p>
                                <p>
                                    Must Contract if his land and
                                    contract is pending
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile