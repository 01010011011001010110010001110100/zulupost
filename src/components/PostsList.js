import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const q = query(collection(db, 'posts'));
      const querySnapshot = await getDocs(q);
      const postsList = querySnapshot.docs.map(doc => doc.data());
      setPosts(postsList);
    } catch (error) {
      console.error("Error fetching posts: ", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts-list">
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.content}</p>
          <small>Posted by {post.user} at {new Date(post.createdAt.seconds * 1000).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
