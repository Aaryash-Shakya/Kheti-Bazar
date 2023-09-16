import React from 'react'
import Topbar from './Topbar';

// import iconify for icons
import { Icon } from '@iconify/react';

// import of images
import Logo from '../../../assets/images/White Logo.png'


const Navbar = () => {
    return (
        <div>
            <div>
                <div className='side-bar bg-success d-flex justify-content-center flex-column align-items-center'>
                    <div className='mb-5'>
                        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none w-100">
                            <img src={Logo} alt='Logo' />
                        </a>
                    </div>
                    <ul class="nav nav-pills flex-column mb-auto ">
                        <li>
                            <a href="/" class="nav-link link-body-emphasis text-white fs-4 d-flex  align-items-center  ">
                                <Icon icon="ri:dashboard-fill" className='pe-1' />
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link link-body-emphasis text-white fs-4 d-flex  align-items-center  ">
                                <Icon icon="mdi:file-document-edit" className='pe-1' />
                                Contracts
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link link-body-emphasis text-white fs-4 d-flex  align-items-center  ">
                                <Icon icon="ic:outline-analytics" className='pe-1' />
                                Analytics
                            </a>
                        </li>
                        <li>
                            <a href="/" class="nav-link link-body-emphasis text-white fs-4 d-flex  align-items-center  ">
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