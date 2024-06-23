import { useState } from "react";
import "./components.css";

function AddFriend({ onAddFriendList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [show, setShow] = useState(true);

  function handleShow() {
    setShow((prev) => !prev);
  }

  function addFriend() {
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      balance: 0,
      image: `${image}?=${id}`,
    };
    setImage("https://i.pravatar.cc/48");

    if (newFriend.name) {
      onAddFriendList(newFriend);
      setName(""); // Clear input after adding
    }
  }

  return (
    <>
      {show === true ? (
        <div className="add">
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Add Friends</h3>
              <button className="close-button" onClick={handleShow}>
                &times;
              </button>
            </div>
            <label> 📇 Friends Name :</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label> 📷 Friends Image:</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
            />
          </div>
          <div className="add-button">
            <button onClick={addFriend}>Add</button>
          </div>
        </div>
      ) : (
        <div className="add-button">
          <button style={{ margin: 0 }} onClick={handleShow}>
            Add friends
          </button>
        </div>
      )}
    </>
  );
}

export default AddFriend;
