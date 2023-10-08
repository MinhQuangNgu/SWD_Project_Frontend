import React, { useRef, useState } from 'react'
import CreateNewIssue from './CreateNewIssue';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const CreateNewSubject = () => {

    const [createIssue, setCreateIssue] = useState(false);

    const nameRef = useRef();
    const codeRef = useRef();
    const descriptionRef = useRef();
    const syllabusRef = useRef();
    const gitlabConfigRef = useRef();
    const managerRef = useRef();
    const [issues, setIssues] = useState([]);
    const statusRef = useRef();

    const handleRemoveIssues = (index) => {
        const issueTemp = issues;
        issueTemp.splice(index,1);
        setIssues([...issueTemp]);
    }

    const handleCreateNewSubject = async () =>  {
        try{
            const subject = {
                name:nameRef.current.value,
                code:codeRef.current.value,
                description:descriptionRef.current.value,
                syllabus:syllabusRef.current.value,
                gitlab_config:gitlabConfigRef.current.value,
                manager_id:managerRef.current.value,
                status:statusRef.current.checked ? 'active' : 'inactive',
                issues:issues
            };

            console.log(subject);
        }
        catch(err){
            return toast.error(err?.message);
        }
    };

    const handleChangeStatus = (index) => {
        const issueTemp = issues;
        issueTemp[index].status =  issueTemp[index]?.status === 'active' ? 'inactive' : 'active';
        setIssues([...issueTemp]);
    } 


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
                            <input ref={nameRef} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                        </div>
                        <label for="inputEmail3" className="col-sm-1 col-form-label">Code*:</label>
                        <div className="col-sm-3">
                            <input ref={codeRef} type="text" className="form-control" id="inputEmail3" placeholder="Code" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="description" className="col-sm-2 col-form-label">Description:</label>
                        <div className="col-sm-10">
                            <textarea ref={descriptionRef} type="text" className="form-control" id="description" placeholder="Description" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="Syllabus" className="col-sm-2 col-form-label">Syllabus:</label>
                        <div className="col-sm-10">
                            <textarea ref={syllabusRef} type="text" className="form-control" id="Syllabus" placeholder="Syllabus" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="Gitlab" className="col-sm-2 col-form-label">Gitlab Config:</label>
                        <div className="col-sm-10">
                            <textarea ref={gitlabConfigRef} type="text" className="form-control" id="Gitlab" placeholder="Gitlab Config" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label for="inputState" className="col-sm-2 col-form-label">Manager:</label>
                        <div className="col-sm-10">
                            <select ref={managerRef} id="inputState" className="form-control">
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
                                                                    <th style={{ width: "5%" }} scope="col">Label</th>
                                                                    <th style={{ width: "12%" }} scope="col">Title</th>
                                                                    <th scope="col">Description</th>
                                                                    <th scope="col">Status</th>
                                                                    <th scope="col">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {issues?.map((item,index) => (
                                                                    <tr>
                                                                        <th>{item?.label}</th>
                                                                        <td>{item?.title}</td>
                                                                        <td>
                                                                            {item?.description}
                                                                        </td>
                                                                        <td>{item?.status}</td>
                                                                        <td style={{ width: '30%' }}>
                                                                            <div className='d-flex'>
                                                                                <button onClick={() => {
                                                                                    handleRemoveIssues(index);
                                                                                }} style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-danger'>Delete</button>
                                                                                <button style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-primary'>Update</button>
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
                    </div>
                    <fieldset className="form-group">
                        <div style={{ margin: "20px 0" }} className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Status</legend>
                            <div className="col-sm-10 d-flex">
                                <div className="form-check">
                                    <input ref={statusRef} className="form-check-input" type="radio" name="subject" id="activeSubject" value="active" defaultChecked />
                                    <label className="form-check-label" for="activeSubject">
                                        Active
                                    </label>
                                </div>
                                <div style={{ marginLeft: "20px" }} className="form-check">
                                    <input className="form-check-input" type="radio" name="subject" id="inactiveSubject" value="inactive" />
                                    <label className="form-check-label" for="inactiveSubject">
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
            {createIssue && <CreateNewIssue setCreate={setCreateIssue} setIssues={setIssues} />}
        </div>
    )
}

export default CreateNewSubject