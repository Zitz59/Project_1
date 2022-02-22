import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import state from "./Redux/state";
import { addPost } from "./Redux/state.js";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        //posts={state.profilePage.posts}
        //dialogs={state.dialogsPage.dialogs}
        //messages={state.dialogsPage.messages}
        //sidebar={state.sidebar.sidebarItems}
      />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
