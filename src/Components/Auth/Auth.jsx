import React, { useState } from 'react';
import Login from '../../Pages/registration/Login';
import SignUp from '../../Pages/registration/Signup';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login toggleAuth={toggleAuth} /> : <SignUp toggleAuth={toggleAuth} />}
    </div>
  );
};

export default Auth;
