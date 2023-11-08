import React, { useState } from "react";
import "./button.css";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const CuandoDeClick = () => {
    setLikes(likes + 1);
  };

  const handleResetClick = () => {
    setLikes(0);
  };

  return (
    <div className="container-like">
      <p>likes {likes}</p>
      <button className="button" onClick={CuandoDeClick}>
        suma
      </button>
      <button className="button" onClick={handleResetClick}>
        reiniciar
      </button>
    </div>
  );
};

export default LikeButton;
