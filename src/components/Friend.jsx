import React from "react";
import "./components.css";

function Friend({ friend }) {
  return (
    <div className="container">
      <div className="profile-pic">
        <img src={friend.image} alt={""} />
      </div>
      <div className="details">
        <p>{friend.name}</p>
        <p
          className={
            friend.balance === 0 ? "" : friend.balance < 0 ? "green" : "red"
          }
        >
          {friend.balance === 0
            ? "You are all equal"
            : friend.balance < 0
            ? `${friend.name} owes you ${friend.balance}`
            : `you owe ${friend.name} ${friend.balance}$`}
        </p>
      </div>
      <button className="select-button">Select</button>
    </div>
  );
}

export default Friend;
