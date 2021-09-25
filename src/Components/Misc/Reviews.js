import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Reviews = () => {
	const options = {
		loop: true,
		margin: 10,
		items: 1,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: true,
	};
	return (
		<>
			<section id="reviews" class="pb-5 grey-bg">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="heading-intro">
								<p>What our clients say about us</p>
								<h3 class="text-uppercase">Reviews</h3>
							</div>
						</div>
					</div>
					<OwlCarousel className="owl-theme" {...options}>
						<div class="item">
							<div class="carousel slide" id="review-carousel">
								<div class="carousel-inner" role="listbox">
									<div class="carousel-item active text-center ">
										<div
											class="col-md-8 offset-md-2 col-12 data-aos aos-init aos-animate"
											data-aos="fade-up">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Ex error, at quod et tempora architecto, veniam
												dolorem assumenda vel, minus accusamus. Ad officiis sunt
												ea atque inventore maiores eligendi ut.Ex error, at quod
												et tempora architecto, veniam dolorem assumenda vel,
												minus accusamus.
											</p>
											<div class="client-info">
												<h5>Mark Milton</h5>
												<h6>CEO,Graphic People</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="carousel slide" id="review-carousel">
								<div class="carousel-inner" role="listbox">
									<div class="carousel-item active text-center ">
										<div
											class="col-md-8 offset-md-2 col-12 data-aos aos-init aos-animate"
											data-aos="fade-up">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Ex error, at quod et tempora architecto, veniam
												dolorem assumenda vel, minus accusamus. Ad officiis sunt
												ea atque inventore maiores eligendi ut.Ex error, at quod
												et tempora architecto, veniam dolorem assumenda vel,
												minus accusamus.
											</p>
											<div class="client-info">
												<h5>Mark Milton</h5>
												<h6>CEO,Graphic People</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="carousel slide" id="review-carousel">
								<div class="carousel-inner" role="listbox">
									<div class="carousel-item active text-center ">
										<div
											class="col-md-8 offset-md-2 col-12 data-aos aos-init aos-animate"
											data-aos="fade-up">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Ex error, at quod et tempora architecto, veniam
												dolorem assumenda vel, minus accusamus. Ad officiis sunt
												ea atque inventore maiores eligendi ut.Ex error, at quod
												et tempora architecto, veniam dolorem assumenda vel,
												minus accusamus.
											</p>
											<div class="client-info">
												<h5>Mark Milton</h5>
												<h6>CEO,Graphic People</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</OwlCarousel>
				</div>
			</section>
		</>
	);
};

export default Reviews;
