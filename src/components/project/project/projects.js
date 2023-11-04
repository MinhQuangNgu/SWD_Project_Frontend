import React, { useEffect, useState } from 'react'
// import UpdateSubject from './UpdateSubject';
// import CreateNewSubject from './CreateNewSubject';
import axios from 'axios';
import { toast } from 'react-toastify';
// import LabelList from '../label/LabelList';
// import SubjectController from '../../../service/SubjectService';
import ProjectService from '../../../service/ProjectService';
import CreateNewProject from './CreateNewProject';
const Projects = () => {
    const [type, setType] = useState('list');

    const [subjects, setSubjects] = useState([]);

    const [updateSubject, setUpdateSubject] = useState(null);

    const [reload, setReload] = useState(false);

    const [idorder, setIdOrder] = useState('desc');
    const [codeOrder, setCodeOrder] = useState('desc');
    const [subjectOrder, setSubjectOrder] = useState('desc');
    const [managerOrder, setManagerOrder] = useState('desc');
    const [status, setStatus] = useState('all');

    const [projects, setProjects] =useState([]);
    useEffect(() => {
        const data = ProjectService.getProjectList();
        data.then(res => {
            setProjects(res.data?.project);
        })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);
    console.log(projects);
    // useEffect(() => {
    //     const data = SubjectController.getSubjectList();
    //     data.then(res => {
    //         setSubjects(res.data?.subjects);
    //     })
    //         .catch(err => {
    //             toast.error(err?.message);
    //         })
    // }, [reload]);

    // const handleDeleteSubject = (id) => {
    //     const checked = window.confirm('Are you sure you want to delete this subject');
    //     if (checked) {
    //         SubjectController.handleDeleteSubjectR(id).then(res => {
    //             toast.success(res?.data?.message);
    //             setReload(pre => !pre);
    //         }).catch(err => {
    //             toast.error(err?.message);
    //         })
    //     }
    // }
    const handleSetStatus = (id) => {
        ProjectService.handleSetStaus(id)
            .then(res => {
                toast.success(res?.data?.message);
                setReload(pre => !pre);
            }).catch(err => {
                toast.error(err?.message);
            })
    }

    return (
        <div style={{ marginTop: "40px" }}>
            <div className='d-flex btn_subject_manager'>
                <button onClick={() => {
                    setType('list');
                }} className={`${type === 'list' ? 'active' : ''}`}>View Project List</button>
                <button onClick={() => {
                    setType('create');
                }} className={`${type === 'create' ? 'active' : ''}`}>Create New Project</button>
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
                                            Code
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            Project name
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            group name
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            Class name
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            Milestone
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            Manager
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            Leader
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        <th><div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                            Status
                                            <div style={{ marginLeft: "10px" }}>
                                                <div style={{ height: '10px', cursor: "pointer", marginBottom: "3px" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                                    </svg>
                                                </div>
                                                <div style={{ height: '18px', cursor: "pointer" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div></th>
                                        <th style={{ width: "10%" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects?.map(item =>
                                        <tr key={item?.id + "apple"} className="alert" role="alert">
                                            <td className="border-bottom-0-custom">
                                                {item?.project_code}
                                            </td>
                                            <td className="border-bottom-0-custom">
                                                <div className="pl-3">
                                                    <span>
                                                        {item?.project_name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="border-bottom-0-custom">
                                                <div className="pl-3">
                                                    <span>
                                                        {item?.group_name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="border-bottom-0-custom">
                                                <div className="pl-3">
                                                    <span>
                                                        {item?.class_name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="border-bottom-0-custom">
                                                <div className="pl-3">
                                                    <span>
                                                        {item?.project_name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="border-bottom-0-custom">
                                                <div className="pl-3">
                                                    <span>
                                                        {item?.team_leader_username}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="border-bottom-0-custom">
                                                <div className="pl-3">
                                                    <span>
                                                        {item?.manager_username}
                                                    </span>
                                                </div>
                                            </td>
                                                <td className="status border-bottom-0-custom"><span className={item?.status_id ? 'active' : 'inactive'}>{item?.status ? 'ACTIVE' : "INACTIVE"}</span>
                                                <button
                                                 onClick={() => {
                                                    handleSetStatus(item?.id)}}
                                                 className='btn btn-secondary'style={{marginLeft: 20}}><i class="fa fa-rotate" 
                                                data-toggle="tooltip" data-placement="top" title="Change status"></i></button>
                                                </td>
                                            
                                            <td className="border-bottom-0-custom">
                                                <button onClick={() => {
                                                    // setType('update');
                                                    // setUpdateSubject(item);
                                                }} style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-primary">
                                                    Update
                                                </button>
                                                {/* <button onClick={() => {
                                                    handleSetStatus(item?.id)
                                                }} style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-secondary">
                                                    Active/Deactive
                                                </button> */}
                                            </td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>}
            {type === 'create' && <CreateNewProject setReloadProject={setReload}/>}
            {/* {type === 'update' && <UpdateSubject updateSubject={updateSubject} setReloadSubject={setReload} />} */}
            {/* {type === 'label' && <LabelList />} */}
        </div>
    )
}

export default Projects