import React from 'react'

import Sidebar from './templates/Sidebar'

const Dashboard = () => {
    return (
        <div className=''>
            <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-dash" role="tabpanel" aria-labelledby="pills-dash-tab" tabindex="0">
                        Hi i am here
                    </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    Profile
                </div>
            </div>
        </div>
    )
}

export default Dashboard