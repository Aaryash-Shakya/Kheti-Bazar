import React from 'react'


import Sidebar from '../../components/dashboard/templates/Sidebar'
import Topbar from '../../components/dashboard/templates/Topbar'
import Dashboard from '../../components/dashboard/Dashboard'

const UserMain = () => {
    return (
        <div>
            <div className='row mw-100'>
                <div className='col-2'>
                    <Sidebar />
                </div>
                <div className='col-10'>
                    <div>
                        <Topbar />
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-dash" role="tabpanel" aria-labelledby="pills-dash-tab" tabindex="0">
                            <Dashboard />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserMain