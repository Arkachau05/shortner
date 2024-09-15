import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "./hooks/useSignup.js";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signup(inputs);
		} catch (error) {
			console.error("Signup failed", error);
			// Handle error appropriately, e.g., show a message to the user
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-black'>
			<div className='bg-black border border-gray-300 p-8 rounded-lg shadow-lg w-full max-w-md'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'>Shortner</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='block text-white text-sm font-medium mb-1'>
							Full Name
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-800 leading-tight focus:outline-none focus:shadow-outline'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-white text-sm font-medium mb-1'>
							Username
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-800 leading-tight focus:outline-none focus:shadow-outline'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-white text-sm font-medium mb-1'>
							Password
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-800 leading-tight focus:outline-none focus:shadow-outline'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-white text-sm font-medium mb-1'>
							Confirm Password
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-800 leading-tight focus:outline-none focus:shadow-outline'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to="/login"
						className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'
					>
						Already have an account?
					</Link>

					<div className='mt-4'>
						<button
							className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
							disabled={loading}
						>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
