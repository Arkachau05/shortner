import React, { useState } from 'react'
import axios from 'axios'
import "./App.css"
import LogoutButton from './Logout';
import UserProfile from './ProfileName';
const Home = () => {
  
  const [originalUrl,setOriginalUrl]=useState('');
  const[shortUrl,setShortUrl]=useState('');

  const handleSubmit=()=>{
    axios.post('http://localhost:3000/api/short',{originalUrl})
    .then((res)=>{
      setShortUrl(res.data)
      console.log("API response",res.data)
    })
    .catch((err)=>console.log(err))
    //console.log(originalUrl)
  }
  
  return (
    
    <div className='center-container-xx'>
      	<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Url <span className='text-blue-500'>Shortner</span>
				</h1>
      <UserProfile/>
     <br/>
      <input value={originalUrl}
      onChange={(e)=>setOriginalUrl(e.target.value)} 
      type="text" name='originalUrl' className='hello' placeholder='Enter Your Url'></input><br/>
      <button type='button' onClick={handleSubmit} className='but'>short</button>
      <div className='nn'>
      {shortUrl && <img className='align-center' src={shortUrl.qrCodeImg }/>}
      </div>
      {
        shortUrl && (
          <div>
          <p className='pchange'>⬇️ShortUrl⬇️</p>
          <a href={shortUrl.shortUrl}>{shortUrl.shortUrl}</a><br/>
         
         
         
          </div>
        )
      }
      <LogoutButton/>
    </div>
  )
}

export default Home
