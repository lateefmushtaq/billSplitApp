import { useState } from "react";
import './App.css'

import Bill from './components/Bill';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

function App() {
  const [friends, setFriend] = useState([]);
  function addFriendList(friend) {
    setFriend((friends) => [...friends, friend]);
  }
  return (

    <div className="app">
      <Friends friends={friends} />
      <Bill />
      <AddFriend onAddFriendList={addFriendList} />
    </div>


  );
}

export default App;
