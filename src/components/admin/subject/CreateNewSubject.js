import React, { useRef, useState } from 'react'
import CreateNewIssue from './CreateNewIssue';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import UpdateIssue from './UpdateIssue';
import StatusController from '../../../controller/common/StatusController';
import SubjectController from '../../../controller/admin/SubjectController';

const CreateNewSubject = ({setReloadSubject}) => {

    const [createIssue, setCreateIssue] = useState(false);
    const [updateIssue,setUpdateIssue] = useState(false);

    const nameRef = useRef();
    const codeRef = useRef();
    const descriptionRef = useRef();
    const syllabusRef = useRef();
    const gitlabConfigRef = useRef();
    const managerRef = useRef();
    const [issues, setIssues] = useState([]);

    const handleRemoveIssues = (index) => {
        const issueTemp = issues;
        issueTemp.splice(index, 1);
        setIssues([...issueTemp]);
    }

    const [status, setStatus] = useState([]);
    const [issuesStatus, setStatusIssue] = useState(null)

    useEffect(() => {
        StatusController.getAllStatus()
            .then(res => {
                setStatus(res.data?.status);
            }).catch(err => {
                toast.error(err?.message);
            })
    }, []);

    const handleCreateNewSubject = async () => {
        try {
            const subject = {
                name: nameRef.current.value,
                code: codeRef.current.value,
                description: descriptionRef.current.value,
                syllabus: syllabusRef.current.value,
                gitlab_config: gitlabConfigRef.current.value,
                manager_id: managerRef.current.value || null,
                status: issuesStatus || status[status.length - 1],
                issues: issues
            };

            let error = false;

            if (!subject.name) {
                toast.error('Name is required');
                error = true;
            }
            
            if (!subject.code) {
                toast.error('Code is required');
                error = true;
            }

            if(error){
                return;
            }
            const data = await SubjectController.handleCreateNewSubject(subject);
            toast.success(data.data.message);
            nameRef.current.value = '';
            codeRef.current.value = '';
            descriptionRef.current.value = '';
            syllabusRef.current.value = '';
            gitlabConfigRef.current.value = '';
            setIssues([]);
            managerRef.current.value = null;
            setReloadSubject(pre => !pre);
        }
        catch (err) {
            return toast.error(err?.message);
        }
    };

    const handleChangeStatus = (index) => {
        const issueTemp = issues;
        const newStatusString = issueTemp[index]?.status?.name === 'Active' ? 'Inactive' : 'Active';
        const newStatus = status.filter(item => item.name == newStatusString);
        issueTemp[index].status = newStatus[0];
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
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                        <div className="col-sm-6">
                            <input ref={nameRef} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                        </div>
                        <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">Code*:</label>
                        <div className="col-sm-3">
                            <input ref={codeRef} type="text" className="form-control" id="inputEmail3" placeholder="Code" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                        <div className="col-sm-10">
                            <textarea ref={descriptionRef} type="text" className="form-control" id="description" placeholder="Description" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="Syllabus" className="col-sm-2 col-form-label">Syllabus:</label>
                        <div className="col-sm-10">
                            <textarea ref={syllabusRef} type="text" className="form-control" id="Syllabus" placeholder="Syllabus" />
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
                            <select ref={managerRef} id="inputState" className="form-control">
                                <option value="" defaultChecked>Null</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
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
                                {status?.map((item, index) => <div key={index + "issues"} style={{ marginRight: "10px" }} className="form-check">
                                    <input onClick={(e) => {
                                        if (e.target.checked) {
                                            setStatusIssue(item);
                                        }
                                    }} className="form-check-input" type="radio" name="subjectStatus" id={item?.id + "newSubject"} value={item?.id} defaultChecked />
                                    <label className="form-check-label" htmlFor={item?.id + "newSubject"}>
                                        {item?.name}
                                    </label>
                                </div>)}
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
            {updateIssue && <UpdateIssue setUpdate={setUpdateIssue} setIssues={setIssues} updateIssue={updateIssue} issues={issues}/>}
        </div>
    )
}

export default CreateNewSubject