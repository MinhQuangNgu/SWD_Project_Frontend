import Login from "../components/auth/Login";
import Home from "../components/home/Home";
import Publiclayout from "../components/layout/publicLayout/Publiclayout";


export const publicRouter = [
	{
		element: Home,
		path: "/",
		layout: Publiclayout,
	},
	{
		element: Login,
		path: "/login",
	}
];
export const adminRouter = [
	
];

export const userRouter = [

];
