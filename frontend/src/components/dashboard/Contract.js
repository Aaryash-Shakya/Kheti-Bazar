import { Icon } from '@iconify/react'
import React from 'react'

const Contract = () => {
    return (
        <div>
            <div className="container">
                <div className="fs-3 mb-4 fw-bold">
                    Contract
                </div>
                <div className="row gx-5">
                    <div className="col-lg-3">
                        <div className="card border border-success rounded-3 overflow-hidden">
                            <img className='w-100 object-fit-cover ' src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3755706.jpg&fm=jpg" alt="" />
                            <button className='create-contract-btn btn btn-success my-3 mx-auto'>
                                Create Contracts
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card border border-success rounded-3 overflow-hidden">
                            <img className='w-100 object-fit-cover ' src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3755706.jpg&fm=jpg" alt="" />
                            <button className='create-contract-btn btn btn-success my-3 mx-auto'>
                                Edit Contracts
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card border-0 find-contract p-2">
                            <h2>Find your Contracts</h2>
                            <p className=''>
                                Contracts: Your Path to Growth and Success. Seize the Opportunity, Ink the Deal, Reap the Rewards.Embrace contracts as the foundation of collaboration, trust, and progress. Seize the pen and let it ink your journey towards success, one contract at a time. Your commitment today is the harvest of prosperity tomorrow
                            </p>
                            <button className="find-contracts-btn btn btn-success w-50 py-3">
                                Find Contracts
                                <Icon icon="ph:bag-fill" className='ms-2' />
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
            <div className="container-fluid">

            </div>
        </div>
    )
}

export default Contract