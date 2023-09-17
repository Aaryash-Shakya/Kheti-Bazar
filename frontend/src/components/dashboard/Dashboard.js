import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../../Api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {


    const navigate = useNavigate()
    // const [contract.status, setcontract.Status] = useState(0);
    const [contractList, setContractList] = useState([]);

    useEffect(() => {
        const setActive = () => {
            document.getElementById('dashboardBorder').classList.add('active-border')
        }
        setTimeout(() => {
            setActive();
        }, 100);
    });

    useEffect(() => {
        axios.get(`${backendUrl}/contractlist`)
            .then(data => {
                // console.log(data.data[0].contract.status)
                // setcontract.Status(data.data[0].contract.status)
                setContractList(data.data)
            })
        // .catch(err => console.log(err))
    }, [])


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
                                {
                                    contractList.map((contract, index) => {
                                        console.log(contract)
                                        return (
                                            <tr className='d-flex justify-content-evenly align-items-center' key={index}>
                                                <td className='index'>
                                                    <div className='d-flex justify-content-end align-items-center h-100'>
                                                        {index + 1}
                                                    </div>
                                                </td>
                                                <td className='contract-name'>
                                                    <div className='d-flex justify-content-start align-items-center h-100'>
                                                        {contract.name}
                                                    </div>
                                                </td>
                                                <td className='contract.status'>
                                                    <div className='d-flex justify-content-end align-items-center h-100'>
                                                        {contract.status === 0 ? <div>
                                                            <span className='small-font-size pe-1'>
                                                                Pending
                                                            </span>
                                                            <button className='btn btn-sm btn-success bg-warning border border-warning'>
                                                            </button>
                                                        </div> : contract.status === 1 ? <div>
                                                            <span className='small-font-size pe-1'>
                                                                Rejected
                                                            </span>
                                                            <button className='btn btn-sm btn-success bg-danger border border-danger'>
                                                            </button>
                                                        </div> :
                                                            contract.status === 2 ?
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
                                                    <>
                                                        <button className='btn btn-sm btn-success outline-button px-5' onClick={() => {
                                                            navigate(`/contractDetails`)
                                                        }}>
                                                            {" Details"}
                                                        </button>
                                                    </>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    )}
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
                                {
                                    contractList.map((contract, index) => {
                                        return (
                                            <tr className='d-flex justify-content-evenly align-items-center'>
                                                <td className='index'>
                                                    {contract.status > 2 ?
                                                        <div className='d-flex justify-content-end align-items-center h-100'>
                                                            {index + 1}
                                                        </div> : ""
                                                    }
                                                </td>
                                                <td className='contract-name'>
                                                    {
                                                        contract.status > 2 ?
                                                            <div className='d-flex justify-content-start align-items-center h-100'>
                                                                {"Rajendra Acharya is the King"}
                                                            </div> : ""
                                                    }
                                                </td>
                                                <td className='contract-name'>
                                                    <div className='d-flex justify-content-start align-items-center h-100'>
                                                        {/* empty td for styling */}
                                                    </div>
                                                </td>
                                                <td className='action'>
                                                    <div className='d-flex'>
                                                        {contract.status !== 0 & contract.status !== 1 & contract.status !== 2 ? <div className='d-flex justify-content-end align-items-center'>
                                                            <button className='btn btn-sm outline-button btn-success px-5'>
                                                                Edit
                                                            </button>
                                                        </div> : ""}

                                                    </div>
                                                </td>
                                            </tr>)
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard