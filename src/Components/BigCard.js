
import React from 'react';
import './../SCSS/BigCard.scss';


const BigCard = () => {
	return (
		<div className="bigcard">
			<img className="card-img-top" src= {process.env.PUBLIC_URL+'Images/Article_images/slider_1.jpg'} alt="Card image cap" />
		  	<div className="card-body">
		  		<p> Food and Drink </p>
			    <h6 className="card-title"> Far Far away beihnd the word Mountains far from away </h6>
			    <p> May 10, 2020 5 mins read </p>
			    <p className="card-text"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
		  	</div>
		</div>
		)
}

export default BigCard;