import React from 'react';
import Appcss from "./App.css";
import Navbar from './Components/Navbar';
import TypingBox from './Components/TypingBox';
import FilterSection from './Components/FilterSection';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <TypingBox />
      <FilterSection/>
      <Footer/>
    </div>
  );
}

export default App;
