import React from 'react'


// import of images
import Logo from '../assets/images/Logo.png'


const LandingPage = () => {
    return (
        <div>
            <div className='container ' >
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <img src={Logo} alt='Logo of Kheti Bajar' className='w-100'/>
                    </div>
                    <div className='col'>
                        <div className='d-flex flex-column h-100 justify-content-center'>
                            <div className='text-black fs-1 fw-bold'>Kheti Bajar</div>
                            <div className='text-dark fs-4'>
                                Cultivating Contracts, Growing Futures
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage