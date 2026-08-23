import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";
import About from "./components/About";


function App(){
    useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: true,     // Sirf ek baar chalegi
    });
  }, []);
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      {/* <Route path="/about" element={<About/>}/> */}
    </Routes>
    </>
  )
}

export default App;