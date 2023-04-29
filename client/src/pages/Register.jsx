import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted form:', name, email, password);
    axios.post("/register",{
      name:name,
      email:email,
      password:password,
      isAdmin: isAdmin ? 1 : 0,
      }).then(res => {
          console.log(res)
          if(res.data.error){
              alert(res.data.error)
          }
          else{
              navigate('/dashboard')
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
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="isAdmin" className="block text-gray-700 font-bold mb-2">Admin:</label>
          <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} id="isAdmin" className="form-checkbox h-5 w-5 text-indigo-600" />
          <span className="ml-2 text-gray-700 font-bold">Are you an admin?</span>
        </div>

        <div className="flex items-center justify-between">
          <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          <p className="text-gray-600 text-sm mt-2">Already have an account? <a href="./login" className="text-indigo-500 hover:text-indigo-700 font-bold">Login here</a></p>
        </div>
      </form>
    </div>
  );
};

export default Register;