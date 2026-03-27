import "./App.css";
import Main from "../Main/Main";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
