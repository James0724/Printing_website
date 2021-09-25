import React from 'react';

const About = () => {
	return (
		<>
			<section id="about" class="about section-padding">
				<div class="container " data-aos="fade-up">
					<div class="row gx-0">
						<div
							class="col-lg-6 d-flex flex-column justify-content-center "
							data-aos="fade-up"
							data-aos-delay="200">
							<div class="content text-center">
								<div class="heading-intro">
									<p>Who We Are</p>
									<h3 class="text-uppercase">About Us</h3>
								</div>

								<p>
									Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
									et. Inventore et et dolor consequatur itaque ut voluptate sed
									et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
									corrupti.
								</p>
							</div>
						</div>
						<div class="col-lg-6">
							<div
								class="col-lg-12 d-flex align-items-center "
								data-aos="zoom-out"
								data-aos-delay="200">
								<img src="img/T-Shirt-Printing.jpeg" class="img-fluid" alt="" />
							</div>
							<div class="row pt-4">
								<div
									class="col d-flex align-items-center "
									data-aos="zoom-out"
									data-aos-delay="200">
									<img src="img/about/advert1.jpg" class="img-fluid" alt="" />
								</div>
								<div
									class="col d-flex align-items-center "
									data-aos="zoom-out"
									data-aos-delay="200">
									<img src="img/about/writting.png" class="img-fluid" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
