import Friend from "./Friend";

function Friends({ friends }) {
  return (
    <div>
      {" "}
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </div>
  );
}

export default Friends;
