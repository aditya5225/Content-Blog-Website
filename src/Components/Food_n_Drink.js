
import React from 'react';
import './../SCSS/Food_n_Drink.scss';
import BigCard from './BigCard';


const Food_n_Drink = () => {
	return (
		<div className= 'food_n_drink container'>
			<div className= 'row title'>
				<h6> FOOD AND DRINK </h6>
				<div></div>
			</div>

			<div className= 'row'>
				<div className= 'col-sm-12 col-md-6 col-lg-3 col-xl-3'>
					<BigCard />
				</div>

				<div className= 'col-sm-12 col-md-6 col-lg-3 col-xl-3'>
					<BigCard />
				</div>

				<div className= 'col-sm-12 col-md-6 col-lg-3 col-xl-3'>
					<BigCard />
				</div>

				<div className= 'col-sm-12 col-md-6 col-lg-3 col-xl-3'>
					<BigCard />
				</div>
			</div>
		</div>
		)
}



export default Food_n_Drink;