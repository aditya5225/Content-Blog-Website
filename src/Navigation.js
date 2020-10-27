
import React, {useState} from 'react';
import './SCSS/Navigation.scss';

const Navigation = () => {

	const [wid, setWid] = useState('0rem');
	const [visble, setVisble] = useState('hidden');
	const [opct, setOpct] = useState('0');

	const drawProp = {
		width: wid,
		transition: 'all .5s'
	}

	const navDisplay = {
		visibility: visble,
		opacity: opct,
		transition: 'all .5s'
	}


	const openDraw = () => {
		setWid('15rem')
		setVisble('visible')
		setOpct('.2')
	}

	const closeDraw = () => {
		setWid('0vw')
		setVisble('hidden')
		setOpct('0')
	}


	return (
		<nav className="navigation navbar navbar-expand-lg navbar-light">
			<div className="navbar-toggler border" onClick= {openDraw} data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		    	<span className="navbar-toggler-icon"></span>
		  	</div>

		  	<div className= 'blurBg' style= {navDisplay} onClick= {closeDraw}>
		  	</div>

		  	<div className="collapse navbar-collapse" style= {drawProp} id="navbarNavDropdown">

		  		<button type="button" onClick= {closeDraw} className="close" aria-label="Close">
					<span aria-hidden="true"> &times; </span>
				</button>

			    <ul className="navbar-nav">
			    	<li className="nav-item active">
			        	<a className="nav-link" href="#"> Food and Drinks </a>
			      	</li>

			      	<li className="nav-item dropdown">
			        	<a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          	Categories
			        	</a>
				        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				        	<a className="dropdown-item" href="#"> Menu One </a>
				          	<a className="dropdown-item" href="#"> Menu Two </a>
				          	<a className="dropdown-item" href="#"> Menu Three </a>
				        </div>
			      	</li>

			      	<li className="nav-item">
			        	<a className="nav-link" href="#"> Travel </a>
			      	</li>

			      	<li className="nav-item">
			        	<a className="nav-link" href="#"> Elements </a>
			      	</li>

			      	<li className="nav-item">
			        	<a className="nav-link" href="#"> Inner Page </a>
			      	</li>

			      	<li className="nav-item">
			        	<a className="nav-link" href="#"> Contact us </a>
			      	</li>
			    </ul>
		  	</div>
		</nav>
		)
}


export default Navigation;