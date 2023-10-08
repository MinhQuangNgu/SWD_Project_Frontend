import React, { useState } from 'react'
import CreateNewIssue from './CreateNewIssue';


const CreateNewSubject = () => {

    const [createIssue,setCreateIssue] = useState(false);

    return (
        <div style={{ marginBottom: '50px' }} className='subject_create'>
            <div className='d-flex justify-content-center subject_c_title'>
                <h1><i>Create new subject</i></h1>
            </div>
            <div>
                <div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                        <div className="col-sm-6">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                        </div>
                        <label for="inputEmail3" className="col-sm-1 col-form-label">Code*:</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="Code" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="description" className="col-sm-2 col-form-label">Description:</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="description" placeholder="Description" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="Syllabus" className="col-sm-2 col-form-label">Syllabus:</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="Syllabus" placeholder="Syllabus" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="Gitlab" className="col-sm-2 col-form-label">Gitlab Config:</label>
                        <div className="col-sm-10">
                            <textarea type="text" className="form-control" id="Gitlab" placeholder="Gitlab Config" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="inputState" className="col-sm-2 col-form-label">Manager:</label>
                        <div className="col-sm-10">
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="inputState" className="col-sm-2 col-form-label">Issues:</label>
                        <div className="col-sm-10 d-flex flex-wrap">
                            <button onClick={() => {
                                setCreateIssue(true);
                            }} style={{ height: "35px", marginRight: "5px", fontSize: "11px" }} className='btn btn-primary'>Add New</button>
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
                                                                    <th scope="col">Status</th>
                                                                    <th scope="col">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row" style={{ color: "#666666" }}>1</th>
                                                                    <td>Issues 1</td>
                                                                    <td>
                                                                        description
                                                                    </td>
                                                                    <td>Active</td>
                                                                    <td style={{ width: '10%' }}>
                                                                        <button style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-danger'>Delete</button>
                                                                        <button style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-primary'>Update</button>
                                                                        <button style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-secondary'>Deactive/active</button>
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
                    <div className="form-group row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Create new subject</button>
                        </div>
                    </div>
                </div>
            </div>
            {createIssue && <CreateNewIssue setCreate={setCreateIssue}/>}
        </div>
    )
}

export default CreateNewSubject