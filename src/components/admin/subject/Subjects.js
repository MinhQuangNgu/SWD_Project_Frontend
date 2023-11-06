import React, { useEffect, useState } from 'react'
import UpdateSubject from './UpdateSubject';
import CreateNewSubject from './CreateNewSubject';
import axios from 'axios';
import { toast } from 'react-toastify';
import LabelList from '../label/LabelList';
import SubjectController from '../../../service/SubjectService';

const Subjects = () => {
    const [type, setType] = useState('list');

    const [subjects, setSubjects] = useState([]);

    const [sortK,setSortK] = useState('');

    const [updateSubject, setUpdateSubject] = useState(null);

    const [reload, setReload] = useState(false);

    useEffect(() => {
        const data = SubjectController.getSubjectList('id-asc');
        data.then(res => {
            setSubjects(res.data?.subjects);
        })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);

    const handleDeleteSubject = (id) => {
        const checked = window.confirm('Are you sure you want to delete this subject');
        if (checked) {
            SubjectController.handleDeleteSubjectR(id).then(res => {
                toast.success(res?.data?.message);
                setReload(pre => !pre);
            }).catch(err => {
                toast.error(err?.message);
            })
        }
    }
    const handleSetStatus = (id) => {
        SubjectController.handleSetStatus(id)
            .then(res => {
                toast.success(res?.data?.message);
                setReload(pre => !pre);
            }).catch(err => {
                toast.error(err?.message);
            })
    }

    const hanldeSort = async (k,v) => {
        setSortK(k + v);
        try{
            const data = await SubjectController.getSubjectList(k + "-" + v);
            setSubjects(data.data?.subjects);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div style={{ marginTop: "40px" }}>
            <div className='d-flex btn_subject_manager'>
                <button onClick={() => {
                    setType('list');
                }} className={`${type === 'list' ? 'active' : ''}`}>View subject List</button>
                <button onClick={() => {
                    setType('create');
                }} className={`${type === 'create' ? 'active' : ''}`}>Create New Subject</button>
                <button onClick={() => {
                    setType('label');
                }} className={`${type === 'label' ? 'active' : ''}`}>Label List</button>
                <button onClick={() => {
                    setType('update');
                }} style={updateSubject ? {
                    display: "flex"
                } : {
                    display: "none"
                }} className={`${type === 'update' ? 'active' : ''}`}>Update Subject ID = {updateSubject?.id}</button>
                <button onClick={() => {
                    setUpdateSubject(null);
                    setType('list');
                }} style={updateSubject ? {
                    display: "flex",
                    marginLeft: "-6px"
                } : {
                    display: "none",
                    marginLeft: "-6px"
                }}  >X</button>
            </div>
            {type === 'list' && <section style={{ marginTop: "0px" }} className="ftco-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-wrap">
                            <table className="table table-responsive-xl">
                                <thead>
                                    <tr>
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            ID
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg style={sortK === "idasc" ? {color:"red"} : {}} onClick={() => hanldeSort("id","asc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg style={sortK === "iddesc" ? {color:"red"} : {}} onClick={() => hanldeSort("id","desc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            Code
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg style={sortK === "codeasc" ? {color:"red"} : {}} onClick={() => hanldeSort("code","asc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg style={sortK === "codedesc" ? {color:"red"} : {}} onClick={() => hanldeSort("code","desc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        <th style={{ width: "18%" }}>
                                            <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                                Subject Name
                                                <div style={{ marginLeft: "10px" }}>
                                                    <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                        <svg style={sortK === "nameasc" ? {color:"red"} : {}} onClick={() => hanldeSort("name","asc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                        </svg>
                                                    </div>
                                                    <div style={{ height: '18px', cursor: "pointer" }}>
                                                        <svg style={sortK === "namedesc" ? {color:"red"} : {}} onClick={() => hanldeSort("name","desc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                                Manager
                                                <div style={{ marginLeft: "10px" }}>
                                                    <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                        <svg style={sortK === "manager_idasc" ? {color:"red"} : {}} onClick={() => hanldeSort("manager_id","asc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                        </svg>
                                                    </div>
                                                    <div style={{ height: '18px', cursor: "pointer" }}>
                                                        <svg style={sortK === "manager_iddesc" ? {color:"red"} : {}} onClick={() => hanldeSort("manager_id","desc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            Status
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg style={sortK === "statusasc" ? {color:"red"} : {}} onClick={() => hanldeSort("status","asc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg style={sortK === "statusdesc" ? {color:"red"} : {}} onClick={() => hanldeSort("status","desc")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        <th style={{ width: "25%" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subjects?.map(item =>
                                        <tr key={item?.id + "apple"} className="alert" role="alert">
                                            <td className="border-bottom-0-custom">
                                                {item?.id}
                                            </td>
                                            <td className="border-bottom-0-custom">
                                                <div className="pl-3">
                                                    <span>
                                                        {item?.code}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="border-bottom-0-custom">
                                                <div className="d-flex align-items-center">
                                                    <div className="pl-3 email">
                                                        <span>
                                                            {item?.name}
                                                        </span>
                                                        <span>Added: {item?.date_create}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-bottom-0-custom">
                                                <div className="d-flex align-items-center">
                                                    <div className="pl-3 email">
                                                        <span>
                                                            {item?.username}
                                                        </span>
                                                        <span>{item?.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="status border-bottom-0-custom"><span className={item?.status ? 'active' : 'inactive'}>{item?.status ? 'ACTIVE' : "INACTIVE"}</span></td>
                                            <td className="border-bottom-0-custom">
                                                <button onClick={() => {
                                                    setType('update');
                                                    setUpdateSubject(item);
                                                }} style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-primary">
                                                    Update
                                                </button>
                                                <button onClick={() => {
                                                    handleDeleteSubject(item?.id);
                                                }} style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-danger">
                                                    Delete
                                                </button>
                                                <button onClick={() => {
                                                    handleSetStatus(item?.id)
                                                }} style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-secondary">
                                                    Active/Deactive
                                                </button>
                                            </td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>}
            {type === 'create' && <CreateNewSubject setReloadSubject={setReload} />}
            {type === 'update' && <UpdateSubject updateSubject={updateSubject} setReloadSubject={setReload} />}
            {type === 'label' && <LabelList />}
        </div>
    )
}

export default Subjects