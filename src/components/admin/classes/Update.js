import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReactSelect from "react-select";
import AsyncSelect from "react-select/async";

import { toast } from "react-toastify";
import ClassesService from "../../../service/ClassesService";



export default function UpdateClass({item,reload}) {
  const nameRef = useRef();
  const codeRef = useRef();
  const descriptionRef = useRef();
  const [status, setStatus] = useState(true);
  const [student, setStudent] = useState([]);
  const [manager, setManager] = useState([]);
  const [managerID, setManagerID] = useState("");
  const [listStudentId, setlistStudentId] = useState([]);
  const [milestone, setMileStone] = useState("");
  const [optionMiletone,setOptionMiletone]=useState([])
  const [error, setError] = useState({});
  const getListStudent = async () => {
    const res = await axios.get("/user/student");
    setStudent(res?.data?.student);
  };
  const getListManager = async () => {
    const res = await axios.get("/user/manager_dp");
    setManager(res?.data?.managers);
  };
  const promiseOptions = async (inputValue, callback) => {
    axios.get(`/milestone/list`).then((response) => {
      const options = [];
      response?.data?.milestone?.forEach((item) => {
        const start = new Date(item?.start_date);
        let yyyy_s = start.getFullYear();
        let mm_s = start.getMonth() + 1; // Months start at 0!
        let dd_s = start.getDate();
        const end = new Date(item?.end_date);
        let yyyy_e = end.getFullYear();
        let mm_e = end.getMonth() + 1; // Months start at 0!
        let dd_e = end.getDate();
        options.push({
          label: `${item?.name}(${dd_s + "/" + mm_s + "/" + yyyy_s}- ${
            dd_e + "/" + mm_e + "/" + yyyy_e
          })`,
          value: item?.id,
        });
      });
      setOptionMiletone(options)
      callback(options);
    
    });
  };
  const getDetail= async()=>{
    const res = await ClassesService.getDetailClass(item.id);
    const data=res?.data;
    nameRef.current.value=data?.general?.class_name;
    codeRef.current.value=data?.general?.class_code
    descriptionRef.current.value = data?.general?.description;
    setMileStone(optionMiletone.find(item=>item.value===data?.milestone?.id))
    setlistStudentId(data?.student?.map(item=>item.id))
    setManagerID(item?.manager_id)
    setStatus(item?.status===1?true:false)
  }
  console.log(listStudentId)
  useEffect(() => {
    getListStudent();
    getListManager();
  }, []);
  useEffect(()=>{
    getDetail()
  },[optionMiletone,item])




  const handleUpdateClass = async () => {
    try {
      let error = false;
      let err = {};
      console.log(managerID)
      if (milestone==='')
      {
        err = {
          ...err,
          milestone: "Milestone is required",
        };
        error = true;
      }
      if (managerID==='')
      {
        err = {
          ...err,
          manager: "Manager is required",
        };
        error = true;
      }
      const subject = {
        class_name: nameRef.current.value,
        class_code: codeRef.current.value,
        description: descriptionRef.current.value,
        student: listStudentId,
        milestone_id: +(milestone.value),
        manager:managerID,
        status,
      };

      
   
     
      if (!subject.class_name) {
        err = {
          ...err,
          class_name: "Name is required",
        };
        error = true;
      }

      if (!subject.class_code) {
        err = {
          ...err,
          class_code: "Code is required",
        };
        error = true;
      }

      if (error) {
        setError(err);
        return;
      }
      const data = await ClassesService.updateClass(item?.id,subject);
      if (data.isSuccess){
        reload();
        toast.success(data.data.message);
      }
      else{
        return toast.error(data?.data?.message);
      }
     
    } catch (err) {
      return toast.error(err?.message);
    }
  };
 

  return (
    <div style={{ marginBottom: "50px" }} className="subject_create">
      <div className="d-flex justify-content-center subject_c_title">
        <h1>
          <i>Update classes</i>
        </h1>
      </div>
      <div>
        <div>
          <div style={{ margin: "20px 0" }} className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Class name*:
            </label>
            <div className="col-sm-6">
              <input
                ref={nameRef}
                type="text"
                className="form-control"
                id="inputEmail3"
                placeholder="Class Name"
              />
              {error?.class_name && (
                <span style={{ color: "red" }}>
                  <i>* Class name is required</i>
                </span>
              )}
            </div>

            <label htmlFor="inputEmail3" className="col-sm-1 col-form-label">
              Class code*:
            </label>
            <div className="col-sm-3">
              <input
                ref={codeRef}
                type="text"
                className="form-control"
                id="inputEmail3"
                placeholder="Class Code"
              />
              {error?.class_code && (
                <span style={{ color: "red" }}>
                  <i>* Class code is required</i>
                </span>
              )}
            </div>
          </div>
          <div style={{ margin: "20px 0" }} className="form-group row">
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Description:
            </label>
            <div className="col-sm-10">
              <textarea
                ref={descriptionRef}
                type="text"
                className="form-control"
                id="description"
                placeholder="Description"
              />
            </div>
          </div>
          <div style={{ margin: "20px 0" }} className="form-group row">
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Milestone*:
            </label>
            <div className="col-sm-10">
              <AsyncSelect
                onChange={setMileStone}
                loadOptions={promiseOptions}
                cacheOptions
                defaultOptions
                value={milestone}
               
              />
                {error?.milestone && (
                <span style={{ color: "red" }}>
                  <i>* Milestone is required</i>
                </span>
              )}
            </div>
          </div>
          <div  style={{ margin: "20px 0", paddingLeft:12 }}>
          <label htmlFor="description" className="col-sm-2 col-form-label">
            List Student:
          </label>
          </div>
          
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {student?.map((item) => {
                    return (
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                            checked={listStudentId.includes(item.id)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setlistStudentId((el) => [...el, item.id]);
                              } else {
                                setlistStudentId(
                                  listStudentId.filter((el) => el !== item.id)
                                );
                              }
                            }}
                          />
                        </td>
                        <td>
                          <div class="custom-control custom-checkbox">
                            <label
                              class="custom-control-label"
                              for="customCheck1"
                            >
                              {item?.id}
                            </label>
                          </div>
                        </td>
                        <td>{item?.username}</td>
                        <td>{item?.email}</td>
                        <td>{item?.phone_number}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div  style={{ margin: "20px 0", paddingLeft:12 }}>
          <label htmlFor="description" className="col-sm-2 col-form-label">
            List Manager:
          </label>
          </div>
          
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {manager?.map((item) => {
                    return (
                      <tr>
                        <td>
                          <input
                            type="radio"
                            class="custom-control-input"
                            id="customCheck1"
                            checked={managerID===item?.id}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setManagerID(item?.id)
                              } else {
                                setManagerID("")
                              }
                            }}
                          />
                        </td>
                        <td>
                          <div class="custom-control custom-checkbox">
                            <label
                              class="custom-control-label"
                              for="customCheck1"
                            >
                              {item?.id}
                            </label>
                          </div>
                        </td>
                        <td>{item?.username}</td>
                        <td>{item?.email}</td>
                        <td>{item?.phone_number}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {error?.manager && (
                <span style={{ color: "red" }}>
                  <i>* Manager is required</i>
                </span>
              )}
            </div>
          </div>
          <fieldset className="form-group">
            <div style={{ margin: "20px 0" }} className="row">
              <legend className="col-form-label col-sm-2 pt-0">Status</legend>
              <div className="col-sm-10 d-flex">
                <div style={{ marginRight: "10px" }} className="form-check">
                  <input
                    onClick={(e) => {
                      if (e.target.checked) {
                        setStatus(true);
                      }
                    }}
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="activenewsubject"
                    value={true}
                    checked={status}
                    
                  />
                  <label
                    className="form-check-label"
                    htmlFor="activenewsubject"
                  >
                    Active
                  </label>
                </div>
                <div style={{ marginRight: "10px" }} className="form-check">
                  <input
                    onClick={(e) => {
                      if (e.target.checked) {
                        setStatus(false);
                      }
                    }}
                    checked={!status}
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="inactivenewsubject"
                    
                    value={false}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="inactivenewsubject"
                  >
                    Inactive
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleUpdateClass}
              >
                Update class
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
