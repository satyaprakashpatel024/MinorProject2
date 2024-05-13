import "./App.css";
import { Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast';
//components
import Home from "./components/Home.js";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import PageNotFound from "./components/PageNotFound";
import AttemptQuiz from "./AttemptQuiz.js";
import DashBoard from "./components/DashBoard.js";

function App() {
	return (
		<div className="App h-[100vh]  flex flex-col items-center justify-center">
			<Routes>
				<Route path="/" element={<DashBoard />}></Route>
				<Route path="/home" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin/attempt" element={<AttemptQuiz />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/reset-password/:resetPasswordToken" element={<ResetPassword />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
