import React from 'react';

const Header = () => {
	return (
		<header className="App-header" style={{padding:20}}>
			<h1 style={{margin:0}}>CMS_gruppenarbeit TEST123</h1>
			<nav style={{marginTop:12}}>
				<a href="#home" style={{color:'#61dafb',marginRight:12}}>Home</a>
				<a href="#about" style={{color:'#fff',opacity:0.85}}>About</a>
			</nav>
		</header>
	);
};

export default Header;
