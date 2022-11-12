import React from 'react';
import { Link } from 'react-router-dom';

const Layout = (props) => {
	return (
		<div>
			<nav style={{ backgroundColor: 'gray' }}>
				<Link to="/">Home</Link>
				<br />
				<Link to="/trySome">TrySome</Link>
				<br />
				<Link to="/another">Another</Link>
				<br />
				{props.children}
			</nav>
		</div>
	);
};

export default Layout;
