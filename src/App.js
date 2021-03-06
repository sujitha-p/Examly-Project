import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Practice from "./components/Practice";

import Error from "./components/Error";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/practice" component={Practice} />

          {/* <Route path="/contact" component={Contact}/> */}
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
