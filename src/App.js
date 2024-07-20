import React, { } from 'react';
import './App.css';

import AddFriend from './components/AddFriend';
import { ContextProvider } from './AppContext/ContextProvider';
import Friends from './components/Friends';



function App() {


  return (
    <ContextProvider >

      <AddFriend />
      <Friends />


    </ContextProvider >
  );
}

export default App;
