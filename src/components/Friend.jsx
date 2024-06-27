import React from "react";
import "./components.css";
import { useContext } from "react";
import { appContext } from "../App";

function Friend({ friend }) {
  const { setSelectedFriend } = useContext(appContext);

  function isSelected() {
    setSelectedFriend(friend);
  }

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
      <button onClick={isSelected} className="select-button">
        Select
      </button>
    </div>
  );
}

export default Friend;
