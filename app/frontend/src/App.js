import AppProvider from "./context/Provider/appProvider";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppProvider>

      </AppProvider>
    </div>
  );
}

export default App;
