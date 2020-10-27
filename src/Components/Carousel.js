
import React from 'react';
import './../SCSS/Carousel.scss';
import CarouselCard from './CarouselCard';


const Carousel = () => {


	return (
		<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		  	</ol>
		  	<div className="carousel-inner">
			    <div className="carousel-item active">
			    	<img className="d-block w-100" src= {process.env.PUBLIC_URL+"Images/Slider_image/slider_1.jpg"} alt="First slide" />
			    	<CarouselCard />
			    </div>
			    <div className="carousel-item">
			    	<img className="d-block w-100" src= {process.env.PUBLIC_URL+"Images/Slider_image/slider_2.jpg"} alt="Second slide" />
			    	<CarouselCard />
			    </div>
			    <div className="carousel-item">
			    	<img className="d-block w-100" src= {process.env.PUBLIC_URL+"Images/Slider_image/slider_3.jpg"} alt="Third slide" />
			    	<CarouselCard />
			    </div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		    	<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="black" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
				</svg>
		    	<span className="sr-only">Previous</span>
		  	</a>
		  	<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="black" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
				</svg>
			    <span className="sr-only">Next</span>
		  	</a>
		</div>
		)
}


export default Carousel;