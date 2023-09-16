import React from 'react'

// import of images
import Logo from '../../assets/images/Logo.png'

const Navbar = () => {
    return (
        <div className='nav-section'>
            {/* <nav className='navbar navbar-expand-lg bg-body-tertiary '>
                <div className='container-lg d-flex justify-content-lg-between algin-items-center py-2 collapse navbar-collapse' id="navbarTogglerDemo02">
                    <div className='nav-logo'>
                        <a href='/' className='fs-2'>Logo</a>
                    </div>
                    <div className='d-flex justify-content-evenly w-25 align-items-center'>
                        <a href='/' className='nav-link btn'>Home</a>
                        <a href='/' className='nav-link btn'>About</a>
                    </div>
                    <div className='sign_in-sign_up-btn w-25'>
                        <a href='/' className='sign_in-btn btn btn-primary'>
                            Sign In
                        </a>
                        <a href='/' className='sign_up-btn btn btn-primary'>
                            Sign Up
                        </a>
                    </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </div>
            </nav> */}

            <nav className="navbar navbar-expand-lg bg-black ">
                <div className="container">
                    <a className="navbar-brand w-25" href="/">
                        <img src={Logo} alt='Logo of Kheti Bajar' className='logo-img'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-75" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between w-100">
                            <li className="nav-item">
                                <a className="nav-link active text-center text-white" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-center text-white" href="#about">Link</a>
                            </li>
                            <li className="nav-item d-flex justify-content-evenly w-md-25">
                                <a className="btn btn-primary" href="/">Sign Up</a>
                                <a className="btn btn-primary" href="/">Sign In</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
