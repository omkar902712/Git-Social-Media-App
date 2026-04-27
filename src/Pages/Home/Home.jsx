import React, { useState, useEffect } from 'react';
import './Home.css';

import CreatePost from '../../Components/CreatePost/CreatePost';
import PostCard from '../../Components/PostCard/PostCard';

import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Home = () => { 
  const [posts, setPost] = useState(() => {

    try {
      const saved = localStorage.getItem('posts');
      return saved ? JSON.parse(saved) : [];
    }
    catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // addPost
  const addPost = (newPost) => {
    setPost((prev) => [newPost, ...prev]);
  };

  // deletePost
  const deletePost = (indexToDelete) => {
    setPost((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container-fluid home-bg-img">
      <Navbar />

      <div className='createPost'>
        <CreatePost addPost={addPost} />
      </div>

      <div>
        {posts.length === 0 ? (
          <div className="text-center py-5">
            <div className="display-1 mb-3">📝</div>
            <h3> No Posts Yet </h3>
            <p> Be the first to share something amazing! </p>
          </div>
        ) : (
          posts.map((post, index) => (
            <PostCard key={index} post={post}
              index={index}
              onDelete={deletePost} />
          ))
        )}
      </div>

      <br/> <br/> <br/>

      <Footer />
    </div>
  );
};

export default Home;