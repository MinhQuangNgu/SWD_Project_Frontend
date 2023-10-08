import React, { useEffect, useState } from 'react'
import CreateNewLabel from './CreateNewLabel';
import axios from 'axios';
import { toast } from 'react-toastify';

const Label = ({ setLabel ,setReloadIssue}) => {

    const [createLabel, setCreateLabel] = useState(false);
    const [reload,setReload] = useState(true);
    const [labels, setLabels] = useState([]);
    useEffect(() => {
        axios.get('/subject/label')
            .then(res => {
                setLabels(res.data?.results);
            })
            .catch(err => {
                toast.error(err?.message);
            })
    }, [reload]);

    useEffect(() => {
        setReloadIssue(pre => !pre);
    },[reload]);

    const handleDeleteLabel = (id) => {
        const checked = window.confirm("Do you want to delete this label?");
        if(checked){
            handleDeleteLabelR(id);
        }
    }
    const handleDeleteLabelR = async (id) => {
        try {
            const data = await axios.delete(`/subject/label/${id}`);
            toast.success(data.data.message);
            setReload(pre => !pre);
        }
        catch (err) {
            toast.error(err?.message);
        }
    }

    return (
        <div className='subject_label_m'>
            <div className='label_management'>
                <div className='add_issues_header'>
                    Label management
                </div>
                <div onClick={() => {
                    setLabel(false);
                }} className='add_issues_close'>
                    &times;
                </div>
                <div style={{ marginTop: "15px" }}>
                    <button onClick={() => {
                        setCreateLabel(true);
                    }} style={{ fontSize: "12px" }} className='btn btn-primary'>Create New Label</button>
                </div>
                <div className='label_table'>
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
                                                            <th style={{width:"15%"}} scope="col">Color</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {labels?.map(item => (
                                                            <tr>
                                                                <th scope="row" style={{ color: "#666666" }}>{item.id}</th>
                                                                <td>{item.name}</td>
                                                                <td>
                                                                    <p>{item.description} asdsadasdujnsa dljndsalsn alasjldnaslndsalkasdsaasdasd</p>
                                                                </td>
                                                                <td>
                                                                    <input type='color' defaultValue={item?.color} disabled />
                                                                </td>
                                                                <td style={{ width: '20%' }}>
                                                                    <div className='d-flex'>
                                                                        <button onClick={() => {handleDeleteLabel(item.id)}} style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-danger'>Delete</button>
                                                                        <button style={{ fontSize: "10px", margin: '0 2px' }} className='btn btn-primary'>Update</button>
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
            {createLabel && <CreateNewLabel setCreateLabel={setCreateLabel} setReload={setReload}/>}
        </div>
    )
}

export default Label