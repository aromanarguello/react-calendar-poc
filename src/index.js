import React from "react";
import ReactDOM from "react-dom";
import { MyCalendar } from "./Calendar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MyCalendar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
