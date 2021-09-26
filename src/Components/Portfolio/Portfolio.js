import React from 'react';

//Images
import work1 from '../../img/work/1.jpg';
import work2 from '../../img/work/2.jpg';
import work3 from '../../img/work/3.jpg';
import work4 from '../../img/work/4.jpg';
import work5 from '../../img/work/5.jpg';
import work6 from '../../img/work/6.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Portfolio = () => {
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
										<a href="#!" class="work-popup">
											<figure class="effect-ruby">
												<img src={work1} alt="work-img" class="img-fluid" />
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
										<a href="#!" class="work-popup">
											<figure class="effect-ruby">
												<img src={work2} alt="work-img" class="img-fluid" />
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
										<a href="#!" class="work-popup">
											<figure class="effect-ruby">
												<img src={work3} alt="work-img" class="img-fluid" />
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
										<a href="#!" class="work-popup">
											<figure class="effect-ruby">
												<img src={work4} alt="work-img" class="img-fluid" />
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
										<a href="#!" class="work-popup">
											<figure class="effect-ruby">
												<img src={work5} alt="work-img" class="img-fluid" />
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
										<a href="#!" class="work-popup">
											<figure class="effect-ruby">
												<img src={work6} alt="work-img" class="img-fluid" />
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
											<a href="#!" class="work-popup">
												<figure class="effect-ruby">
													<img src={work1} alt="work-img" class="img-fluid" />
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
											<a href="#!" class="work-popup">
												<figure class="effect-ruby">
													<img src={work1} alt="work-img" class="img-fluid" />
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
											<a href="#!" class="work-popup">
												<figure class="effect-ruby">
													<img src={work1} alt="work-img" class="img-fluid" />
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
											<a href="#!" class="work-popup">
												<figure class="effect-ruby">
													<img src={work2} alt="work-img" class="img-fluid" />
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
											<a href="#!" class="work-popup">
												<figure class="effect-ruby">
													<img src={work3} alt="work-img" class="img-fluid" />
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
											<a href="#!" class="work-popup">
												<figure class="effect-ruby">
													<img src={work4} alt="work-img" class="img-fluid" />
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
											<a href="#!" class="work-popup">
												<figure class="effect-ruby">
													<img src={work5} alt="work-img" class="img-fluid" />
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
											<a href="#!" class="work-popup">
												<figure class="effect-ruby">
													<img src={work3} alt="work-img" class="img-fluid" />
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
				</div>
			</section>
		</>
	);
};

export default Portfolio;
