import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [friends, setFriends] = useState(() => {
    const storedFriends = localStorage.getItem("friends");
    return storedFriends ? JSON.parse(storedFriends) : [];
  });
  const [selected, setSelected] = useState();
  const [bill, setBill] = useState();
  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);

  const [list, setList] = useState(() => {
    const storedData = localStorage.getItem("Friends");
    return storedData ? JSON.parse(storedData) : [];
  });

  return (
    <AuthContext.Provider
      value={{
        friends,
        setFriends,
        list,
        setList,

        selected,
        setSelected,
        bill,
        setBill,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
