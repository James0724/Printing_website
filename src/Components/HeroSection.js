import React from 'react';

import '../App.css';

const HeroSection = () => {
	return (
		<>
			<section
				id="hero-area"
				style={{ backgroundImage: 'url(img/contact-bg.jpg)' }}>
				<div class="overlay"></div>

				<div class="container">
					<div class="row justify-content-md-center">
						<div class="col-md-10">
							<div class="item active">
								<div class="contents text-center">
									<h1
										class="wow fadeInDown"
										data-wow-duration="1000ms"
										data-wow-delay="300ms exbold-font">
										JKTEE AGENCY
										<br />
										<span class="regular-font text-capitalize">
											Fast and Quality Services
										</span>
									</h1>
									<p
										class="lead  wow fadeIn"
										data-wow-duration="1000ms"
										data-wow-delay="400ms">
										Providing the best printing services, branding and content
										writing
										<br /> Including web-development services from designing to
										launching.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
