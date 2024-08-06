import React, { useState, useEffect } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import AuthSection from './components/AuthSection';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  return (
    <div>
      <header>
        {user && <button onClick={handleLogout}>Logout</button>}
        <AuthSection user={user} />
      </header>
      <main>
        {user && <PostForm />}
        <PostsList />
      </main>
    </div>
  );
};

export default App;
