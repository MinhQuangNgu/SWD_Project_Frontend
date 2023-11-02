import Login from "../components/auth/Login";
import Admin from "../components/admin/Admin";
import ProjectSideBar from "../components/project/projectSideBar";
export const publicRouter = [
	{
		element: Login,
		path: "/login",
	},
	{
		element: Admin,
		path: "/admin/management/:slug",
	},
	{
		element: ProjectSideBar,
		path: "/teacher/management/:slug"
	}
];
export const adminRouter = [
	
];

export const userRouter = [

];

export const projectRouter = [

];
