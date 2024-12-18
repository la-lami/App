import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const Login = () => {
    // const navigate=useNavigate()

  return (

    <div className="flex items-center justify-center h-screen bg-slate-200">
        <div className="flex flex-col items-center justify-center p-6 w-[400px] h-[300px] bg-white border shadow-lg rounded-lg">
            <h1 className='text-3xl'><b>LOGIN</b></h1>
            <div className='flex flex-col justify-center items-center pt-5 gap-3'>
                <input type="text" placeholder='username' className='bg-gray-100 rounded py-3 px-8'/>
                <input type="password" placeholder='password' className='bg-gray-100 rounded py-3 px-8'/>
                <button className='bg-green-600 text-white py-2 px-20 rounded'>LOGIN</button>
             <h4 className="text-slate-400 text-sm">Not registered?<NavLink to='/signup' className="text-blue-500">Create an account</NavLink></h4> 

            </div>
        </div>
    </div>
  )
}

export default Login