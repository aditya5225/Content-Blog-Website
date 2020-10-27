
import React from 'react';
import './../SCSS/TodaysHighlight.scss'
import BigCard from './BigCard';
import SubscribeCard from './SubscribeCard';
import SmallCard from './SmallCard';



const TodaysHighlight = () => {
	return (
		<div className= 'todayshighlight container p-0'>
			<div className= 'row title'>
				<h6> TODAY'S HIGHLIGHT </h6>
				<div></div>
			</div>

			<div className= 'row'>
				<div className= 'col-xl-9'>
					<div className= 'container'>
						<div className= 'row'>
							<div className= 'col-xl-6'>
								<BigCard />
							</div>

							<div className= 'col-xl-6'>
								<BigCard />
							</div>
						</div>

						<div className= 'row py-5'>
							<div className= 'col-xl-12'>
								<SmallCard />
							</div>

							<div className= 'col-xl-12'>
								<SmallCard />
							</div>

							<div className= 'col-xl-12'>
								<SmallCard />
							</div>
						</div>
					</div>
				</div>

				<div className= 'col-xl-3'>
					<SubscribeCard />
				</div>
			</div>
		</div>
		)
}


export default TodaysHighlight;