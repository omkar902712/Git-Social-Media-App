import React, { useContext } from 'react';
import CommentBox from '../CommentBox/CommentBox';
import LikeButton from '../LikeButton/LikeButton';
import { AuthContext } from '../../Context/AuthContext';
import './PostCard.css';

const PostCard = ({ post, index, onDelete }) => {
  const { user } = useContext(AuthContext);

  const postUser = user || {
    name: 'Anonymous',
    avatar: '👤',
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      onDelete(index);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">

        <div className="col-sm-12">
          <div className="card shadow">
            {/* Card Header */}
            <div className="card-header d-flex justify-content-between align-items-center">

              <div className="d-flex align-items-center gap-2">              
                <div>
                  <span>{postUser.avatar}</span>
                  <h6 className="mb-1">{postUser.name}</h6>
                  <small className="text-muted">{new Date().toLocaleString()}</small>
                </div>
              </div>

              <button className="btn btn-sm btn-danger" onClick={handleDelete}>
                🗑️
              </button>
            </div>

            {/* Image Top */}
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="card-img-top"
              />
            )}

            {/* Card Body */}
            <div className="card-body">
              <p className="card-text">{post.text}</p>

              <div className="d-flex justify-content-between">
                <LikeButton/>
                <button className="btn btn-light">💬 Comment</button>
                <button className="btn btn-light">↗️ Share</button>

              </div>
            </div>

            {/* Comment Box */}
            <div className="card-footer">
              <CommentBox />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default PostCard;