import React from 'react';
import s from './Dialogs.module.css';
const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog}>
					Gvidon
				</div>
				<div className={s.dialog + ' ' + s.active}>
					Saltan
				</div>
				<div className={s.dialog}>
					Tkachiha
				</div>
				<div className={s.dialog}>
					Povariha
				</div>
				<div className={s.dialog}>
					Svatya Baba-Babariha
				</div>
				<div className={s.dialog}>
					Boss
				</div>
				<div className={s.dialog}>
					Greek
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>Where is my money???</div>
				<div className={s.message}>Miss you.....</div>
				<div className={s.message}></div>
				<div className={s.message}></div>
			</div>
		</div>
	)
	
}

export default Dialogs ;