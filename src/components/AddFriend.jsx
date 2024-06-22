import { useState } from "react";
function AddFriend({ onAddFriendList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/60");

  function addFriend() {
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      balance: 0,
      image: `${image}?=${id}`,
    };
    setImage("https://i.pravatar.cc/60");
    onAddFriendList(newFriend);
  }
  return (
    <div>
      <label>Friends Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />

      <label>Friends Image</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />

      <button onClick={addFriend}>Add</button>
    </div>
  );
}

export default AddFriend;
