import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

import ClassesService from "../../../service/ClassesService";
import CreateClass from "./Create";
import DetailClass from "./Detail";
import Pagination from "./Pagination";
import UpdateClass from "./Update";
const limit = 10;
const Classes = () => {
  const [detailClass, setDetailClass] = useState(null);
  const [type, setType] = useState("list");
  const [classes, setClasses] = useState([]);
  const [search, setSearch] = useState("");
  const [sortId, setSortId] = useState(false);
  const [sortCode, setSortCode] = useState(false);
  const [updateClass, setUpdateClass] = useState(null);
  const [params, setParams] = useState({
    page: 1,
    limit,
    keyword: search,
    total: 0,
  });
  const [reload, setReload] = useState(false);

  const getList = async (params) => {
    const res = await ClassesService.getClassesList(params);
    setClasses(res?.data?.classes);
    setParams((old) => ({
      ...old,
      total: res.data.size,
      page: res?.data.page,
    }));
  };
  const handlePageChange = (page) => {
    getList({ ...params, page });
  };
  const handleSetStatus = async(id) => {
    const res= await ClassesService.handleSetStatus(id)
    setReload(!reload)
    if (res.isSuccess){
      toast.success(res?.data?.message);
    }
    else{
      toast.error(res?.data?.message);
    }
      
}

  useEffect(() => {
    getList(params);
  }, [reload]);

  return (
    <>
      <div className="input-group mt-5 d-flex justify-content-center">
        <div className="form-outline">
          <input
            style={{ height: "100%" }}
            placeholder="Tìm kiếm"
            type="search"
            id="form1"
            className="form-control"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            setType("list");
            setParams({ ...params, keyword: search });
            getList({ ...params, page: 1, keyword: search });
          }}
          style={{ height: "35px" }}
          type="button"
          className="btn btn-primary"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="d-flex btn_subject_manager mt-3 ">
        <button
          onClick={() => {
            setType("list");
          }}
          className={`${type === "list" ? "active" : ""}`}
        >
          View Classes List
        </button>
        <button
          onClick={() => {
            setType("create");
          }}
          className={`${type === "create" ? "active" : ""}`}
        >
          Create classes
        </button>
        <button
          onClick={() => {
            setType("detail");
          }}
          style={
            detailClass
              ? {
                  display: "flex",
                }
              : {
                  display: "none",
                }
          }
          className={`${type === "detail" ? "active" : ""}`}
        >
          Detail Class ID = {detailClass?.id}
        </button>
        <button
          onClick={() => {
            setDetailClass(null);
            setType("list");
          }}
          style={
            detailClass
              ? {
                  display: "flex",
                  marginLeft: "-6px",
                }
              : {
                  display: "none",
                  marginLeft: "-6px",
                }
          }
        >
          X
        </button>
        <button onClick={() => {
                    setType('update');
                }} style={updateClass ? {
                    display: "flex"
                } : {
                    display: "none"
                }} className={`${type === 'update' ? 'active' : ''}`}>Update Subject ID = {updateClass?.id}</button>
                <button onClick={() => {
                    setUpdateClass(null);
                    setType('list');
                }} style={updateClass ? {
                    display: "flex",
                    marginLeft: "-6px"
                } : {
                    display: "none",
                    marginLeft: "-6px"
                }}  >X</button>
      </div>
      <div>
        {type === "list" && (
          <section style={{ marginTop: "0px" }} className="ftco-section">
            <div className="row">
              <div className="col-md-12">
                <div className="table-wrap">
                  <table className="table table-responsive-xl">
                    <thead>
                      <tr>
                        <th>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            ID
                            <div
                              style={{ marginLeft: "10px" }}
                              onClick={() => {
                                setSortCode(false);
                                setSortId(!sortId);
                                setParams({
                                  ...params,
                                  keysort: "id",
                                  valuesort: !sortId ? "DESC" : "ASC",
                                });
                                getList({
                                  ...params,

                                  keysort: "id",
                                  valuesort: !sortId ? "DESC" : "ASC",
                                });
                              }}
                            >
                              <div
                                style={{
                                  height: "18px",
                                  cursor: "pointer",
                                  color: sortId ? "blue" : "",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-down-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Code
                            <div
                              style={{ marginLeft: "10px" }}
                              onClick={() => {
                                setSortId(false);
                                setSortCode(!sortCode);
                                setParams({
                                  ...params,
                                  keysort: "class_code",
                                  valuesort: !sortCode ? "DESC" : "ASC",
                                });
                                getList({
                                  ...params,
                                  keysort: "class_code",
                                  valuesort: !sortCode ? "DESC" : "ASC",
                                });
                              }}
                            >
                              <div
                                style={{
                                  height: "18px",
                                  cursor: "pointer",
                                  color: sortCode ? "blue" : "",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-down-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th style={{ width: "18%" }}>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Name
                          </div>
                        </th>
                        <th>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Manager
                          </div>
                        </th>
                        <th>
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Status
                          </div>
                        </th>

                        <th style={{ width: "25%" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes?.map((item) => (
                        <tr
                          key={item?.id + "apple"}
                          className="alert"
                          role="alert"
                        >
                          <td className="border-bottom-0-custom">{item?.id}</td>
                          <td className="border-bottom-0-custom">
                            <div className="pl-3">
                              <span>{item?.class_code}</span>
                            </div>
                          </td>
                          <td className="border-bottom-0-custom">
                            <div className="d-flex align-items-center">
                              <div className="pl-3 ">
                                <span>{item?.class_name}</span>
                              </div>
                            </div>
                          </td>
                          <td className="border-bottom-0-custom">
                            <div className="pl-3">
                              <span>{item?.username ||'---'}</span>
                            </div>
                          </td>

                          <td className="status border-bottom-0-custom">
                            <span
                              className={item?.status ? "active" : "inactive"}
                            >
                              {item?.status ? "ACTIVE" : "INACTIVE"}
                            </span>
                          </td>

                          <td className="border-bottom-0-custom">
                            <button
                              onClick={() => {
                                setDetailClass(item);
                                setType("detail");
                              }}
                              style={{
                                marginLeft: "5px",
                                height: "30px",
                                fontSize: "12px",
                              }}
                              type="button"
                              className="btn active"
                            >
                              Detail
                            </button>
                            <button
                              onClick={() => { setType('update');
                              setUpdateClass(item);}}
                              style={{
                                marginLeft: "5px",
                                height: "30px",
                                fontSize: "12px",
                              }}
                              type="button"
                              className="btn btn-primary"
                            >
                              Update
                            </button>
                            <button
                              onClick={()=>handleSetStatus(item.id)}
                              style={{
                                marginLeft: "5px",
                                height: "30px",
                                fontSize: "12px",
                              }}
                              type="button"
                              className="btn btn-secondary"
                            >
                              Active/Deactive
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div
                    style={{ marginTop: "30px" }}
                    className="col-12 d-flex justify-content-center"
                  >
                    <Pagination
                      currentPage={params.page}
                      totalPages={Math.ceil(params.total / limit)}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {type === "create" && <CreateClass reload={()=>setReload(!reload)}/>}
        {type === 'update' && <UpdateClass item={updateClass} reload={setReload} />}
        {type === "detail" && <DetailClass id={detailClass?.id} manager={detailClass?.username}/>}
      </div>
    </>
  );
};

export default Classes;
