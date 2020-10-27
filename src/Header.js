
import React from 'react';
import Navigation from './Navigation';
import './SCSS/Header.scss';


const Header = () => {


	return(
		<div className= 'header container'>
			<div className= 'row'>
				<div className= 'col-3 col-sm-2 col-md-2 col-lg-3 col-xl-3 sign'>
					<div> 
						<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-lock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
							<path fillRule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
						</svg>
						SignIn 
					</div>
				</div>

				<div className= 'col-12 col-sm-4 col-md-4 col-lg-6 col-xl-6 logo'>
					<h1> Content<span>. </span> </h1>
				</div>

				<div className= 'col-7 col-sm-5 col-md-5 col-lg-3 col-xl-3 search'>
					<div>
				      	<button href= '#'>
				      		<svg width=".8em" height=".8em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						  		<path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
						  		<path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
							</svg>
				      		Search
				      	</button>
				      	<form>
				      		<input type="search" placeholder="Enter Keyword and hit enter.." />
				      	</form>
					</div>
				</div>

				<div className= 'navi col-2 col-sm-1 col-md-1 col-lg-12 col-xl-12'>
					<Navigation />
				</div>
			</div>
		</div>
		)
}


export default Header;