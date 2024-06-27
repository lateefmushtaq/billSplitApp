import { useContext } from "react";
import { appContext } from "../App"; // Import correctly
import Friend from "./Friend";
import "./components.css";

function Friends({ onIsSelected }) {
  const { friends } = useContext(appContext);

  return (
    <div className="main">
      <h3>Friend List</h3>
      {friends.length === 0 ? (
        <p>Please add friends</p>
      ) : (
        <div className="friends-container">
          {friends.map((friend) => (
            <div className="container" key={friend.id}>
              <Friend friend={friend} onIsSelected={onIsSelected} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Friends;
