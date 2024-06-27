import { useContext, useState } from "react";
import { appContext } from "../App"; // Import correctly
import "./components.css";

function Bill() {
  const { selectedFriend, friends, setFriends } = useContext(appContext);
  const [payer, setPayer] = useState("me");
  const [myExpense, setMyExpense] = useState(0);
  const [billValue, setBillValue] = useState(0);

  function handlePayerChange(e) {
    setPayer(e.target.value);
  }

  function onSetMyExpense(e) {
    setMyExpense(Number(e.target.value));
  }

  function handleBill(e) {
    setBillValue(Number(e.target.value));
  }

  function calculateBalances() {
    const friendExpense = billValue - myExpense;
    const updatedFriends = friends.map((friend) => {
      if (friend.id === selectedFriend.id) {
        if (payer === "me") {
          friend.balance -= friendExpense;
        } else {
          friend.balance += myExpense;
        }
      }
      return friend;
    });
    setFriends(updatedFriends);
  }

  return (
    <div className="bill">
      <h3>Split a bill with {selectedFriend.name}</h3>
      <div className="div">
        <label>Bill Value</label>
        <input onChange={handleBill} type="text" value={billValue} />
      </div>
      <div className="div">
        <label>Your Expense</label>
        <input onChange={onSetMyExpense} type="text" value={myExpense} />
      </div>
      <div className="div">
        <label>Who Paid</label>
        <select onChange={handlePayerChange}>
          <option value="me">Me</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <button className="select-button" onClick={calculateBalances}>
        Split Bill
      </button>
    </div>
  );
}

export default Bill;
