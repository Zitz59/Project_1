import state, { subscribe } from "./Redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  sendMessage,
  updateNewMessageText,
} from "./Redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        sendMessage={sendMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
