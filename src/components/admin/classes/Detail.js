import { useEffect, useState } from "react";
import ClassesService from "../../../service/ClassesService";

export default function DetailClass({ id,manager }) {
  const [type, setType] = useState("general");
  const [detail, setDetail] = useState();
  const [startMilestone, setStartMilestone] = useState();
  const [endMilestone, setEndMilestone] = useState();

  const getDetail = async () => {
    const res = await ClassesService.getDetailClass(id);
    setDetail(res?.data);
    const start = new Date(res?.data?.milestone?.start_date);
    let yyyy_s = start.getFullYear();
    let mm_s = start.getMonth() + 1; // Months start at 0!
    let dd_s = start.getDate();
    setStartMilestone(dd_s + "/" + mm_s + "/" + yyyy_s);
    const end = new Date(res?.data?.milestone?.end_date);
    let yyyy_e = end.getFullYear();
    let mm_e = end.getMonth() + 1; // Months start at 0!
    let dd_e = end.getDate();
    setEndMilestone(dd_e + "/" + mm_e + "/" + yyyy_e);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <div className="d-flex btn_subject_manager mt-3 ">
        <button
          onClick={() => {
            setType("general");
          }}
          className={`${type === "general" ? "active" : ""}`}
        >
          General
        </button>
        <button
          onClick={() => {
            setType("student");
          }}
          className={`${type === "student" ? "active" : ""}`}
        >
          Student
        </button>
        <button
          onClick={() => {
            setType("milestone");
          }}
          className={`${type === "milestone" ? "active" : ""}`}
        >
          Milestone
        </button>
        <button
          onClick={() => {
            setType("issue_setting");
          }}
          className={`${type === "issue_setting" ? "active" : ""}`}
        >
          Issue Setting
        </button>
      </div>
      <div>
        {type === "general" && (
          <div className="subject_create">
            <div className="row">
              <label className="col-sm-3 col-form-label">Class code:</label>
              <div className="col-sm-3 col-form-label">
                {detail?.general?.class_code}
              </div>
              <label className="col-sm-3 col-form-label">Class name:</label>
              <div className="col-sm-3 col-form-label">
                {detail?.general?.class_name}
              </div>
            </div>
            <div className="row">
              <label className="col-sm-3 col-form-label">Description:</label>
              <div className="col-sm-9 col-form-label">
                {detail?.general?.description}
              </div>
            </div>
            <div className="row">
              <label className="col-sm-3 col-form-label">Status:</label>
              <div className="col col-form-label">
                <span
                  style={{
                    paddingInline: 8,
                    padding: 4,
                    borderRadius: 30,
                    color: detail?.general?.status ? "#1fa750" : "white",
                    background: detail?.general?.status ? "#cff6dd" : "red",
                  }}
                >
                  {detail?.general?.status ? "ACTIVE" : "INACTIVE"}
                </span>
              </div>
            </div>
            <div className="row">
              <label className="col-sm-3 col-form-label">Manager:</label>
              <div className="col-sm-9 col-form-label">
                {manager}
              </div>
            </div>
          </div>
        )}
        {type === "student" && (
          <div className="subject_create">
            <div class="row">
              <div class="col-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail?.student?.map((item) => {
                      return (
                        <tr>
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
          </div>
        )}
        {type === "milestone" && (
          <div className="subject_create">
            <div className="row">
              <label className="col-sm-3 col-form-label">Name:</label>
              <div className="col-sm-3 col-form-label">
                {detail?.milestone?.name}
              </div>
              <label className="col-sm-3 col-form-label">Description:</label>
              <div className="col-sm-3 col-form-label">
                {detail?.milestone?.description}
              </div>
            </div>
            <div className="row">
              <label className="col-sm-3 col-form-label">Start Date:</label>
              <div className="col-sm-3 col-form-label">{startMilestone}</div>
              <label className="col-sm-3 col-form-label">End Date:</label>
              <div className="col-sm-3 col-form-label">{endMilestone}</div>
            </div>
            <div className="row">
              <label className="col-sm-3 col-form-label">Status:</label>
              <div className="col col-form-label">
                <span
                  style={{
                    paddingInline: 8,
                    padding: 4,
                    borderRadius: 30,
                    color: detail?.milestone?.status ? "#1fa750" : "white",
                    background: detail?.milestone?.status ? "#cff6dd" : "red",
                  }}
                >
                  {detail?.milestone?.status ? "ACTIVE" : "INACTIVE"}
                </span>
              </div>
            </div>
          </div>
        )}
        {type === "issue_setting" && (
          <div className="subject_create">
            <div class="row">
              <div class="col-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Issue name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Color</th>
                      <th scope="col">Type</th>
                      <th scope="col">Workprocess</th>
                      <th scope="col">Project name</th>
                      <th scope="col">Subject name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail?.issuesetting?.map((item) => {
                      return (
                        <tr>
                          <td>
                            <div class="custom-control custom-checkbox">
                              <label
                                class="custom-control-label"
                                for="customCheck1"
                              >
                                {item?.issue_id}
                              </label>
                            </div>
                          </td>
                          <td>{item?.issue_name}</td>
                          <td>{item?.issue_description}</td>
                          <td>{item?.color}</td>
                          <td>{item?.type}</td>
                          <td>{item?.work_process}</td>
                          <td>{item?.project_name}</td>
                          <td>{item?.subject_name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
