import { useEffect, useContext } from "react";
import appContext from "../context/appContext";
import { fetchTodoList } from "../services/requests";

function ToDo() {
  const { toDoList, setToDoList } = useContext(appContext);
  const allTasks = async () => {
    const tasks = await fetchTodoList();
    toDoList = tasks;
  };

  useEffect(() => {
    allTasks();
  }, [])

  return(
    !toDoList ? (
      <></>
    ) : (
      <div>
      {
        toDoList.map((e) => {
          return (<h1>{e.task}</h1>)
        })
      }
    </div>
    )
  );
};

export default ToDo;