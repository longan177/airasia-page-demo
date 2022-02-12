import React, { useContext, useState, useEffect } from "react";
import { message } from "./component/data";
import { countries } from "./component/data";

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
  const [prev, setPrev] = useState(1);
  const [messageRender, setMessageRender] = useState(message[0]);
  const [selectedList, setSelectedList] = useState([]);
  const [countriesList, setCountriesList] = useState(countries);
  const [userInput, setUserInput] = useState(``);

  const generateMsg = () => {
    let rand = getNewRand(prev);
    if (selectedList.length === 0) {
      return setMessageRender(message[0]);
    }
    setPrev(rand);
    setMessageRender(message[prev]);
  };

  useEffect(() => {
    generateMsg();
  }, [selectedList.length]);

  const filterByName = (country) => {
    if (userInput === "") {
      return country;
    } else if (country.name.toLowerCase().includes(userInput.toLowerCase())) {
      return country;
    }
  };

  useEffect(() => {
    const newList = countries.filter(filterByName);
    setCountriesList(newList);
  }, [userInput]);

  const value = {
    messageRender,
    generateMsg,
    selectedList,
    setSelectedList,
    countriesList,
    userInput,
    setUserInput,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
