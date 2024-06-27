import { useState, createContext } from "react";
import './App.css';
import Bill from './components/Bill';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

export const appContext = createContext();

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, setFriends] = useState([]);

  function addFriendList(friend) {
    setFriends((prevFriends) => {
      if (prevFriends.find(f => f.name === friend.name)) {
        return prevFriends;
      }
      return [...prevFriends, friend];
    });
  }

  return (
    <appContext.Provider
      value={{
        friends,
        setFriends,
        selectedFriend,
        setSelectedFriend,
      }}
    >
      <div className="app">
        <Friends />
        {selectedFriend && <Bill />}
        <AddFriend onAddFriendList={addFriendList} />
      </div>
    </appContext.Provider>
  );
}

export default App;
