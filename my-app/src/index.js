import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let posts = [
  { id: 1, message: "Hello , world!", likeCount: 20 },
  { id: 2, message: "It's my first post!", likeCount: 15 },
];

let dialogs = [
  { id: 1, name: "Gvidon" },
  { id: 2, name: "Saltan" },
  { id: 3, name: "Tkachiha" },
  { id: 4, name: "Povariha" },
  { id: 5, name: "Batman" },
  { id: 6, name: "Boss" },
  { id: 7, name: "Greek" },
];

let messages = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "Where is my money???" },
  { id: 3, message: "Miss you.....!" },
  { id: 4, message: "You are welcome!" },
  { id: 5, message: "Backdafuckup, the Onyx is here!" },
  { id: 6, message: "Jerry was a race car driver...." },
  { id: 7, message: "Come to ...." },
];

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
