import React, { useState } from "react";

const LikeButton = ({ to, text }) => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={handleLikeClick}>{text}</button>
    </div>
  );
};

export default LikeButton;
