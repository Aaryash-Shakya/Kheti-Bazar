import React from 'react'

import Sidebar from './templates/Sidebar'

const Dashboard = () => {
    return (
        <div className='mx-5'>
            {/* title */}
            <div className='fs-3 mb-4 fw-bold'>
                Dashboard
            </div>
            <div>
                <div className='mb-5'>
                    <div className=''>
                        Applied Contracts
                    </div>
                    <div className='table'>
                        <table className='table table-striped'>
                            <tbody>
                                <tr>
                                    <td className='index'>1</td>
                                    <td className='contract-name'>Contract 1</td>
                                    <td className='status'>
                                        <div className='d-flex justify-content-end align-items-center h-100'>
                                            status
                                        </div>
                                    </td>
                                    <td className='action'>
                                        <button className='btn btn-sm btn-success outline-button w-25'>
                                            Details
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className=''>
                        Contracts Type
                    </div>
                    <div className='table'>
                        <table className='table table-striped'>
                            <tbody>
                                <tr className=''>
                                    <td className='index'>1</td>
                                    <td className='contract-name'>Contract 1</td>
                                    <td className='action'>
                                        <div className='d-flex'>
                                            <button className='btn btn-sm outline-button btn-success w-25'>
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard