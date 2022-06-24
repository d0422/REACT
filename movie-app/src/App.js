import React from "react";
import {
  BrowserRouter as Router,
  // 해쉬 라우터와 broswer라우터가 있음
  // 해쉬 라우터는 url이 #/url형태로 연결
  Switch,
  Route,
}from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/detail"
function App() {
  return (
  <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail></Detail>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>);
}
export default App;
