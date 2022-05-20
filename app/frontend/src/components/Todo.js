import { useEffect, useContext, useState } from "react";
import appContext from "../context/appContext";
import Header from "./Header";
import { requestData } from "../services/requests";

function ToDo() {
  const { toDoList, setToDoList } = useContext(appContext);

  const request = async () => {
    const endpoint = '/todo';
    const data = await requestData(endpoint);
    if(data) return setToDoList(data);
  };
  
  useEffect(() => {
    request()
  }, [toDoList])
  
  console.log(toDoList)
  return(
    !toDoList ? (
      <></>
    ) : (
      <div>
      <Header />
      {
        toDoList.map((e) => {
          return (<ol>
            <li>{e.task}</li>
          </ol>)
        })
      }
    </div>
    )
  );
};

export default ToDo;