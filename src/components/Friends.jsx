import Friend from "./Friend";
import "./components.css";

function Friends({ friends }) {
  return (
    <div className="main">
      <h3>Friend List</h3>
      {friends.length === 0 ? (
        <p>Please add friends</p>
      ) : (
        <div className="friends-container">
          {friends.map((friend) => (
            <div className="container" key={friend.id}>
              <Friend key={friend.id} friend={friend} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Friends;
