import React, { useEffect } from 'react'

const Dashboard = () => {


    const status = 3
    useEffect(() => {
        const setActive = () => {
            document.getElementById('dashboardBorder').classList.add('active-border')
        }
        setTimeout(() => {
            setActive();
        }, 100);
    });
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
                        <table className='table  table-hover'>
                            <tbody>
                                <tr className='d-flex justify-content-evenly align-items-center'>
                                    <td className='index'>
                                        <div className='d-flex justify-content-end align-items-center h-100'>
                                            {"1"}
                                        </div>
                                    </td>
                                    <td className='contract-name'>
                                        <div className='d-flex justify-content-start align-items-center h-100'>
                                            {"Contract 1"}
                                        </div>
                                    </td>
                                    <td className='status'>
                                        <div className='d-flex justify-content-end align-items-center h-100'>
                                            {status === 0 ? <div>
                                                <span className='small-font-size pe-1'>
                                                    Pending
                                                </span>
                                                <button className='btn btn-sm btn-success bg-warning border border-warning'>
                                                </button>
                                            </div> : status === 1 ? <div>
                                                <span className='small-font-size pe-1'>
                                                    Rejected
                                                </span>
                                                <button className='btn btn-sm btn-success bg-danger border border-danger'>
                                                </button>
                                            </div> :
                                                status === 2 ?
                                                    <div>
                                                        <span className='small-font-size pe-1'>
                                                            Active
                                                        </span>
                                                        <button className='btn btn-sm btn-success bg-success border border-success '>
                                                        </button>
                                                    </div> : ""}
                                        </div>
                                    </td>
                                    <td className='action'>

                                        <button className='btn btn-sm btn-success outline-button px-5'>
                                            {" Details"}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mb-5 contracts-type'>
                    <div className=''>
                        Contracts Type
                    </div>
                    <div className='table'>
                        <table className='table table-striped'>
                            <tbody>
                                <tr className='d-flex justify-content-evenly align-items-center'>
                                    <td className='index'>
                                        <div className='d-flex justify-content-end align-items-center h-100'>
                                            {"1"}
                                        </div>
                                    </td>
                                    <td className='contract-name'>
                                        <div className='d-flex justify-content-start align-items-center h-100'>
                                            {"Rajendra Acharya is the King"}
                                        </div>
                                    </td>
                                    <td className='contract-name'>
                                        <div className='d-flex justify-content-start align-items-center h-100'>
                                            {/* empty td for styling */}
                                        </div>
                                    </td>
                                    <td className='action'>
                                        <div className='d-flex'>
                                            {status !== 0 & status !== 1 & status !== 2 ? <div className='d-flex justify-content-end align-items-center'>
                                                <button className='btn btn-sm outline-button btn-success px-5'>
                                                    Edit
                                                </button>
                                            </div> : ""}

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