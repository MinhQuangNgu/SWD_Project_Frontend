import axios from "axios";

class UserController{
    getAllManager = async () => {
        return await axios.get('/user/manager');
    }
}
export default new UserController();