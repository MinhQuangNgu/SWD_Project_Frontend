import React, { useEffect, useRef, useState } from 'react'
import Label from '../label/Label';
import axios from 'axios';
import { toast } from 'react-toastify';
import StatusController from '../../../controller/common/StatusController';
import LabelController from '../../../controller/common/LabelController';
const CreateNewIssue = ({ setCreate, setIssues }) => {
    const [label, setLabel] = useState(false);

    const [labels, setLabels] = useState([]);
    const [reloadIssue, setReloadIssue] = useState(true);

    const [status, setStatus] = useState([]);

    const nameRef = useRef();
    const descriptionRef = useRef();
    const labelRef = useRef()

    const [statusIssue,setStatusIssue] = useState(null);

    useEffect(() => {
        LabelController.handleGetAllLabels()
            .then(res => {
                setLabels(res.data?.results);
            })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reloadIssue]);

    useEffect(() => {
        StatusController.getAllStatus()
            .then(res => {
                setStatus(res.data?.status);
            }).catch(err => {
                toast.error(err?.message);
            })
    }, []);

    const handleCreateNewIssues = async () => {
        try {
            const issue = {
                title: nameRef.current.value,
                description: descriptionRef.current.value,
                label: labelRef.current.value,
                status: statusIssue || status[status.length - 1]
            }
            if (!issue.title) {
                toast.error("Title is required");
                return;
            }
            setIssues(pre => [...pre, issue]);
            setCreate(pre => !pre);
        }
        catch (err) {
            return toast.error(err?.message);
        }
    }

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
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Title*:</label>
                        <div className="col-sm-10">
                            <input ref={nameRef} type="text" className="form-control" id="inputEmail3" placeholder="Title" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                        <div className="col-sm-10">
                            <textarea ref={descriptionRef} style={{ maxHeight: "50vh" }} type="text" className="form-control" id="description" placeholder="Description" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Label:</label>
                        <div className="col-sm-10">
                            <div className='row'>
                                <div className='col-sm-8'>
                                    <select ref={labelRef} style={{ width: "100%" }} className="form-select" aria-label="Label">
                                        {labels?.map(item => (
                                            <option key={item?.id + "ads"} value={item?.id}>{item?.name}</option>
                                        ))}
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
                                {status?.map((item,index) => <div key={index + "issues"} style={{marginRight:"10px"}} className="form-check">
                                    <input onClick={(e) => {
                                        if(e.target.checked) {
                                            setStatusIssue(item);
                                        }
                                    }} className="form-check-input" type="radio" name="gridRadios" id={item?.id} value={item?.id} defaultChecked />
                                    <label className="form-check-label" htmlFor={item?.id}>
                                        {item?.name}
                                    </label>
                                </div>)}
                            </div>
                        </div>
                    </fieldset>
                    <div style={{ marginTop: '10px' }} className='d-flex justify-content-center'>
                        <button onClick={handleCreateNewIssues} style={{ fontSize: "14px" }} className='btn btn-primary'>Create New Issues</button>
                        <button onClick={() => {
                            setCreate(false);
                        }} style={{ fontSize: "14px", marginLeft: "10px" }} className='btn btn-secondary'>Close</button>
                    </div>
                </div>
            </div>
            {label && <Label setLabel={setLabel} setReloadIssue={setReloadIssue} />}
        </div>
    )
}

export default CreateNewIssue