
import React from 'react';
import './../SCSS/SmallCard.scss';


const SmallCard = () => {
	return (
		<div className="smallcard card">
			<div className="row no-gutters">
			    <div className="col-3 image">
			    	<img src= {process.env.PUBLIC_URL+'Images/Article_images/slider_2.jpg'} className="img-fluid" />
			    </div>
			    <div className="col-9">
				    <div className="card-body">
				    	<p className="card-text"> Food and Drink </p>
					    <h5 className="card-title"> Far far away behind the Word Mountains far from Away </h5>
					    <p className="card-text"> May 10, 2020, 5 mins read </p>
				        <p className="card-text"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. </p>
			      	</div>
			    </div>
		  	</div>
		</div>
		)
}


export default SmallCard;