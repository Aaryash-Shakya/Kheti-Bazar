import React from 'react'


import Sidebar from "./templates/Sidebar"
import Topbar from './templates/Topbar'

const Dashboard = () => {
    return (
        <div className='row mw-100'>
            <div className='col-2 '>
                <Sidebar />
            </div>
            <div className='col-10'>
                <Topbar />
            </div>
        </div>
    )
}

export default Dashboard