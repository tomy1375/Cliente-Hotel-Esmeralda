import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loading;
