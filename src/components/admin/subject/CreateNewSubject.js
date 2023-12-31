import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import SubjectController from '../../../service/SubjectService';
import UserController from '../../../service/UserService';
import Select from 'react-select';
const CreateNewSubject = ({ setReloadSubject }) => {


    const nameRef = useRef();
    const codeRef = useRef();
    const descriptionRef = useRef();
    const gitlabConfigRef = useRef();
    const managerRef = useRef();
    const [issues, setIssues] = useState([]);
    const [managers, setManagers] = useState([])
    const [manager_id, setManagerId] = useState({});
    
    const [error,setError] = useState({})

    const [issuesStatus, setStatusIssue] = useState(true)

    useEffect(() => {
        UserController.getAllManager()
            .then(res => {
                const data = res.data?.managers?.map(item => {
                    return {
                        value: item?.id,
                        label: item?.email
                    }
                })
                setManagers(data);
                setManagerId(data[0]);
            })
    }, []);

    const handleCreateNewSubject = async () => {
        try {
            const subject = {
                name: nameRef.current.value,
                code: codeRef.current.value,
                description: descriptionRef.current.value,
                gitlab_config: gitlabConfigRef.current.value,
                manager_id: manager_id?.value || null,
                status: issuesStatus
            };

            let error = false;
            let err = {};

            if (!subject.name) {
                err = {
                    ...err,
                    name:"Name is required"
                }
                error = true;
            }

            if (!subject.code) {
                err = {
                    ...err,
                    code:"Code is required"
                }
                error = true;
            }

            if (error) {
                setError(err);
                return;
            }
            const data = await SubjectController.handleCreateNewSubject(subject);
            toast.success(data.data.message);
            nameRef.current.value = '';
            codeRef.current.value = '';
            descriptionRef.current.value = '';
            gitlabConfigRef.current.value = '';
            setIssues([]);
            setReloadSubject(pre => !pre);
        }
        catch (err) {
            return toast.error(err?.message);
        }
    };


    return (
        <div style={{ marginBottom: '50px' }} className='subject_create'>
            <div className='d-flex justify-content-center subject_c_title'>
                <h1><i>Create new subject</i></h1>
            </div>
            <div>
                <div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                        <div className="col-sm-6">
                            <input ref={nameRef} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                            {error?.name && <span style={{color:"red"}}><i>* Name is required</i></span>}
                        </div>
                        <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">Code*:</label>
                        <div className="col-sm-3">
                            <input ref={codeRef} type="text" className="form-control" id="inputEmail3" placeholder="Code" />
                            {error?.code && <span style={{color:"red"}}><i>* Code is required</i></span>}
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                        <div className="col-sm-10">
                            <textarea ref={descriptionRef} type="text" className="form-control" id="description" placeholder="Description" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="Gitlab" className="col-sm-2 col-form-label">Gitlab Config:</label>
                        <div className="col-sm-10">
                            <textarea ref={gitlabConfigRef} type="text" className="form-control" id="Gitlab" placeholder="Gitlab Config" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="inputState" className="col-sm-2 col-form-label">Manager:</label>
                        <div className="col-sm-10">
                            {managers.length > 0 && <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={managers[0]}
                                name="color"
                                options={managers}
                                onChange={(e) => setManagerId(e)}
                            />}
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
                                            setStatusIssue(true);
                                        }
                                    }} className="form-check-input" type="radio" name="gridRadios" id="activenewsubject" value={true} defaultChecked />
                                    <label className="form-check-label" htmlFor="activenewsubject">
                                        Active
                                    </label>
                                </div>
                                <div style={{ marginRight: "10px" }} className="form-check">
                                    <input onClick={(e) => {
                                        if (e.target.checked) {
                                            setStatusIssue(false);
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
                            <button onClick={handleCreateNewSubject} type="submit" className="btn btn-primary">Create new subject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNewSubject