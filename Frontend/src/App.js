import React from 'react'
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
import HeroSec from './AfterNavSec1/HeroSec';
import SearchInputs from './InputBox/SearchInputs';
import About from './AboutSec/About';
import Room from './AboutSec/Room';
import Service from './Services/Service';
import Gallery from './Gallery/myGallery';
import Thingstodo from './ThingsToDo/Thingstodo';
import Review from './Review/Review';
import Map from './Map/map';
import Footer from './Footer/Footer';
import Profiles from './Profiles';

const App = () => {
  return <Router>
    <Profiles />
    <Navbar />
    <HeroSec />
    <SearchInputs />
    <About />
    <Room />
    <Service />
    <Gallery />
    <Thingstodo />
    <Review />
    <Map />
    <Footer />
  </Router>
}

export default App;
