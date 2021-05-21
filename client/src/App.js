import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home.jsx"
import Main from "./Components/Main/Main.jsx"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
