
import React from 'react';
import './../SCSS/Home.scss';
import Carousel from './../Components/Carousel';
import TodaysHighlight from './../Components/TodaysHighlight';
import MiddleBox from './../Components/MiddleBox';
import Food_n_Drink from './../Components/Food_n_Drink';





const Home = () => {
	return (
		<div className= 'home'>
			<Carousel />
			<TodaysHighlight />
			<MiddleBox />
			<Food_n_Drink />
		</div>
		)
}


export default Home;