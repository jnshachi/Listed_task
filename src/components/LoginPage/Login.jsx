import React from 'react';
import '../../styles/login.scss';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Login = ({ onLogin }) => {
  const handleSuccess = (credentialResponse) => {
    var decoded = jwt_decode(credentialResponse.credential);
    
    const imageUrl = decoded.picture;
    console.log(decoded);
    onLogin(imageUrl);  
  };

  const handleError = () => {
    console.log('Login Failed');
  };

  return (
    <div className="container">
      <div className="left-container">
        <span>Board.</span>
      </div>

      <div className="right-container">
        <div className="login-text">
          <b>Sign In</b>
          <br />
          <span> Use Google for Login</span>
        </div>
        <div className="google-button">
          <GoogleOAuthProvider clientId="1037231595534-m3f4un5nqhl4rcms6njbo0bdn78kfvip.apps.googleusercontent.com">
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
