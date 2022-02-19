import React from "react";
import s from "./Friends.module.css";
const Friends = (props) => {
  return (
    <div className={s.sidebarElements}>
      Friends
      <div>{props.name}</div>
    </div>
  );
};

export default Friends;
