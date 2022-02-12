import { countries } from "./component/data";
import { message } from "./component/data";
import React, { useContext, useState, useEffect, useRef } from "react";

const UserContext = React.createContext();
export const useUserContext = () => {
  return useContext(UserContext);
};

//To generate a random number between 1 and total amount of elements inside array.
//Ensure that every generation is different from previous.
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
  const [isCancel, setisCancel] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(null);

  useEffect(() => {
    const html = document.querySelector("html");
    if (isSidebarActive) {
      // To prevent scrolling when overlay is opened
      html.classList.add("lock-scroll");
    } else {
      html.classList.remove("lock-scroll");
    }
  }, [isSidebarActive]);

  const generateMsg = () => {
    let rand = getNewRand(prev);

    //To ensure default message is displayed when no countries is selected.
    if (selectedList.length === 0) {
      return setMessageRender(message[0]);
    }
    setPrev(rand);
    setMessageRender(message[prev]);
  };

  //Ensure that another message is generated for everytime user deselect a country.
  useEffect(() => {
    if (isCancel && selectedList.length > 0) {
      return setMessageRender("It's okay, keep going! 👍");
    }
    generateMsg();
  }, [selectedList.length]);

  //Filtering the country from user input.
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
    setMessageRender,
    setisCancel,
    isSidebarActive,
    setIsSidebarActive,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
