import React, { } from 'react';
import './App.css';
import AddFriend from './components/AddFriend';
import { ContextProvider } from './AppContext/ContextProvider';
import Friends from './components/Friends';

function App() {
  return (
    <ContextProvider >
      <h3 style={{ textAlign: 'center' }}> Add friends to split the bill</h3> {" "}
      <AddFriend />
      <Friends />
    </ContextProvider >
  );
}
export default App;
