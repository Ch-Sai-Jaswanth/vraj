import React, { useState } from 'react';
import '../styles/LoginSignup.css';
import usericon from '../utils/user_icon.png';
import pwdicon from '../utils/password_icon.png';
import emailicon from '../utils/email_icon.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === 'Login' ? <div></div> : <div className='input'>
            <img src={usericon} alt='usericon' />
            <input type='text' placeholder='Username' />
        </div>}
        <div className='input'>
            <img src={emailicon} alt='emailicon' />
            <input type='text' placeholder='Email' />
        </div>
        <div className='input'>
            <img src={pwdicon} alt='pwdicon' />
            <input type='password' placeholder='Password' />
        </div>
      </div>
      {action === 'SignUp' ? <div></div> : <div className='forgot-pwd'>Lost Password? <span>Click Here!</span></div>}
      <div className='submit-container'>
        <div className={action==='Login' ? 'submit gray' : 'submit'} onClick={() => {setAction('SignUp')}}>SignUp</div>
        <div className={action==='SignUp' ? 'submit gray' : 'submit'} onClick={() => {setAction('Login')}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup;
