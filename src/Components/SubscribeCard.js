
import React from 'react';
import './../SCSS/SubscribeCard.scss';


const SubscribeCard = () => {
	return (
		<div className="subscribecard">
			<img className="card-img-top" src= {process.env.PUBLIC_URL+'Images/Article_images/slider_1.jpg'} alt="Card image cap" />
		  	<div className="card-body">
			    <h6 className="card-title"> Subscribe to Newsletter </h6>
			    <p className="card-text"> Far far away, behind the word mountains far from. </p>
			    <input type= 'email' className= 'border' placeholder= 'Enter Email' />
			    <button > Subscribe </button>
		  	</div>
		</div>
		)
}

export default SubscribeCard;