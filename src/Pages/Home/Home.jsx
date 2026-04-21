import React, { useState, useEffect } from 'react';
import Home_Img from '../../assets/Images/Home/Home_Img.jpg';

import CreatePost from '../../Components/CreatePost/CreatePost';
import PostCard from '../../Components/PostCard/PostCard';

import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';

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
    <div className="container-fluid">      
      <Navbar/>
      
      <div className="row mt-4">
        <div className="col-12">
          <CreatePost addPost={addPost} />

          <div className="mt-4">
            {posts.length === 0 ? (
              <div className="text-center py-5">
                <div className="display-1 mb-3">📝</div>
                <h3 className="text-white">
                  No Posts Yet
                </h3>
                <p className="text-white">
                  Be the first to share something amazing!
                </p>
              </div>
            ) : (
              posts.map((post, index) => (
                <PostCard
                  key={index}
                  post={post}
                  index={index}
                  onDelete={deletePost}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;