import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import './CreatePost.css';

const CreatePost = ({ addPost }) => {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (!text.trim()) return;

    const newPost = {
      text,
      image,
      creator: user?.name || 'Anonymous',
      creatorAvatar: user?.image || '👤',
      createdAt: new Date().toISOString(),
    };

    addPost(newPost);
    setText('');
    setImage(null);
  };

  return (
    <div className="container-fluid create-post-container">      

      <div className="row">
        <div className='col-sm-3'> </div>

        <div className='col-sm-6'>
          <div className="card p-3 shadow form-container">

            {/* Title */}
            <h5 className="mb-3">Create Post</h5>
            <div className="form">

            {/* Textarea */}
            <div className="mb-3">
              <textarea
                ref={textAreaRef}
                className="form-control"
                placeholder="What's on your mind?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="3"
              />
            </div>

            {/* Image Preview */}
            {image && (
              <div className="mb-3 position-relative">
                <img
                  src={image}
                  alt="Preview"
                  className="img-fluid rounded"
                />
                <button
                  className="btn btn-danger btn-sm position-absolute top-0 end-0"
                  onClick={() => setImage(null)}
                >
                  ✕
                </button>
              </div>
            )}

            {/* Bottom Section */}
            <div className="d-flex justify-content-between align-items-center">

              {/* Upload */}
              <div>
                <label htmlFor="imageInput" className="btn btn-light">
                  📷 Add Photo
                </label>
                <input
                  id="imageInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  hidden
                />
              </div>

              {/* Post Button */}
              <button
                className="btn btn-primary"
                onClick={handlePost}
                disabled={!text.trim()}
              >
                Post
              </button>

            </div>
            
          </div>
          </div>
        </div>

        <div className='col-sm-3'> </div>
      </div>
    </div>
  );
};

export default CreatePost;