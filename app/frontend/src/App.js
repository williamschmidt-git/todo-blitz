import AppProvider from "./context/Provider/appProvider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDo from "./components/Todo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <ToDo/> }/>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
