import React, { useState } from 'react'
import CreateNewLabel from './CreateNewLabel';

const Label = ({ setLabel }) => {

    const [createLabel,setCreateLabel] = useState(false);
    return (
        <div className='subject_label_m'>
            <div className='label_management'>
                <div className='add_issues_header'>
                    Label management
                </div>
                <div onClick={() => {
                    setLabel(false);
                }} className='add_issues_close'>
                    &times;
                </div>
                <div style={{marginTop:"15px"}}>
                    <button onClick={() => {
                        setCreateLabel(true);
                    }} style={{fontSize:"12px"}} className='btn btn-primary'>Create New Label</button>
                </div>
                <div>
                    <section className="intro w-100">
                        <div className="gradient-custom-1">
                            <div className="mask d-flex align-items-center h-100">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="table-responsive bg-white">
                                                <table className="table mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ID</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Description</th>
                                                            <th scope="col">Color</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" style={{ color: "#666666" }}>1</th>
                                                            <td>Issues 1</td>
                                                            <td>Active</td>
                                                            <td>
                                                                <input type='color' defaultValue="#666666" disabled/>
                                                            </td>
                                                            <td style={{ width: '10%' }}>
                                                                <button style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-danger'>Delete</button>
                                                                <button style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-primary'>Update</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {createLabel && <CreateNewLabel setCreateLabel={setCreateLabel}/>} 
        </div>
    )
}

export default Label