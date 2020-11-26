import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogNav from "./DogNav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

import './App.css';
import DOGS from "./dogs";

function App() {
  return (
    <div className="App">
      <DogNav dogNames={DOGS.map(d => d.name)}/>
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={DOGS}/>
        </Route>
        <Route exact path="/dogs/:name">
          <DogDetails dogs={DOGS}/>
        </Route>
        <Redirect to="/dogs" /> {/*redirect everything else to /dogs*/}
      </Switch>
    </div>
  );
}

export default App;
