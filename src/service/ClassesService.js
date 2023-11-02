import axios from "axios";

class ClassesService {
  getClassesList = async (params) => {
    try {
      const data = await axios.get("/classes/list", { params });
      return {
        isSuccess: true,
        data: data.data,
      };
    } catch (err) {
      return {
        isSuccess: false,
        data: err,
      };
    }
  };
  addClass = async (body) => {
    try {
      const data = await axios.post("/classes/add_class", body);
      return {
        isSuccess: true,
        data: data.data,
      };
    } catch (err) {
     
      return {
        isSuccess: false,
        data: err,
      };
    }
  };
  getDetailClass = async (id) => {
    try {
      const data = await axios.get(`/classes/${id}`);
      return {
        isSuccess: true,
        data: data.data,
      };
    } catch (err) {
      return {
        isSuccess: false,
        data: err,
      };
    }
  };
  handleSetStatus = async (id) => {
    try {
        const data = await axios.post(`/classes/c_status/${id}`);
        return {
            isSuccess:true,
            data:data.data
        }
    }
    catch (err) {
        return {
            isSuccess:false,
            data:err
        }
    }
}
updateClass = async (id,body) => {
  try {
    const data = await axios.post(`/classes/update_class/${id}`,body);
    return {
      isSuccess: true,
      data: data.data,
    };
  } catch (err) {
   
    return {
      isSuccess: false,
      data: err,
    };
  }
};
}

export default new ClassesService();
