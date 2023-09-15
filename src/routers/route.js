import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/home/Home";
import Publiclayout from "../components/layout/publicLayout/Publiclayout";
import Profile from "../components/profile/Profile";
import Recipe from "../components/detail/Recipe";
export const publicRouter = [
	{
		element: Home,
		path: "/",
		layout: Publiclayout,
	},
	{
		element: Login,
		path: "/login",
	},
	{
		element: Register,
		path: "/register",
	},
	{
		element: Profile,
		path: "/:slug/profile",
		layout: Publiclayout,
	}
	,
	{
		element: Recipe,
		path: "/recipe/:slug"
	}
];
export const adminRouter = [
	
];

export const userRouter = [

];
