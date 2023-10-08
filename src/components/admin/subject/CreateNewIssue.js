import React, { useState } from 'react'
import Label from '../label/Label';
const CreateNewIssue = ({setCreate}) => {
    const [label,setLabel] = useState(false);
    return (
        <div className='add_issues'>
            <div className="add_issues_form">
                <div className='add_issues_header'>
                    Create new issues
                </div>
                <div onClick={() => {
                    setCreate(false);
                }} className='add_issues_close'>
                    &times;
                </div>
                <div className='add_issues_form_input'>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="description" className="col-sm-2 col-form-label">Description:</label>
                        <div className="col-sm-10">
                            <textarea style={{ maxHeight: "50vh" }} type="text" className="form-control" id="description" placeholder="Description" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Label:</label>
                        <div className="col-sm-10">
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <select style={{ width: "100%" }} className="form-select" aria-label="Label">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='col-sm-4'>
                                    <button onClick={() => {
                                        setLabel(true);
                                    }} style={{ fontSize: "12px", height: "100%", width: "100%" }} className='btn btn-primary'>Label management</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div style={{ margin: "20px 0" }} className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Status</legend>
                            <div className="col-sm-10 d-flex">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="active" defaultChecked />
                                    <label className="form-check-label" for="gridRadios1">
                                        Active
                                    </label>
                                </div>
                                <div style={{ marginLeft: "20px" }} className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                    <label className="form-check-label" for="gridRadios2">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div style={{ marginTop: '10px' }} className='d-flex justify-content-center'>
                        <button style={{ fontSize: "14px" }} className='btn btn-primary'>Create New Issues</button>
                        <button onClick={() => {
                            setCreate(false);
                        }} style={{ fontSize: "14px", marginLeft: "10px" }} className='btn btn-secondary'>Close</button>
                    </div>
                </div>
            </div>
            {label && <Label setLabel={setLabel}/>}
        </div>
    )
}

export default CreateNewIssue