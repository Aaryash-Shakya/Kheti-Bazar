import React, { useState } from 'react'


import Logo from "../assets/images/Logo.png"

const SignInForm = () => {

    const [role, setRole] = useState(''); // State to store the selected value
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleDropdownChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a data object with form values
        const formData = {
            role,
            email,
            password,
            rememberMe,
        };

        try {
            // Make a POST request to your API
            const response = await fetch('your-api-endpoint-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle a successful response here
                const data = await response.json();
                console.log(data);
            } else {
                // Handle errors here
                console.error('Error:', response.status);
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }
    }


    return (
        <div className='container d-flex align-items-center'>
            <div>
                <img src={Logo} alt='' />
            </div>
            <div className='card p-5 w-100 bg-light' >
                <div className='fs-3'>
                    Welcome !
                </div>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label htmlFor="InputRole" className="form-label fs-6 my-3">
                            Type
                        </label>
                        <div className="dropdown">
                            <select
                                className="btn btn-secondary bg-success dropdown-toggle w-25"
                                value={role}
                                onChange={handleDropdownChange}
                            >
                                <option value="" disabled className='text-white'>Select</option>
                                <option value={0}>Farmer</option>
                                <option value={1}>Buyer</option>
                            </select>
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="InputEmail1" className="form-label fs-6 my-3">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="InputEmail1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-3">
                        <label htmlFor="InputPassword" className="form-label fs-6 my-3">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="InputPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="my-3 d-flex align-items-center justify-content-between">
                        <div>
                            <input
                                type="checkbox"
                                className="me-2 checkmark"
                                id="RememberMe"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label htmlFor="RememberMe" className="form-label fs-6 my-3">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <a href="/forgotPassword" className="text-decoration-none fs-6 text-success">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success rounded-0 form-control">
                        Login
                    </button>
                </form>
                <div className='my-3'>
                    Don't have an Account? <a href='/signUp' className='text-decoration-none text-success fw-bold'>Sign Up</a>
                </div>
            </div>
        </div >
    )
}

export default SignInForm
