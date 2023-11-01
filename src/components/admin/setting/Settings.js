import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import SettingController from '../../../service/SettingService';
import UpdateSetting from './UpdateSetting';
import CreateNewSetting from './CreateNewSetting';

const Settings = () => {
    const [type, setType] = useState('list');

    const [settings, setSettings] = useState([]);

    const [updateSetting, setUpdateSetting] = useState(null);

    const [reload, setReload] = useState(false);

    const [idorder, setIdOrder] = useState('desc');
    const [roleOrder, setRoleOrder] = useState('desc');
    const [typeOrder, setTypeOrder] = useState('desc');
    const [display_orderOrder, setManagerOrder] = useState('desc');
    const [status, setStatus] = useState('all');

    useEffect(() => {
        const data = SettingController.getSettingList();
        data.then(res => {
            setSettings(res.data?.settings);
        })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);

    const handleDeleteSetting = (id) => {
        const checked = window.confirm('Are you sure you want to delete this setting');
        if (checked) {
            SettingController.handleDeleteSetting(id).then(res => {
                toast.success(res?.data?.message);
                setReload(pre => !pre);
            }).catch(err => {
                toast.error(err?.message);
            })
        }
    }
    const handleSetStatus = (id) => {
        SettingController.handleSetStatus(id)
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
                }} className={`${type === 'list' ? 'active' : ''}`}>View setting List</button>
                <button onClick={() => {
                    setType('create');
                }} className={`${type === 'create' ? 'active' : ''}`}>Create New Setting</button>
                <button onClick={() => {
                    setType('label');
                }} style={updateSetting ? {
                    display: "flex"
                } : {
                    display: "none"
                }} className={`${type === 'update' ? 'active' : ''}`}>Update Setting ID = {updateSetting?.id}</button>
                <button onClick={() => {
                    setUpdateSetting(null);
                    setType('list');
                }} style={updateSetting ? {
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
                                            Role
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
                                        <th style={{ width: "18%" }}>
                                            <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                                Type
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
                                            </div>
                                        </th>
                                        <th>
                                            <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                                                Display Order
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
                                            </div>
                                        </th>
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
                                        <th style={{ width: "25%" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {settings?.map(item =>
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
                                                    setUpdateSetting(item);
                                                }} style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-primary">
                                                    Update
                                                </button>
                                                <button onClick={() => {
                                                    handleDeleteSetting(item?.id);
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
            {type === 'create' && <CreateNewSetting setReloadSetting={setReload} />}
            {type === 'update' && <UpdateSetting updateSetting={updateSetting} setReloadSetting={setReload} />}
        </div>
    )
}

export default Settings