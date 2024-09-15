
import { Navigate, Route, Routes } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Signup";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div>
			<Routes>
				<Route path='/*' element={authUser ? <Home /> : <Navigate to={`/login`} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp/>} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;
