import React, { useState } from 'react'
import Navbar from './Navbar'

const Deleteuser = () => {
    const [input, changeInput] = useState(
        { Id: "" }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }
    const readInput = () => {
        console.log(input)
    }
    return (
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Id</label>
                                <input type="text" className="form-control" name='Id' value={input.Id} onChange={inputHandler} />
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="button btn btn-danger" onClick={readInput}>Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deleteuser