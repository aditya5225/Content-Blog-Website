
import React from 'react';
import './SCSS/Footer.scss';


const Footer = () => {
	return (
		<div className= 'footer container border-top'>
			<div className= 'row'>
				<div className= 'col-12'>
					<div className= 'social_icon'>
						<i className="fab fa-facebook-square"></i>
						<i className="fab fa-facebook-square"></i>
						<i className="fab fa-facebook-square"></i>
						<i className="fab fa-facebook-square"></i>
					</div>

					<p> Copyright ©2020 All rights reserved | This template is made with  by Colorlib </p>

					<div className= 'conditions'> 
						<p> Terms & Conditions </p> 
						/ 
						<p> Privacy Policy </p> 
					</div>
				</div>
			</div>
		</div>
		)
}


export default Footer;