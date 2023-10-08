import React from 'react'

const CreateNewLabel = ({ setCreateLabel }) => {
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
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Name*:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" placeholder="Name" />
                    </div>
                </div>
                <div style={{ margin: "20px 0" }} className="form-group row">
                    <label for="description" className="col-sm-2 col-form-label">Description:</label>
                    <div className="col-sm-10">
                        <textarea style={{ maxHeight: "50vh" }} type="text" className="form-control" id="description" placeholder="Description" />
                    </div>
                </div>
                <div style={{ margin: "20px 0" }} className="form-group row">
                    <label for="color" className="col-sm-2 col-form-label">Color:</label>
                    <div className="col-sm-4">
                        <input style={{ height: "40px" }} type="color" className="form-control" id="color" placeholder="Color" />
                    </div>
                </div>
                <div style={{ marginTop: '10px' }} className='d-flex justify-content-center'>
                    <button style={{ fontSize: "14px" }} className='btn btn-primary'>Create New label</button>
                    <button onClick={() => {
                        setCreateLabel(false);
                    }} style={{ fontSize: "14px", marginLeft: "10px" }} className='btn btn-secondary'>Close</button>
                </div>
            </div>
        </div>
    )
}

export default CreateNewLabel