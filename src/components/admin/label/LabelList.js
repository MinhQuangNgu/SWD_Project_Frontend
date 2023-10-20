import React, { useEffect, useState } from 'react'
import CreateNewLabel from './CreateNewLabel';
import UpdateLabel from './UpdateLabel';
import axios from 'axios';
import { toast } from 'react-toastify';
import LabelController from '../../../controller/LabelController';

const LabelList = () => {
    const [createLabel, setCreateLabel] = useState(false);
    const [updateLabel, setUpdateLabel] = useState(false);
    const [reload, setReload] = useState(true);
    const [labels, setLabels] = useState([]);
    useEffect(() => {
        LabelController.handleGetAllLabels()
            .then(res => {
                setLabels(res.data?.issuesSettings);
            })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);

    const handleDeleteLabel = (id) => {
        const checked = window.confirm("Do you want to delete this label?");
        if (checked) {
            handleDeleteLabelR(id);
        }
    }
    const handleDeleteLabelR = async (id) => {
        try {
            const data = await LabelController.handleDeleteLabel(id);
            toast.success(data.data.message);
            setReload(pre => !pre);
        }
        catch (err) {
            toast.error(err?.message);
        }
    }
    return (
        <div style={{ marginTop: "0px" }} className='ftco-section'>
            {/* <div style={{ marginTop: "20px", marginLeft: "5px" }}>
                <button onClick={() => {
                    setCreateLabel(true);
                }} style={{ fontSize: "12px" }} className='btn btn-primary'>Create New Label</button>
            </div> */}
            <div style={{margin:"0 20px",marginBottom:"20px"}}>
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
                                                        <th style={{ width: "4%" }} scope="col">ID</th>
                                                        <th style={{ width: "10%" }} scope="col">Name</th>
                                                        <th scope="col">Description</th>
                                                        <th style={{ width: "15%" }} scope="col">Color</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {labels?.map(item => (
                                                        <tr>
                                                            <th scope="row" style={{ color: "#666666" }}>{item?.id}</th>
                                                            <td>{item.name}</td>
                                                            <td>
                                                                <p>{item.description}</p>
                                                            </td>
                                                            <td>
                                                                <input type='color' defaultValue={item?.color} disabled />
                                                            </td>
                                                            <td style={{ width: '20%' }}>
                                                                <div className='d-flex'>
                                                                    <button onClick={() => { handleDeleteLabel(item?.id) }} style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-danger'>Delete</button>
                                                                    <button onClick={() => {
                                                                        setUpdateLabel(item);
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
                </section>
            </div>
            {(createLabel || updateLabel) && 
            <div className='subject_label_m'>
                {createLabel && <CreateNewLabel setCreateLabel={setCreateLabel} setReload={setReload} />}
                {updateLabel && <UpdateLabel setUpdateLabel={setUpdateLabel} setReload={setReload} updateLabel={updateLabel} />}
            </div>}
        </div>
    )
}

export default LabelList