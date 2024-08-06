import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const PostForm = () => {
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      try {
        await addDoc(collection(db, 'posts'), {
          content: newPost,
          user: auth.currentUser.email,
          createdAt: new Date()
        });
        setNewPost('');
        window.location.reload();
      } catch (error) {
        console.error("Error adding post: ", error.message);
      }
    }
  };

  return (
    <div className="post-form">
      <form onSubmit={handlePostSubmit}>
        <textarea placeholder="Write a new post" value={newPost} onChange={(e) => setNewPost(e.target.value)} required></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
