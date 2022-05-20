import React, { useState } from 'react';
import appContext from '../appContext';

function AppProvider({ children }) {
  const [todoList, setToDoList] = useState([]);

  const contextValue = {
    todoList,
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