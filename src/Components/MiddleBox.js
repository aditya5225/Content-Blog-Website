
import React from 'react';
import './../SCSS/MiddleBox.scss';
import SmallCard from './../Components/SmallCard';



const MiddleBox = () => {
	return (
		<div className= 'middlebox container'>

			<div className= 'row'>
				<div className= 'lifestyle col-sm-12 col-md-6 col-lg-6 col-xl-6'>
					<div className= 'row title'>
						<h6> LIFESTYLE </h6>
						<div></div>
					</div>

					<SmallCard />
					<SmallCard />
					<SmallCard />
				</div>

				<div className= 'travel col-sm-12 col-md-6 col-lg-6 col-xl-6'>
					<div className= 'row title'>
						<h6> TRAVEL </h6>
						<div></div>
					</div>

					<SmallCard />
					<SmallCard />
					<SmallCard />
				</div>
			</div>
		</div>
		)
}


export default MiddleBox;