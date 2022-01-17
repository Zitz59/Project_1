import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogitem = (props) => {
	let path = "/dialogs/" + props.id;
	
	
	return <div className={s.dialog + ' ' + s.active}>
		<NavLink to={path}>{props.name}</NavLink>
		</div>

}


const Message = (props) => {
	return <div className = {s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>			
				<Dialogitem name = "Gvidon" id = "1"/>
				<Dialogitem name = "Saltan" id = "2"/>
				<Dialogitem name = "Tkachiha" id = "3"/>
				<Dialogitem name = "Povariha" id = "4"/>
				<Dialogitem name = "Batman" id = "5"/>
				<Dialogitem name = "Boss" id = "6"/>
				<Dialogitem name = "Greek" id = "7"/>
			</div>
			<div className={s.messages}>
				<Message message = "Hi"/>
				<Message message = "Where is my money???"/>
				<Message message = "Miss you....."/>
			</div>
		</div>
	)
	
}

export default Dialogs ;