import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import LabelController from '../../../service/LabelService';

const UpdateLabel = ({ setUpdateLabel,setReload,updateLabel }) => {
    const namRef = useRef();
    const descriptionRef = useRef();
    const colorRef = useRef();

    const [error,setError] = useState({});

    useEffect(() => {
        if(updateLabel){
            namRef.current.value = updateLabel?.name;
            descriptionRef.current.value = updateLabel?.description;
            colorRef.current.value = updateLabel?.color;
        }
    },[updateLabel]);

    const handleUpdateLabel = async () => {
        try{
            if(!namRef.current.value){
                return setError({
                    name:"Name is required!"
                })
            }
            const data = await LabelController.handleUpdateLabel(updateLabel?.id,{
                name:namRef.current.value,
                description: descriptionRef.current.value,
                color:colorRef.current.value
            });
            toast.success(data?.data.message);
            setReload(pre => !pre);
        }
        catch(err){
            toast.error(err?.message);
        }
    }
  return (
    <div className='create-new-label'>
            <div className='create-label'>
                <div className='add_issues_header'>
                    Create new label
                </div>
                <div onClick={() => {
                    setUpdateLabel(false);
                }} className='add_issues_close'>
                    &times;
                </div>
                <div style={{ margin: "20px 0" }} className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                    <div className="col-sm-10">
                        <input ref={namRef} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                        {error?.name && <span style={{ color: "red" }}><i>* Name is required</i></span>}
                    </div>
                </div>
                <div style={{ margin: "20px 0" }} className="form-group row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description:</label>
                    <div className="col-sm-10">
                        <textarea ref={descriptionRef} style={{ maxHeight: "50vh" }} type="text" className="form-control" id="description" placeholder="Description" />
                    </div>
                </div>
                <div style={{ margin: "20px 0" }} className="form-group row">
                    <label htmlFor="color" className="col-sm-2 col-form-label">Color:</label>
                    <div className="col-sm-4">
                        <input ref={colorRef} style={{ height: "40px" }} type="color" className="form-control" id="color" placeholder="Color" />
                    </div>
                </div>
                <div style={{ marginTop: '10px' }} className='d-flex justify-content-center'>
                    <button onClick={handleUpdateLabel} style={{ fontSize: "14px" }} className='btn btn-primary'>Update label</button>
                    <button onClick={() => {
                        setUpdateLabel(false);
                    }} style={{ fontSize: "14px", marginLeft: "10px" }} className='btn btn-secondary'>Close</button>
                </div>
            </div>
        </div>
  )
}

export default UpdateLabel