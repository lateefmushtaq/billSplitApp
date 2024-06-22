import { useState } from "react";


import Bill from './components/Bill';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

function App() {
  const [friends, setFriend] = useState([]);
  function addFriendList(friend) {
    setFriend((friends) => [...friends, friend]);
  }
  return (
    <div>
      <Friends friends={friends} />
      <AddFriend onAddFriendList={addFriendList} />
      <Bill />
    </div>
  );
}

export default App;
