import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const CommentBox = () => {

  // 1. When the app starts,
  // try to get comments from the "notebook" (LocalStorage)
  // If the notebook is empty, start with an empty list []
  const [comment, setComment] = useState(()=>{
    const savedComments = localStorage.getItem('comments');

    return savedComments ? JSON.parse(savedComments) : [];
  });

  const [text, setText] = useState('');

  // 2. Every time the "comment" list changes, save it to the "notebook"
  useEffect(()=>{
    localStorage.setItem('comments', JSON.stringify(comment));
  },[comment]);

  // Add Comment On Post  
  const handleComment = () => {
    if (!text) return;
    setComment([...comment, text]);
    setText('');
  }

  // Delete Comment
  const handleDelete = (index) => {
    const existingComment = comment.filter((_, i) => i !== index);
    setComment(existingComment);
  }

  return (
    <div className='container-fluid'>
      <br/> <br/>
      
      <div className='row'>
        <div className='col-sm-9'>
          <input type="text" value={text}
            placeholder="Write To Comments" className="form-control"
            onChange={(e) => setText(e.target.value)} />
        </div>

        <div className='col-sm-3'>
          {/* Button */}
          <button onClick={handleComment} className="btn btn-primary"> Comment </button>
        </div>
      </div>

      <hr />

      <div className='row'>
        <div className='col-sm-12'>
          {/* Show Comments */}
          {comment.map((item, index) => (
            <div className='row mt-3'>
              <div className='col-sm-8' style={{ backgroundColor: "lightgray" }}>
                <p key={index}> {item} </p>
              </div>

              <div className='col-sm-4'>
                <button className='btn btn-success'
                  onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentBox;

