import React, { useContext, useState } from "react";
import { message } from "./component/data";

const UserContext = React.createContext();
export const useUserContext = () => {
  return useContext(UserContext);
};

function getNewRand(oldRand = 0, min = 1, max = message.length - 1) {
  while (true) {
    let newRand = Math.floor(Math.random() * (max - min + 1) + min);
    if (oldRand !== newRand) {
      return newRand;
    }
  }
}
export default function UsersProvider({ children }) {
  const [prev, setPrev] = useState(null);
  const [messageRender, setMessageRender] = useState(message[0]);

  const generateMsg = () => {
    let rand = getNewRand(prev);

    setPrev(rand);
    setMessageRender(message[prev]);
  };

  const value = { messageRender, generateMsg };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
