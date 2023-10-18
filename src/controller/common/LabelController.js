import axios from "axios";

class LabelController{
    handleGetAllLabels = async () => {
        return axios.get('/subject/label');
    }

    handleCreateNewLabel = async (label) => {
        return await axios.post('/subject/label/create',{
            ...label
        })
    }

    handleDeleteLabel = async (id) => {
        return await axios.delete(`/subject/label/${id}`);
    }

    handleUpdateLabel = async (id,details) => {
        return await axios.put(`/subject/label/${id}`,{
            ...details
        });
    }
}

export default new LabelController()