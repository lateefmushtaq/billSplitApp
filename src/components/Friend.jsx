import React from "react";
import "./components.css";

function Friend({ friend }) {
  return (
    <div className="container">
      <div className="profile-pic">
        <img src={friend.image} alt={friend.name} />
      </div>
      <div className="details">
        <p>{friend.name}</p>
        <p>{friend.balance}</p>
      </div>
      <button className="select-button">Select</button>
    </div>
  );
}

export default Friend;
