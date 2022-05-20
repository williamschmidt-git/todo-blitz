import React, { useState } from 'react';
import appContext from '../appContext';

function AppProvider({ children }) {
  const [toDoList, setToDoList] = useState([]);

  const contextValue = {
    toDoList,
    setToDoList
  };

  return (
    <appContext.Provider
      value={ contextValue }
    >
      { children }
    </appContext.Provider>
  );
}

export default AppProvider;