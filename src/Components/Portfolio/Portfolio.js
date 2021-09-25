import React, { useEffect } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<>
			<section id="portfolio" className="yellow-bg">
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="heading-intro">
								<p>creative agency with full features</p>
								<h3 class="text-uppercase">Our latest work showcase</h3>
							</div>
						</div>
					</div>
					<Tabs>
						<TabList>
							<Tab>All</Tab>
							<Tab>Printings</Tab>
							<Tab>Graphic Design</Tab>
							<Tab>Web Development</Tab>
							<Tab>Branding</Tab>
						</TabList>

						<TabPanel>
							<div class="row work-posts">
								<div class="col-md-4 col-sm-6" data-aos="fade-right">
									<div class="item">
										<a href="img/work/1.jpg" class="work-popup">
											<figure class="effect-ruby">
												<img
													src="img/work/1.jpg"
													alt="work-img"
													class="img-fluid"
												/>
												<figcaption>
													<div class="caption">
														<h2>Printings</h2>
														<p>project one</p>
													</div>
												</figcaption>
											</figure>
										</a>
									</div>
								</div>

								<div class="col-md-4 col-sm-6" data-aos="fade-right">
									<div class="item">
										<a href="img/work/1.jpg" class="work-popup">
											<figure class="effect-ruby">
												<img
													src="img/work/2.jpg"
													alt="work-img"
													class="img-fluid"
												/>
												<figcaption>
													<div class="caption">
														<h2>Printings</h2>
														<p>project one</p>
													</div>
												</figcaption>
											</figure>
										</a>
									</div>
								</div>

								<div class="col-md-4 col-sm-6" data-aos="fade-right">
									<div class="item">
										<a href="img/work/1.jpg" class="work-popup">
											<figure class="effect-ruby">
												<img
													src="img/work/3.jpg"
													alt="work-img"
													class="img-fluid"
												/>
												<figcaption>
													<div class="caption">
														<h2>Printings</h2>
														<p>project one</p>
													</div>
												</figcaption>
											</figure>
										</a>
									</div>
								</div>
								<div class="col-md-4 col-sm-6" data-aos="fade-right">
									<div class="item">
										<a href="img/work/1.jpg" class="work-popup">
											<figure class="effect-ruby">
												<img
													src="img/work/4.jpg"
													alt="work-img"
													class="img-fluid"
												/>
												<figcaption>
													<div class="caption">
														<h2>Printings</h2>
														<p>project one</p>
													</div>
												</figcaption>
											</figure>
										</a>
									</div>
								</div>
								<div class="col-md-4 col-sm-6" data-aos="fade-right">
									<div class="item">
										<a href="img/work/1.jpg" class="work-popup">
											<figure class="effect-ruby">
												<img
													src="img/work/5.jpg"
													alt="work-img"
													class="img-fluid"
												/>
												<figcaption>
													<div class="caption">
														<h2>Printings</h2>
														<p>project one</p>
													</div>
												</figcaption>
											</figure>
										</a>
									</div>
								</div>
								<div class="col-md-4 col-sm-6" data-aos="fade-right">
									<div class="item">
										<a href="img/work/1.jpg" class="work-popup">
											<figure class="effect-ruby">
												<img
													src="img/work/6.jpg"
													alt="work-img"
													class="img-fluid"
												/>
												<figcaption>
													<div class="caption">
														<h2>Printings</h2>
														<p>project one</p>
													</div>
												</figcaption>
											</figure>
										</a>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div class="work-inner">
								<div class="row work-posts">
									<div class="col-md-4 col-sm-6" data-aos="fade-right">
										<div class="item">
											<a href="img/work/1.jpg" class="work-popup">
												<figure class="effect-ruby">
													<img
														src="img/work/1.jpg"
														alt="work-img"
														class="img-fluid"
													/>
													<figcaption>
														<div class="caption">
															<h2>Printings</h2>
															<p>project one</p>
														</div>
													</figcaption>
												</figure>
											</a>
										</div>
									</div>

									<div class="col-md-4 col-sm-6" data-aos="fade-right">
										<div class="item">
											<a href="img/work/1.jpg" class="work-popup">
												<figure class="effect-ruby">
													<img
														src="img/work/1.jpg"
														alt="work-img"
														class="img-fluid"
													/>
													<figcaption>
														<div class="caption">
															<h2>Printings</h2>
															<p>project one</p>
														</div>
													</figcaption>
												</figure>
											</a>
										</div>
									</div>

									<div class="col-md-4 col-sm-6" data-aos="fade-right">
										<div class="item">
											<a href="img/work/1.jpg" class="work-popup">
												<figure class="effect-ruby">
													<img
														src="img/work/1.jpg"
														alt="work-img"
														class="img-fluid"
													/>
													<figcaption>
														<div class="caption">
															<h2>Printings</h2>
															<p>project one</p>
														</div>
													</figcaption>
												</figure>
											</a>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div class="work-inner">
								<div class="row work-posts">
									<div class="col-md-4 col-sm-6" data-aos="fade-right">
										<div class="item">
											<a href="img/work/2.jpg" class="work-popup">
												<figure class="effect-ruby">
													<img
														src="img/work/2.jpg"
														alt="work-img"
														class="img-fluid"
													/>
													<figcaption>
														<div class="caption">
															<h2>Graphic Design</h2>
															<p>project two</p>
														</div>
													</figcaption>
												</figure>
											</a>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div class="work-inner">
								<div class="row work-posts">
									<div class="col-md-4 col-sm-6" data-aos="fade-right">
										<div class="item">
											<a href="img/work/3.jpg" class="work-popup">
												<figure class="effect-ruby">
													<img
														src="img/work/3.jpg"
														alt="work-img"
														class="img-fluid"
													/>
													<figcaption>
														<div class="caption">
															<h2>Landing Pages</h2>
															<p>project three</p>
														</div>
													</figcaption>
												</figure>
											</a>
										</div>
									</div>

									<div class="col-md-4 col-sm-6 " data-aos="fade-right">
										<div class="item">
											<a href="img/work/4.jpg" class="work-popup">
												<figure class="effect-ruby">
													<img
														src="img/work/4.jpg"
														alt="work-img"
														class="img-fluid"
													/>
													<figcaption>
														<div class="caption">
															<h2>Blogs</h2>
															<p>project four</p>
														</div>
													</figcaption>
												</figure>
											</a>
										</div>
									</div>

									<div class="col-md-4 col-sm-6 " data-aos="fade-right">
										<div class="item">
											<a href="img/work/5.jpg" class="work-popup">
												<figure class="effect-ruby">
													<img
														src="img/work/5.jpg"
														alt="work-img"
														class="img-fluid"
													/>
													<figcaption>
														<div class="caption">
															<h2>Ecommerce Websites</h2>
															<p>project five</p>
														</div>
													</figcaption>
												</figure>
											</a>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
						<TabPanel>
							<div class="work-inner">
								<div class="row work-posts">
									<div class="col-md-4 col-sm-6" data-aos="fade-right">
										<div class="item">
											<a href="img/work/3.jpg" class="work-popup">
												<figure class="effect-ruby">
													<img
														src="img/work/3.jpg"
														alt="work-img"
														class="img-fluid"
													/>
													<figcaption>
														<div class="caption">
															<h2>Branding</h2>
															<p>project three</p>
														</div>
													</figcaption>
												</figure>
											</a>
										</div>
									</div>
								</div>
							</div>
						</TabPanel>
					</Tabs>

					{/* 

							<div
								class="col-md-4 col-sm-6 mix photography"
								data-bound=""
								style="display: inline-block;">
								<div class="item">
									<a href="img/work/6.jpg" class="work-popup">
										<figure class="effect-ruby">
											<img src="img/work/6.jpg" alt="work-img" class="img-fluid" />
											<figcaption>
												<h2>Logo design</h2>
												<p>project six</p>
											</figcaption>
										</figure>
									</a>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</section>
		</>
	);
};

export default Portfolio;
