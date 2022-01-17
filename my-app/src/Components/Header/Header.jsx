import s from './Header.module.css';

const Header = (logo) => {
	return <header className={s.header}>
		<div className={s.logo}><img src="https://cdn-icons-png.flaticon.com/512/4542/4542046.png"></img></div>
	</header>

}

export default Header;