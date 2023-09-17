import { Icon } from '@iconify/react'
import React,{useEffect,useState} from 'react'
import { backendUrl } from '../../Api'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ContractDetails = () => {
    const [contractData, setContractData] = useState('')
    // useEffect(() => {
    //     const uid = localStorage.getItem('uid')
    //     if (uid === "")
    //         return console.log('not logged in');
    //     axios.get(`${backendUrl}/userdetail/${uid}`)
    //         .then(contract => {
    //             setContractData(contract.data)
    //         })
    //         .catch(err => console.log(err))
    //         console.log(contractData);
    // }, [])
    const cid = '65057e6aaf10c778e6cf9da4'
    useEffect(()=>{
        axios.get(`${backendUrl}/contractdetail/${cid}`)
        .then(contract=>{
            setContractData(contract.data)
        })
        .catch(err=>console.log(err))
    },[])
    console.log(contractData);
    return (
        <div>
            <div className="container ms-lg-4 px-md-5 ms-2 px-2">
                <h3 className='mt-5 mb-3 fw-bold' style={{ fontSize: "20px" }}>Contract Details</h3>
                <p>
                    <strong>Product Details</strong><br />
                    Product: { contractData.order.crop.crop_name}<br />
                    Quantity: { contractData.order.quantity}<br />
                    Price: { contractData.order.price }<br />
                </p>
                <p>
                    <strong>Delivery and Acceptance</strong><br />
                    Delivery Date: { contractData.order.deadline_date } <br />
                    Delivery Location: { contractData.order.deadline_date} <br />
                    Acceptance: { contractData.order.isCompleted} <br />
                </p>
                <p>
                    <strong>Payment Terms</strong><br />
                    Payment Amount: { contractData.order.price } <br />
                    Payment Schedule: 50% on order, and remaining 50% on delivery <br />
                    Payment Method: Bank Transfer <br />
                </p>
                <p>
                    <strong>Quality Assurance</strong><br />
                    Quality Standards: 50% upon order, 50% upon delivery <br />
                    Refunds and Returns: Full refund if product does not meet quality standards. <br />
                </p>
                <p>
                    <strong>Governing Law</strong><br />
                    This Contract Shall be governed by the <i>Nepal Government</i> <br />
                </p>
                <p>
                    <strong>Termination</strong><br />
                    Either party may terminate this Contract with a 7-day written notice. <br />
                </p>
                <p>
                    <strong>Confidentiality</strong><br />
                    Both Parties shall maintain the confidentiality of transaction details.<br />
                </p>
                <p>
                    <strong>Entire Agreement</strong><br />
                    This Contract constitutes the complete agreement between the parties. <br />
                </p>
                <br />
                <button className="btn outline-button px-3" style={{ fontSize: "16px" }}>
                    View in PDF <Icon icon='teenyicons:pdf-outline' className='fs-4'></Icon>
                </button>
                <br />
                <br />
                <p>
                    <span className='text-success fw-bold'>Contract With: </span>{ }<br />
                    <span className='text-success fw-bold'>Contract Date: </span>{ }<br />
                    <span className='text-success fw-bold'>Contract Status: </span>{ }<br />
                    <span className='text-success fw-bold'>Contract Remaining Time: </span>{ }<br />
                </p>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default ContractDetails;
