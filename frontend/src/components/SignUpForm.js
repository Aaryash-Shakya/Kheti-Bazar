import React, {useState} from 'react'


import Logo from "../assets/images/Logo.png"

const SignUpForm = () => {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleDropdownChange = (event) => {
        setRole(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a data object with form values
        const formData = {
            name,
            email,
            phoneNumber,
            password,
            role,
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
    };


    return (
        <div>
            <div className='container d-flex align-items-center my-auto'>
                <div>
                    <img src={Logo} alt='' />
                </div>
                <div className='card p-5 w-100 bg-light' >
                    <div className='fs-3'>
                        Welcome !
                    </div>
                    <form id="signupForm" onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label htmlFor="InputName" className="form-label fs-5 my-3">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="InputName"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="InputEmail" className="form-label fs-5 my-3">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="InputEmail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="InputPhoneNumber" className="form-label fs-5 my-3">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="InputPhoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="InputPassword" className="form-label fs-5 my-3">
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
                        <div className="my-3">
                            <label htmlFor="InputRole" className="form-label fs-5 my-3">
                                User Type
                            </label>
                            <select
                                className="form-select"
                                id="InputRole"
                                value={role}
                                onChange={handleDropdownChange}
                            >
                                <option value="">Select</option>
                                <option value={0}>Farmer</option>
                                <option value={1}>Buyer</option>
                                {/* Add more options if needed */}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-success rounded-0 form-control">
                            Sign Up
                        </button>
                    </form>
                    <div className='my-3'>
                        Already have an Account? <a href='/signIn' className='text-decoration-none text-success fw-bold'>Sign In</a>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default SignUpForm
