import React from "react";
import "./components.css";

function Friend({ friend, onIsSelected }) {
  return (
    <div className="container">
      <div className="profile-pic">
        <img src={friend.image} alt={friend.name} />
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
            ? `${friend.name} owes you $${Math.abs(friend.balance)}`
            : `You owe ${friend.name} $${Math.abs(friend.balance)}`}
        </p>
      </div>
      <button onClick={() => onIsSelected(friend)} className="select-button">
        Select
      </button>
    </div>
  );
}

export default Friend;
