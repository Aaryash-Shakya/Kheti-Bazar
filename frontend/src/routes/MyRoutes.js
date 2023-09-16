import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'

// import UserMain from '../pages/users/UserMain'
import UserNav from '../pages/users/UserNav'
import Dashboard from '../components/dashboard/Dashboard'
import Contract from '../components/dashboard/Contract'
import FindContract from '../components/dashboard/FindContract'
import ContractDetails from '../components/dashboard/ContractDetails'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import CreateContractForm from '../components/dashboard/forms/CreateContractForm'

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signIn" element={<SignInForm />} />
                <Route path="/signUp" element={<SignUpForm />} />
                <Route path="" element={<UserNav />} >
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/contracts" element={<Contract />} />
                    <Route path="/findContracts" element={<FindContract />} />
                    <Route path="/contractDetails" element={<ContractDetails />} />
                    <Route path="/createContract" element={<CreateContractForm />} />

                </Route>
            </Routes>

        </Router>
    )
}

export default MyRoutes