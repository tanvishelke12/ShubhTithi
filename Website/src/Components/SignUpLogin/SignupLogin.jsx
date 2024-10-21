import React, { useState } from 'react';
import './SignupLogin.css';

const SignupLogin = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    // Example: Password must be at least 6 characters
    return password.length >= 6;
  };

  const validateForm = () => {
    let errors = {};
    if (state === "Sign Up" && !formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!validateEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!validatePassword(formData.password)) {
      errors.password = "Password must be at least 6 characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    if (!validateForm()) return;
      
        console.log('Login function executed', formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => responseData = data);
    
        if (responseData.success) {
          
          localStorage.setItem('auth-token',responseData.token);
          window.location.replace("/");
         
        } 
        else {
          alert(responseData.errors);
        }
      
  }

  const signup = async () => {
    if (!validateForm()) return;

    console.log('SignUp function executed', formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
   
    } 
    else {
      alert(responseData.errors);
      console.log(responseData.errors);
    }
  }

  return (
    <div className='SignupLogin'>
      <div className='SignupLogin-container'>
        <h1>{state === "Sign Up" ? "Sign Up" : "Login"}</h1>
        <div className='SignupLogin-fields'>
          {state === "Sign Up" && (
            <>
              <input
                name='username'
                value={formData.username}
                onChange={changeHandler}
                type='text'
                placeholder='Your Name'
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </>
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type='email'
            placeholder='Email Address'
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type='password'
            placeholder='Password'
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ? (
          <p className='SignupLogin-login'>
            Already have an account? <span onClick={() => { setState("Login") }}>Login Here</span>
          </p>
        ) : (
          <p className='SignupLogin-login'>
            Create an account? <span onClick={() => { setState("Sign Up") }}>Click Here</span>
          </p>
        )}
        <div className='SignupLogin-agree'>
          <input type='checkbox' name='' id='' />
          <p> By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default SignupLogin;
