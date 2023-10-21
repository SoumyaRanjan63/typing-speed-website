import React,{useState} from 'react';
import Appcss from "./App.css";
import Navbar from './Components/Navbar';
import TypingBox from './Components/TypingBox';
import FilterSection from './Components/FilterSection';
import Footer from './Components/Footer';


const App = () => {
  const [timer, setTimer] = useState(15);
  const [counting, setCounting] = useState(false);//counting is for multiple symoltenious input by user 
    
  return (
    <div>
      <Navbar setTimer={setTimer} setCounting={setCounting} timer={timer} />
      <TypingBox setTimer={setTimer} setCounting={setCounting} timer={timer}/>
      <FilterSection/>
      <Footer/>
    </div>
  );
}

export default App;
