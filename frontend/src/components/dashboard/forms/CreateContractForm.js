import React from 'react'

const CreateContractForm = () => {
    return (
        <div>
            <div className='fs-3 mb-4 fw-bold'>
                Create Contract
            </div>
            <div>
                <from>
                    <div className='mb-3'>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                    </div>
                </from>
            </div>
        </div>
    )
}

export default CreateContractForm
