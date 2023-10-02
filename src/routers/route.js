import Login from "../components/auth/Login";
import Admin from "../components/admin/Admin";
export const publicRouter = [
	{
		element: Login,
		path: "/login",
	},
	{
		element: Admin,
		path: "/admin/manager/:slug"
	}
];
export const adminRouter = [
	
];

export const userRouter = [

];
