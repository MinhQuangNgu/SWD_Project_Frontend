import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CreateNewSubject from './CreateNewSubject';
import axios from 'axios';
import { toast } from 'react-toastify';

const Subjects = () => {
    const [type, setType] = useState('list');

    const [subjects, setSubjects] = useState([]);

    const [reload,setReload] = useState(false);

    useEffect(() => {
        axios.get('/subject')
            .then(res => {
                setSubjects(res.data?.subjects);
            })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);

    const handleDeleteSubject = (id) => {
        const checked = window.confirm('Are you sure you want to delete this subject');
        if(checked) {
            handleDeleteSubjectR(id);
        }
    }

    const handleDeleteSubjectR = async (id) => {
        try{
            const data = await axios.delete(`/subject/${id}`);
            toast.success(data.data.message);
            setReload(pre => !pre);
        }
        catch(err){
            return toast.error(err?.message);
        }
    }

    return (
        <div style={{ marginTop: "40px" }}>
            <div className='d-flex btn_subject_manager'>
                <button onClick={() => {
                    setType('list');
                }} className={`${type === 'list' ? 'active' : ''}`}>VIew List</button>
                <button onClick={() => {
                    setType('create');
                }} className={`${type === 'create' ? 'active' : ''}`}>Create New Subject</button>
            </div>
            {type === 'list' && <section style={{ marginTop: "0px" }} className="ftco-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-wrap">
                            <table className="table table-responsive-xl">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Code</th>
                                        <th style={{width:"18%"}}>Subject Name</th>
                                        <th>Assignee</th>
                                        <th>Status</th>
                                        <th style={{ width: "25%" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subjects?.map(item => 
                                    <tr className="alert" role="alert">
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
                                                        Nguyen Minh Quang
                                                    </span>
                                                    <span>quangminhgnuyen@gmail.com</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="status border-bottom-0-custom"><span className="active">{item?.status_name}</span></td>
                                        <td className="border-bottom-0-custom">
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-primary">
                                                Update
                                            </button>
                                            <button onClick={() => {
                                                handleDeleteSubject(item?.id);
                                            }} style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-danger">
                                                Delete
                                            </button>
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-secondary">
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
            {type === 'create' && <CreateNewSubject />}
        </div>
    )
}

export default Subjects