import React from 'react';
import About from './Components/About';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Forms/ContactUs';

import HeroSection from './Components/HeroSection';
import GetStarted from './Components/Misc/GetStarted';
import Reviews from './Components/Misc/Reviews';
import TopBar from './Components/Navbar/Topbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Navbar from './Components/Navbar/Navbar';

import './responsive.css';
import Blog from './Components/Blog';

function App() {
	return (
		<div className="App">
			<TopBar />
			<Navbar />
			<HeroSection />
			<About />
			<Services />
			<GetStarted />
			<Portfolio />
			<Reviews />
			<Blog />
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;
