import React, { useRef } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import LabelController from '../../../controller/LabelController';

const CreateNewLabel = ({ setCreateLabel,setReload }) => {

    const namRef = useRef();
    const descriptionRef = useRef();
    const colorRef = useRef();

    const handleCreateNewLabel = async () => {
        try{
            if(!namRef.current.value){
                return toast.error("Name can not be blank");
            }
            const data = await LabelController.handleCreateNewLabel({
                name:namRef.current.value,
                description: descriptionRef.current.value,
                color:colorRef.current.value
            });
            toast.success(data.data.messege);
            namRef.current.value = '';
            descriptionRef.current.value = '';
            colorRef.current.value = '';
            setReload(pre => !pre);
        }
        catch(err){
            toast.error(err.message);
        }
    }
    return (
        <div className='create-new-label'>
            <div className='create-label'>
                <div className='add_issues_header'>
                    Create new label
                </div>
                <div onClick={() => {
                    setCreateLabel(false);
                }} className='add_issues_close'>
                    &times;
                </div>
                <div style={{ margin: "20px 0" }} className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                    <div className="col-sm-10">
                        <input ref={namRef} type="text" className="form-control" id="inputEmail3" placeholder="Name" />
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
                    <button onClick={handleCreateNewLabel} style={{ fontSize: "14px" }} className='btn btn-primary'>Create New label</button>
                    <button onClick={() => {
                        setCreateLabel(false);
                    }} style={{ fontSize: "14px", marginLeft: "10px" }} className='btn btn-secondary'>Close</button>
                </div>
            </div>
        </div>
    )
}

export default CreateNewLabel