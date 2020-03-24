import React from "react";
import Home from "./routes/Home";
import About from "./routes/About"; //as 컴포넌트 이름 alias설정...안되네?
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* <Route path="/" exact={true} component={Home} /> */}
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;