import React from "react";
import { Switch, Route } from "react-router";
import FormPage from "./pages/FormPage";
import WelcomePage from "./pages/WelcomePage";

function App() {




  return (
    <Switch>
      <Route exact path="/" ><FormPage /></Route>
      <Route exact path="/welcome/:name" ><WelcomePage /></Route>
    </Switch>
  );
}

export default App;
