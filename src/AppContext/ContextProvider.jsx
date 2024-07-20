import React, { createContext, useState } from "react";

const AuthContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [friend, setFriend] = useState([]);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState();
  const [list, setList] = useState(() => {
    const storedData = localStorage.getItem("Friends");
    return storedData ? JSON.parse(storedData) : [];
  });

  return (
    <AuthContext.Provider
      value={{
        friend,
        setFriend,
        list,
        setList,
        cards,
        setCards,
        selected,
        setSelected,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
