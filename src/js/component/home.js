import React from "react";

//include images into your bundle
import Navbar from "./Navbar.js";
import Header from "./Header.js";
import Carousel from "./Carousel.js";
import Footer from "./Footer.js";

let carouselList = [1, 2, 3, 4];
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5 con container-fluid">
			<Navbar />
			<Header />
			<div className="row">
				{carouselList.map((value, index) => {
					return (
						<div className="col-sm-3" key={index}>
							<Carousel />
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
}
