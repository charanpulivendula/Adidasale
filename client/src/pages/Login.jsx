import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted form:', email, password);
    axios.post("/login",{
      email:email,
      password:password,
      }).then(res => {
          localStorage.setItem("admin",res.data.admin)
          if(res.data.error){
              alert(res.data.error)
          }
          else{
            if (res.data.user.admin === 1){
              navigate('/dashboard')
            }
            else{
              navigate('/userdashboard')
            }
          }
      }).then((res)=>{
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
      });
  };


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div> 
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}>Submit</button>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-sm font-medium">Forgot password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;