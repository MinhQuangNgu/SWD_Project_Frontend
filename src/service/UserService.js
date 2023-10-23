import axios from "axios";

class UserService{
    getAllManager = async () => {
        return await axios.get('/user/manager');
    }
}
export default new UserService();