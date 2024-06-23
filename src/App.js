import { useState } from "react";
import './App.css';

import Bill from './components/Bill';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

function App() {
  const [billValue, setBillValue] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [payer, setPayer] = useState('me');
  const [friends, setFriends] = useState([]);

  function isSelected(friend) {
    setSelectedFriend(friend);
  }

  function handleBill(e) {
    setBillValue(Number(e.target.value));
  }

  function onSetMyExpense(e) {
    setMyExpense(Number(e.target.value));
  }

  function handlePayerChange(e) {
    setPayer(e.target.value);
  }

  function calculateBalances() {
    const friendExpense = billValue - myExpense;
    const updatedFriends = friends.map(friend => {
      if (friend.id === selectedFriend.id) {
        if (payer === 'me') {
          friend.balance -= friendExpense;
        } else {
          friend.balance += myExpense;
        }
      }
      return friend;
    });
    setFriends(updatedFriends);
  }

  function addFriendList(friend) {
    setFriends((prevFriends) => {
      if (prevFriends.find(f => f.name === friend.name)) {
        return prevFriends;
      }
      return [...prevFriends, friend];
    });
  }

  return (
    <div className="app">
      <Friends friends={friends} onIsSelected={isSelected} />
      {selectedFriend && (
        <Bill
          onHandleBill={handleBill}
          onSetMyExpense={onSetMyExpense}
          billValue={billValue}
          myExpense={myExpense}
          selectedFriend={selectedFriend}
          onPayerChange={handlePayerChange}
          onCalculate={calculateBalances}
        />
      )}
      <AddFriend onAddFriendList={addFriendList} />
    </div>
  );
}

export default App;
