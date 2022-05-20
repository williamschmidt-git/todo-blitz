export const fetchTodoList = async () => {
  const responseAPI = fetch(`localhost:3001/`)
    .then((response) => response.json());

    return responseAPI;
}