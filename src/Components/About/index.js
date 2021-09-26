import React from 'react';

//importing images
import image1 from '../../img/T-Shirt-Printing.jpeg';
import image2 from '../../img/about/advert1.jpg';
import image3 from '../../img/about/writting.png';

const About = () => {
	return (
		<>
			<section id="about" class="about pt-5 pb-5">
				<div class="container " data-aos="fade-up">
					<div class="row gx-0">
						<div
							class="col-lg-6 d-flex flex-column "
							data-aos="fade-up"
							data-aos-delay="200">
							<div class="content ">
								<div class="heading-intro text-center">
									<p>Who We Are</p>
									<h3 class="text-uppercase">About Us</h3>
								</div>

								<p>
									We are a team of experts designers offering a wide variety of
									quality, affordable/pocket friendly prices and trendy
									tshirts(Polo, v-shaped, sleevless), plain and customized Sweat
									shiirts, Hodies, Branded mask and mug, and customized Kenyan
									made kiondoo/crafts. Our products are tailered for the whole
									family. We are guided by the basic principles of doing
									business with alot of transparency, openness and honesty while
									consistently modifying our products to meet the changing needs
									of our customers. At JKTee we dont just wait for solution, we
									create them. we understand that fashion is a matter of
									individual choises and preference and each client has what
									he/she loves.which is why we go the extra miles to develope
									products that are customized according to their needs.
								</p>
							</div>
						</div>
						<div class="col-lg-6">
							<div
								class="col-lg-12 d-flex align-items-center "
								data-aos="zoom-out"
								data-aos-delay="200">
								<img src={image1} class="img-fluid" alt="Advert" />
							</div>
							<div class="row pt-4">
								<div
									class="col d-flex align-items-center "
									data-aos="zoom-out"
									data-aos-delay="200">
									<img src={image2} class="img-fluid" alt="Advert" />
								</div>
								<div
									class="col d-flex align-items-center "
									data-aos="zoom-out"
									data-aos-delay="200">
									<img src={image3} class="img-fluid" alt="Advert" />
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
