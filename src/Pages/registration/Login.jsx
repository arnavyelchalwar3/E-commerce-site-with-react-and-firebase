import React, { useState } from 'react';
import Layout from '../../Components/Layout/Layout';
import { Link } from 'react-router-dom';

const Login = ({ toggleAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log(email, password);
  };

  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-lg">Log In</button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
           <Link to="/signup" className="text-blue-500 underline">Sign Up</Link>
          {/* <button onClick={toggleAuth} className="text-gray-500 underline">Sign Up</button> */}
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default Login;
