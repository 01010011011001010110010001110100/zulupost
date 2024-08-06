import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const AuthSection = ({ user }) => {
  const [view, setView] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("The Email or Password are incorrect")
      console.error("Error logging in: ", error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Some problem occurred registering the user")
      console.error("Error signing up: ", error.message);
    }
  };

  if (user) return null;

  return (
    <div className="auth-section">
      {view === 'login' ? (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            <button type="button" onClick={() => setView('signup')}>Sign Up</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
            <button type="button" onClick={() => setView('login')}>Login</button>
          </form>
        </div>
      )}
    </div>
  );

};

export default AuthSection;
