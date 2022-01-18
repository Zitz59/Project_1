import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogitem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Gvidon" },
    { id: 2, name: "Saltan" },
    { id: 3, name: "Tkachiha" },
    { id: 4, name: "Povariha" },
    { id: 5, name: "Batman" },
    { id: 6, name: "Boss" },
    { id: 7, name: "Greek" },
  ];

  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "Where is my money???" },
    { id: 3, message: "Miss you.....!" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <Dialogitem name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialogitem name={dialogsData[1].name} id={dialogsData[1].id} />
        <Dialogitem name={dialogsData[2].name} id={dialogsData[2].id} />
        <Dialogitem name={dialogsData[3].name} id={dialogsData[3].id} />
        <Dialogitem name={dialogsData[4].name} id={dialogsData[4].id} />
        <Dialogitem name={dialogsData[5].name} id={dialogsData[5].id} />
        <Dialogitem name={dialogsData[6].name} id={dialogsData[6].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
