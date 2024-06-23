import Friend from "./Friend";
import "./components.css";

function Friends({ friends, onIsSelected }) {
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
