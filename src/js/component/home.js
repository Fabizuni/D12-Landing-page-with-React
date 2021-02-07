import React from "react";
import { Navbar } from "./Navbar.js";
import { Header } from "./Header.js";
import { Carousel } from "./Carousel.js";
import { Footer } from "./Footer.js";

let carouselList = [1, 2, 3, 4, 5, 6, 7, 8];
//create your first component
export function Home() {
	return (
		<div className="text-center container-fluid">
			<Navbar />
			<Header />
			<div className="row my-5">
				{carouselList.map((value, index) => {
					return (
						<div className="col-sm-12 col-md-3 my-3" key={index}>
							<Carousel />
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
}
