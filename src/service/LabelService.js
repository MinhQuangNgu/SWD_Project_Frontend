import axios from "axios";

class LabelService{
    handleGetAllLabels = async () => {
        return axios.get('/issue_setting');
    }

    handleCreateNewLabel = async (label) => {
        return await axios.post('/issue_setting/create',{
            ...label
        })
    }

    handleDeleteLabel = async (id) => {
        return await axios.delete(`/issue_setting/${id}`);
    }

    handleUpdateLabel = async (id,details) => {
        return await axios.put(`/issue_setting/${id}`,{
            ...details
        });
    }
}

export default new LabelService()