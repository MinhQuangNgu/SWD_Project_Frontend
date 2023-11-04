import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ProjectService from '../../../service/ProjectService';

const UpdateProject = ({ id, setReloadProject }) => {
    const [group_name, setGroupName] = useState('');
    const [project_code, setProjectCode] = useState('');
    const [project_name, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [status_id, setStatusId] = useState(); // Default status
    const [manager_id, setManagerId] = useState();
    const [class_id, setClassId] = useState();
    const [team_leader_id, setTeamLeaderId] = useState();
    const [milestone_id, setMilestoneId] = useState();
    const [error, setError] = useState({}); // Define an error state
    const [reload, setReload] = useState(false);

    const [classList, setClassList] = useState([]);
    const [managerList, setManagerList] = useState([]);
    const [studentList, setStudentList] = useState([]);
    const [mileStoneList, setMileStoneList] = useState([]);

    const [detail, setDetail] = useState({})
    useEffect(() => {
        const data = ProjectService.getDetail(id);
        data.then(res => {
            setDetail(res.data?.project[0]);
        })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);
    useEffect(() => {
        if (detail) {
            setGroupName(detail.group_name);
            setProjectCode(detail.project_code);
            setProjectName(detail.project_name);
            setDescription(detail.description);
            setStatusId(detail.status_id);
            setManagerId(detail.manager_id);
            setClassId(detail.class_id);
            setTeamLeaderId(detail.team_leader_id);
            setMilestoneId(detail.milestone_id);
        }
    }, [detail]);
    // const [projects, setProjects] =useState([]);
    useEffect(() => {
        const data = ProjectService.getclass();
        data.then(res => {
            setClassList(res.data?.project);
        })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);
    useEffect(() => {
        if (classList.length > 0) {
            setClassId(classList[0].id);
        }
    }, [classList]);

    /**Student */
    useEffect(() => {
        const data = ProjectService.getStudent();
        data.then(res => {
            setStudentList(res.data?.project);
        })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);
    useEffect(() => {
        if (studentList.length > 0) {
            setTeamLeaderId(studentList[0].id);
        }
    }, [studentList]);

    /**manager list */
    useEffect(() => {
        const data = ProjectService.getManager();
        data.then(res => {
            setManagerList(res.data?.project);
        })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);
    useEffect(() => {
        if (managerList.length > 0) {
            setManagerId(managerList[0].id);
        }
    }, [managerList]);
    /**mileStone list */
    useEffect(() => {
        const data = ProjectService.getMileStone();
        data.then(res => {
            setMileStoneList(res.data?.project);
        })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);
    useEffect(() => {
        if (mileStoneList.length > 0) {
            setMilestoneId(mileStoneList[0].id);
        }
    }, [mileStoneList]);
    const handleUpdateProject = () => {

        try {
            // Form is valid, submit the data
            // You can also clear the error state here if needed
            const project = {
                group_name,
                project_code,
                project_name,
                description,
                manager_id,
                class_id,
                team_leader_id
            };
            let error = false;
            let err = {};
            //  console.log(detail);
            // Handle form validation and submission
            const errors = {};

            if (!group_name) {
                errors.group_name = 'Group name is required';
                error = true
            }

            if (!project_code) {
                errors.project_code = 'Project code is required';
                error = true
            }

            if (!project_name) {
                errors.project_name = 'Project name is required';
                error = true
            }

            if (!description) {
                errors.description = 'Description is required';
                error = true
            }

            if (error) {
                setError(errors);
                console.log("ngu");
                return;
            }

            console.log(project);

            ProjectService.handeleUpdateProject(id,project)
            .then(res => {
                toast.success(res?.data?.message);
                setReloadProject(pre => !pre);
            }).catch(err => {
                toast.error(err?.message);
            })
            setError()
        } catch (error) {
            console.log("error");
        }
    };

    return (
        <div style={{ marginBottom: '50px' }} className='subject_create'>
            <div className='d-flex justify-content-center subject_c_title'>
                <h1><i>Update project</i></h1>
            </div>
            <div>
                <div>
                    <div style={{ margin: '20px 0' }} className='form-group row'>
                        <label htmlFor='group_name' className='col-sm-2 col-form-label'>Group name*:</label>
                        <div className='col-sm-6'>
                            <input
                                type='text'
                                className='form-control'
                                id='group_name'
                                placeholder='Group name'
                                value={group_name}
                                onChange={(e) => setGroupName(e.target.value)}
                            />
                            {error?.group_name && <span style={{ color: 'red' }}><i>* {error.group_name}</i></span>}
                        </div>
                        <label htmlFor='project_code' className='col-sm-1 col-form-label'>Project code*:</label>
                        <div className='col-sm-3'>
                            <input
                                type='text'
                                className='form-control'
                                id='project_code'
                                placeholder='Project code'
                                value={project_code}
                                onChange={(e) => setProjectCode(e.target.value)}
                            />
                            {error?.project_code && <span style={{ color: 'red' }}><i>* {error.project_code}</i></span>}
                        </div>
                    </div>
                    <div style={{ margin: '20px 0' }} className='form-group row'>
                        <label htmlFor='project_name' className='col-sm-2 col-form-label'>Project name:</label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                id='project_name'
                                placeholder='Project name'
                                value={project_name}
                                onChange={(e) => setProjectName(e.target.value)}
                            />
                            {error?.project_name && <span style={{ color: 'red' }}><i>* {error.project_name}</i></span>}
                        </div>
                    </div>
                    <div style={{ margin: '20px 0' }} className='form-group row'>
                        <label htmlFor='description' className='col-sm-2 col-form-label'>Description:</label>
                        <div className='col-sm-10'>
                            <textarea
                                type='text'
                                className='form-control'
                                id='description'
                                placeholder='Description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {error?.description && <span style={{ color: 'red' }}><i>* {error.description}</i></span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div style={{ margin: '20px 0' }} className="form-group">
                                <label htmlFor="class_id" className="col-form-label">Class:</label>
                                {/* Replace with your Select component */}
                                <select
                                    className="form-control"
                                    id="class_id"
                                    value={class_id}
                                    onChange={(e) => setClassId(e.target.value)}
                                >
                                    {classList.map(c => (
                                        <option key={c.id} value={c.id}>{c.class_name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ margin: '20px 0' }} className="form-group">
                                <label htmlFor="team_leader_id" className="col-form-label">Team Leader:</label>
                                {/* Replace with your Select component */}
                                <select
                                    className="form-control"
                                    id="team_leader_id"
                                    value={team_leader_id}
                                    onChange={(e) => setTeamLeaderId(e.target.value)}
                                >
                                    {/* <option value="">Select Team Leader</option> */}
                                    {studentList.map(c => (
                                        <option value={c.id}>{c.username}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div style={{ margin: '20px 0' }} className="form-group">
                                <label htmlFor="manager_id" className="col-form-label">Manager:</label>
                                {/* Replace with your Select component */}
                                <select
                                    className="form-control"
                                    id="team_leader_id"
                                    value={manager_id}
                                    onChange={(e) => setManagerId(e.target.value)}
                                >
                                    {/* <option value="">Select Team Leader</option> */}
                                    {managerList.map(c => (
                                        <option value={c.id}>{c.username}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Add error handling for other fields like the example above */}
                    <div className='form-group row'>
                        <div className='col-sm-12 d-flex justify-content-center'>
                            <button onClick={handleUpdateProject} type='submit' className='btn btn-primary'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProject;
