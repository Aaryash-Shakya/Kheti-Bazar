import React from 'react'


import { Icon } from '@iconify/react';


const Topbar = () => {
    return (
        <div className='d-flex align-items-center justify-content-end py-3 me-3'>
                <Icon icon="mdi:bell-outline" className='fs-3 me-3'/>
                <div className='user-account-detail'>
                    <div className='user-name fs-4'>
                        Rajendra Acharya
                    </div>
                    <div className='user-email fs-6'>
                        rajendra@gmail.com
                    </div>
                </div>
        </div>
    )
}

export default Topbar