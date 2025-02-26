import React from 'react'
import { useAuthContext } from "./context/AuthContext";
import "./App.css"
const Profilename = () => {
	const { authUser } = useAuthContext();
	return (
		<div className=''>
			<div className='flex'>
				<div className='w-8 rounded-full'>
				<img src={authUser.profilePic} alt='user avatar' />
					</div><p className='text-2xl'>{authUser.fullName}</p>
			</div>
		</div>
	);
};
const UserProfile = () => {
  return (
    <div>
      <Profilename/>
    </div>
  )
}

export default UserProfile
