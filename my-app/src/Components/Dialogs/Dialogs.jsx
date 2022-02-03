import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

//Add massive with name and id's
const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Gvidon" },
    { id: 2, name: "Saltan" },
    { id: 3, name: "Tkachiha" },
    { id: 4, name: "Povariha" },
    { id: 5, name: "Batman" },
    { id: 6, name: "Boss" },
    { id: 7, name: "Greek" },
  ];
  // Add massive with messages
  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Where is my money???" },
    { id: 3, message: "Miss you.....!" },
    { id: 4, message: "You are welcome!" },
    { id: 5, message: "Backdafuckup, the Onyx is here!" },
    { id: 6, message: "Jerry was a race car driver...." },
    { id: 7, message: "Come to ...." },
  ];
  //Use .map method to dialogs massive
  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  //Use map method to messages massive
  let messagesElements = messages.map((m) => <Message message={m.message} />);
  //Add new massive with data to components
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
