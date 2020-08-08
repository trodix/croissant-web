import React, { useState, SyntheticEvent } from 'react'
import { authenticationService as AuthService } from '../services';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {

  const location = useLocation();
  const { from }: any = location.state || { from: { pathname: "/" } };
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault()
    await AuthService.login(email, password);
    history.replace(from);
  }

  return (
    <div className="login-form">
      <h1>Login to the app</h1>
      <form className="login-form__fields" onSubmit={handleSubmit}>
        <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
