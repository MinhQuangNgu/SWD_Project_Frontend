import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import SettingController from '../../../service/SettingService';
import UserController from '../../../service/UserService';
import Select from 'react-select';
const UpdateSetting = ({ updateSetting, setReloadSetting }) => {
    const [createIssueSettings, setCreateIssueSettings] = useState(false);
    const [updateIssueSettings, setUpdateIssueSettings] = useState(false);
    const [issueExpand, setIssuesExpand] = useState(false);

    const [setting, setSetting] = useState({});

    const nameRef = useRef();
    const roleRef = useRef();
    const typeRef = useRef();
    const displayOrderRef = useRef();
    const managerRef = useRef();
    const [labels, setlabels] = useState([]);

    const [error, setError] = useState({})

    const [managers, setManagers] = useState([]);
    const [managerid, setManagerId] = useState({});
    const [issuesStatus, setStatusIssue] = useState(1)


    useEffect(() => {
        if (updateSetting) {
            SettingController.handleGetSetting(updateSetting?.id)
                .then(res => {
                    const setting = res.data?.setting[0];
                    nameRef.current.value = setting.name;
                    roleRef.current.value = setting.role;
                    typeRef.current.value = setting.type;
                    displayOrderRef.current.value = setting.display_order;
                    setlabels(res.data?.issueSettings);
                    setSetting(setting);
                })
                .catch(err => {
                    toast.error(err?.message);
                })

        }
    }, [updateSetting]);
    useEffect(() => {
        if (setting?.code) {
            UserController.getAllManager()
                .then(res => {
                    const data = res.data?.managers?.map(item => {
                        return {
                            value: item?.id,
                            label: item?.email
                        }
                    })
                    setManagers(data);
                    const managerDefault = data.find(item => item.value == setting?.manager_id);
                    setManagerId(managerDefault);
                    managerRef.current = data[0];
                })
        }
    }, [setting]);

    const handleUpdateSetting = async () => {
        try {
            const tempSetting = {
                name: nameRef.current.value,
                role: roleRef.current.value,
                type: typeRef.current.value,
                display_order: displayOrderRef.current.value,
                status: issuesStatus,
                domain: ''
            };

            let error = false;
            let err = {};

            if (!tempSetting.name) {
                err = {
                    ...err,
                    name: "Name is required"
                }
                error = true;
            }

            if (!tempSetting.role) {
                err = {
                    ...err,
                    code: "Code is required"
                }
                error = true;
            }

            if (error) {
                setError(err);
                return;
            }
            const data = await SettingController.handleUpdateSetting(setting?.id, tempSetting);
            toast.success(data.data.message);
            setReloadSetting(pre => !pre);
        }
        catch (err) {
            return toast.error(err?.message);
        }
    };


    const namRef = useRef();
    const descriptionissueSettingsRef = useRef();
    const colorRef = useRef();

    const updateIssueSettingsNameRef = useRef();
    const updateIssueSettingsDescriptionRef = useRef();
    const updateIssueSettingsColorRef = useRef();

    const handleDeleteLabel = (index) => {
        let temLabels = [...labels];
        temLabels.splice(index, 1);
        setlabels([...temLabels]);
    }

    const setUpdateLabel = (item, index) => {
        setUpdateIssueSettings({
            item,
            index
        });
    }
    useEffect(() => {
        if (updateIssueSettings) {
            updateIssueSettingsNameRef.current.value = updateIssueSettings?.item?.name;
            updateIssueSettingsDescriptionRef.current.value = updateIssueSettings?.item?.description;
            updateIssueSettingsColorRef.current.value = updateIssueSettings?.item?.color;
        }
    }, [updateIssueSettings]);

    const [issueSettingError, setIssueSettingError] = useState(false);

    const handleCreateNewLabel = async () => {
        try {
            let error = false;
            if (!namRef.current.value) {
                error = true;
            }
            setIssueSettingError(error);
            if (error) {
                return;
            }
            const temLabels = [...labels, {
                name: namRef.current.value,
                description: descriptionissueSettingsRef.current.value,
                color: colorRef.current.value
            }];
            setlabels(temLabels);
            toast.success("Create issue Setting successfully!");
            namRef.current.value = '';
            descriptionissueSettingsRef.current.value = '';
            colorRef.current.value = '';
        }
        catch (err) {
            toast.error(err.message);
        }
    }

    const [updateIssueSettingsError, setupdateIssueSettingsError] = useState(false);

    const handleUpdateLabel = async () => {
        try {
            let error = false;
            if (!updateIssueSettingsNameRef.current.value) {
                error = true;
            }
            setupdateIssueSettingsError(error);
            if (error) {
                return;
            }
            const temLabels = [...labels];
            temLabels[updateIssueSettings?.index] = {
                name:updateIssueSettingsNameRef.current.value,
                description:updateIssueSettingsDescriptionRef.current.value,
                color:updateIssueSettingsColorRef.current.value
            }
            setlabels(temLabels);
            toast.success("Update issue Setting successfully!");
        }
        catch (err) {
            toast.error(err.message);
        }
    }


    return (
        <div style={{ marginBottom: '50px' }} className='subject_create'>
            <div className='d-flex justify-content-center subject_c_title'>
                <h1><i>Update setting</i></h1>
            </div>
            <div>
                <div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                        <div className="col-sm-6">
                            <input ref={nameRef} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                            {error?.name && <span style={{ color: "red" }}><i>* Name is required</i></span>}
                        </div>
                        <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">Role*:</label>
                        <div className="col-sm-3">
                            <input ref={roleRef} type="text" className="form-control" id="inputEmail3" placeholder="Code" />
                            {error?.code && <span style={{ color: "red" }}><i>* Role is required</i></span>}
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Type:</label>
                        <div className="col-sm-10">
                            <textarea ref={typeRef} type="text" className="form-control" id="description" placeholder="Description" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="Gitlab" className="col-sm-2 col-form-label">Gitlab Config:</label>
                        <div className="col-sm-10">
                            <textarea ref={displayOrderRef} type="text" className="form-control" id="Gitlab" placeholder="Gitlab Config" />
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="inputState" className="col-sm-2 col-form-label">Manager:</label>
                        <div className="col-sm-10">
                            {managerid?.value && <Select
                                className="basic-single"
                                classNamePrefix="select"
                                defaultValue={managerid}
                                name="color"
                                options={managers}
                                onChange={(e) => setManagerId(e)}
                            />}
                        </div>
                    </div>
                    <div style={{ margin: "20px 0" }} className="form-group row">
                        <label htmlFor="inputState" className="col-sm-2 col-form-label">Issues Setting:</label>
                        <div className="col-sm-10 d-flex flex-wrap">
                            <button onClick={() => {
                                setCreateIssueSettings(true);
                            }} style={{ height: "35px", marginRight: "5px", fontSize: "11px" }} className='btn btn-primary'>Add new</button>
                            <button onClick={() => {
                                setIssuesExpand(pre => !pre);
                            }} style={{ height: "35px", marginRight: "5px", fontSize: "11px" }} className='btn btn-primary'>{issueExpand ? "Hide" : "Expands"}</button>
                            {issueExpand && <section className="intro w-100">
                                <div className="gradient-custom-1">
                                    <div className="mask d-flex align-items-center h-100">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-12">
                                                    <div className="table-responsive bg-white">
                                                        <table className="table mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th style={{ width: "4%" }} scope="col">STT</th>
                                                                    <th style={{ width: "10%" }} scope="col">Name</th>
                                                                    <th scope="col">Description</th>
                                                                    <th style={{ width: "15%" }} scope="col">Color</th>
                                                                    <th scope="col">Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {labels?.map((item, index) => (
                                                                    <tr key={index + "a"}>
                                                                        <th scope="row" style={{ color: "#666666" }}>{index + 1}</th>
                                                                        <td>{item?.name}</td>
                                                                        <td>
                                                                            <p>{item?.description}</p>
                                                                        </td>
                                                                        <td>
                                                                            <input type='color' defaultValue={item?.color} disabled />
                                                                        </td>
                                                                        <td style={{ width: '20%' }}>
                                                                            <div className='d-flex'>
                                                                                <button onClick={() => { handleDeleteLabel(index) }} style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-danger'>Delete</button>
                                                                                <button onClick={() => {
                                                                                    setUpdateLabel(item, index);
                                                                                }} style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-primary'>Update</button>
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
                            </section>}
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div style={{ margin: "20px 0" }} className="row">
                            <legend className="col-form-label col-sm-2 pt-0">Status</legend>
                            <div className="col-sm-10 d-flex">
                                <div style={{ marginRight: "10px" }} className="form-check">
                                    <input onClick={(e) => {
                                        if (e.target.checked) {
                                            setStatusIssue(true);
                                        }
                                    }} className="form-check-input" type="radio" name="gridRadios" id="activeupdatesubject" value={true} defaultChecked />
                                    <label className="form-check-label" htmlFor="activeupdatesubject">
                                        Active
                                    </label>
                                </div>
                                <div style={{ marginRight: "10px" }} className="form-check">
                                    <input onClick={(e) => {
                                        if (e.target.checked) {
                                            setStatusIssue(false);
                                        }
                                    }} className="form-check-input" type="radio" name="gridRadios" id="inactiveupdatesubject" value={false} />
                                    <label className="form-check-label" htmlFor="inactiveupdatesubject">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <button onClick={handleUpdateSetting} type="submit" className="btn btn-primary">Update setting</button>
                        </div>
                    </div>
                </div>
            </div>
            {createIssueSettings &&
                <div className='label_container'>
                    <div className='create-new-label'>
                        <div className='create-label'>
                            <div className='add_issues_header'>
                                Create new label
                            </div>
                            <div onClick={() => {
                                setCreateIssueSettings(false);
                            }} className='add_issues_close'>
                                &times;
                            </div>
                            <div style={{ margin: "20px 0" }} className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                                <div className="col-sm-10">
                                    <input ref={namRef} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                                    {issueSettingError && <span style={{ color: "red" }}><i>* Name is required</i></span>}
                                </div>
                            </div>
                            <div style={{ margin: "20px 0" }} className="form-group row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                                <div className="col-sm-10">
                                    <textarea ref={descriptionissueSettingsRef} style={{ maxHeight: "50vh" }} type="text" className="form-control" id="description" placeholder="Description" />
                                </div>
                            </div>
                            <div style={{ margin: "20px 0" }} className="form-group row">
                                <label htmlFor="color" className="col-sm-2 col-form-label">Color:</label>
                                <div className="col-sm-4">
                                    <input ref={colorRef} style={{ height: "40px" }} type="color" className="form-control" id="color" placeholder="Color" />
                                </div>
                            </div>
                            <div style={{ marginTop: '10px' }} className='d-flex justify-content-center'>
                                <button onClick={handleCreateNewLabel} style={{ fontSize: "14px" }} className='btn btn-primary'>Create New label</button>
                                <button onClick={() => {
                                    setCreateIssueSettings(false);
                                }} style={{ fontSize: "14px", marginLeft: "10px" }} className='btn btn-secondary'>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {updateIssueSettings &&
                <div className='label_container'>
                    <div className='create-new-label'>
                        <div className='create-label'>
                            <div className='add_issues_header'>
                                Update label
                            </div>
                            <div onClick={() => {
                                setUpdateIssueSettings(false);
                            }} className='add_issues_close'>
                                &times;
                            </div>
                            <div style={{ margin: "20px 0" }} className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                                <div className="col-sm-10">
                                    <input ref={updateIssueSettingsNameRef} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                                    {updateIssueSettingsError && <span style={{ color: "red" }}><i>* Name is required</i></span>}
                                </div>
                            </div>
                            <div style={{ margin: "20px 0" }} className="form-group row">
                                <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                                <div className="col-sm-10">
                                    <textarea ref={updateIssueSettingsDescriptionRef} style={{ maxHeight: "50vh" }} type="text" className="form-control" id="description" placeholder="Description" />
                                </div>
                            </div>
                            <div style={{ margin: "20px 0" }} className="form-group row">
                                <label htmlFor="color" className="col-sm-2 col-form-label">Color:</label>
                                <div className="col-sm-4">
                                    <input ref={updateIssueSettingsColorRef} style={{ height: "40px" }} type="color" className="form-control" id="color" placeholder="Color" />
                                </div>
                            </div>
                            <div style={{ marginTop: '10px' }} className='d-flex justify-content-center'>
                                <button onClick={handleUpdateLabel} style={{ fontSize: "14px" }} className='btn btn-primary'>Update label</button>
                                <button onClick={() => {
                                    setUpdateIssueSettings(false);
                                }} style={{ fontSize: "14px", marginLeft: "10px" }} className='btn btn-secondary'>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default UpdateSetting