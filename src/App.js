import { useEffect, useState } from 'react';

// import componenets here
import Banner from './components/Banner';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import './App.css';
import Experience from './components/Experience';
import Video from './components/Video';
import Headsets from './components/Headsets';
import Testimonial from './components/Testimonial';
import Explore from './components/Explore';

// import animte scrolling (AOS)
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from './components/Footer';


function App() {
  const [navMobile, setNavMobile] = useState(false)

  //start aos initialization 
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delayl: 400,
    })
  }, [])


  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:lg:flex before:hidden">
      <Header setNavMobile={setNavMobile} />
      <Banner />

      {/* moviel nav */}
      <div className={`${navMobile ? 'right-0' : "-right-full"} fixed top-0 bottom-0 w-48 transition-all`}>

        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
