import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import SettingController from '../../../service/SettingService';
const CreateNewSetting = ({ setReloadSetting }) => {

    const nameRef = useRef();
    const roleRef = useRef();
    const typeRef = useRef();
    const displayOrderRef = useRef();
    
    const [error,setError] = useState({})

    const [status, setStatus] = useState([]);

    const handleCreateNewSetting = async () => {
        try {
            const setting = {
                name: nameRef.current.value,
                role: roleRef.current.value,
                type: typeRef.current.value,
                display_order: displayOrderRef.current.value,
                status: status?.value || null
            };

            let error = false;
            let err = {};

            if (!setting.name) {
                err = {
                    ...err,
                    name:"Name is required"
                }
                error = true;
            }

            if (!setting.role) {
                err = {
                    ...err,
                    code:"Role is required"
                }
                error = true;
            }

            if (error) {
                setError(err);
                return;
            }
            const data = await SettingController.handleCreateNewSetting(setting);
            toast.success(data.data.message);
            nameRef.current.value = '';
            roleRef.current.value = '';
            typeRef.current.value = '';
            displayOrderRef.current.value = '';
            status.current.value = '';
            setReloadSetting(pre => !pre);
        }
        catch (err) {
            return toast.error(err?.message);
        }
    };


    return (
        <div style={{ marginBottom: '50px' }} className='subject_create'>
            <div className='d-flex justify-content-center subject_c_title'>
                <h1><i>Create new setting</i></h1>
            </div>
            <div>
                <div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                        <div className="col-sm-6">
                            <input ref={nameRef} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                            {error?.name && <span style={{color:"red"}}><i>* Name is required</i></span>}
                        </div>
                        <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">Role*:</label>
                        <div className="col-sm-3">
                            <input ref={roleRef} type="text" className="form-control" id="inputEmail3" placeholder="Role" />
                            {error?.code && <span style={{color:"red"}}><i>* Role is required</i></span>}
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Type:</label>
                        <div className="col-sm-10">
                            <textarea ref={typeRef} type="text" className="form-control" id="description" placeholder="Type" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="Gitlab" className="col-sm-2 col-form-label">Dispay Order:</label>
                        <div className="col-sm-10">
                            <textarea ref={displayOrderRef} type="text" className="form-control" id="Gitlab" placeholder="Display Order" />
                        </div>
                    </div>
                    {/* <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="inputState" className="col-sm-2 col-form-label">Issues:</label>
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
                                                                    <th style={{ width: "5%" }} scope="col">Label</th>
                                                                    <th style={{ width: "12%" }} scope="col">Title</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Status</th>
                                                                    <th scope="col">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {issues?.map((item, index) => (
                                                                    <tr>
                                                                        <th>{item?.label}</th>
                                                                        <td>{item?.title}</td>
                                                                        <td>
                                                                            {item?.description}
                                                                        </td>
                                                                        <td>{item?.status?.name}</td>
                                                                        <td style={{ width: '30%' }}>
                                                                            <div className='d-flex'>
                                                                                <button onClick={() => {
                                                                                    handleRemoveIssues(index);
                                                                                }} style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-danger'>Delete</button>
                                                                                <button onClick={() => {
                                                                                    setUpdateIssue({
                                                                                        item,
                                                                                        id:index
                                                                                    });
                                                                                }} style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-primary'>Update</button>
                                                                                <button onClick={() => {
                                                                                    handleChangeStatus(index);
                                                                                }} style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-secondary'>Deactive/active</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                ))}
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
                    </div> */}
                    <fieldset className="form-group">
                        <div style={{ margin: "20px 0" }} className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Status</legend>
                            <div className="col-sm-10 d-flex">
                                <div style={{ marginRight: "10px" }} className="form-check">
                                    <input onClick={(e) => {
                                        if (e.target.checked) {
                                            setStatus(true);
                                        }
                                    }} className="form-check-input" type="radio" name="gridRadios" id="activenewsubject" value={true} defaultChecked />
                                    <label className="form-check-label" htmlFor="activenewsubject">
                                        Active
                                    </label>
                                </div>
                                <div style={{ marginRight: "10px" }} className="form-check">
                                    <input onClick={(e) => {
                                        if (e.target.checked) {
                                            setStatus(false);
                                        }
                                    }} className="form-check-input" type="radio" name="gridRadios" id="inactivenewsubject" value={false} />
                                    <label className="form-check-label" htmlFor="inactivenewsubject">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <button onClick={handleCreateNewSetting} type="submit" className="btn btn-primary">Create new setting</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNewSetting