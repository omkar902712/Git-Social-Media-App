import React, { useState } from 'react';

const LikeButton = () => {
  // 1. When the page opens, look in the "secret pocket" for a number.
  // If the pocket is empty, start at 0.
  const savedNumber = localStorage.getItem('my_likes') || 0;

  // 2. Put that number into the React state so we can see it.
  const [likes, setLikes] = useState(parseInt(savedNumber));

  const handleLikes = () => {
    const newNumber = likes + 1; // Add 1 to the current number

    setLikes(newNumber); // Task 1: Show the new number on the screen
    localStorage.setItem('my_likes', newNumber); // Task 2: Save it in the pocket 
  }

  return (
    <div>
      <button className="btn btn-light" onClick={handleLikes}>
        👍 Like {likes}
      </button>
    </div>
  );
};

export default LikeButton;