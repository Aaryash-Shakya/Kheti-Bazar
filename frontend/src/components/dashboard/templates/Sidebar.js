import React from 'react'

// import iconify for icons
import { Icon } from '@iconify/react';

// import of images
import Logo from '../../../assets/images/white-logo.png'


const Navbar = () => {
    return (
        <div>
            <div>
                <div className='side-bar bg-success d-flex justify-content-center flex-column align-items-center position-fixed left-0 top-0' style={{width:"20%"}} >
                    <div className='mb-5'>
                        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none w-100">
                            <img className='mx-auto mt-3 w-75 object-fit-cover' src={Logo} alt='Logo' />
                        </a>
                    </div>
                    <ul class="nav nav-pills flex-column mb-auto ">
                        <li>
                            <button class="nav-link link-body-emphasis text-white fs-5 d-flex  align-items-center active"   id="pills-dash-tab" data-bs-toggle="pill" data-bs-target="#pills-dash" type="button" role="tab" aria-controls="pills-dash" aria-selected="true">
                                <Icon icon="ri:dashboard-fill" className='pe-1' />
                                Dashboard
                            </button>
                        </li>
                        <li>
                            <button href="/" class="nav-link link-body-emphasis text-white fs-5 d-flex  align-items-center  " id="pills-contract-tab" data-bs-toggle="pill" data-bs-target="#pills-contract" type="button" role="tab" aria-controls="pills-contract" aria-selected="false">
                                <Icon icon="mdi:file-document-edit" className='pe-1' />
                                Contracts
                            </button>
                        </li>
                        <li>
                            <a href="/" class="nav-link link-body-emphasis text-white fs-5 d-flex  align-items-center  ">
                                <Icon icon="ic:outline-analytics" className='pe-1' />
                                Analytics
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link link-body-emphasis text-white fs-5 d-flex  align-items-center  ">
                                <Icon icon="basil:bag-outline" className='pe-1' />
                                Find Contracts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar