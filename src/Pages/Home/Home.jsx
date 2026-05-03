import React, { useState, useEffect } from 'react';
import './Home.css';

import Sidebar from '../../Components/Sidebar/Sidebar';
import Footer from '../../Components/Footer/Footer';

import CreatePost from '../../Components/CreatePost/CreatePost';
import PostCard from '../../Components/PostCard/PostCard';

const Home = () => {
  const [posts, setPost] = useState(() => {
    try {
      const saved = localStorage.getItem('posts');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPost((prev) => [newPost, ...prev]);
  };

  const deletePost = (indexToDelete) => {
    setPost((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container-fluid">

      <div className='row'>
        <div className='col-sm-2'>
          <Sidebar />
        </div>

        <div className='col-sm-10 home_column'>
          <div className='createPost shadow-sm'>
            <CreatePost addPost={addPost} />
          </div>

          <div className="posts-container">
            {posts.length === 0 ? (
              <div className="text-center py-5">
                <div className="display-1 mb-3">📝</div>
                <h3>No Posts Yet</h3>
                <p className="text-muted">Be the first to share something amazing!</p>
              </div>
            ) : (
              posts.map((post, index) => (
                <div key={index} className="mb-4">
                  <PostCard
                    post={post}
                    index={index}
                    onDelete={deletePost}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='row'>
        <div className="col-12 p-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;