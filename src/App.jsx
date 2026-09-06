
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import 'aos/dist/aos.css';
import Aos from "aos";
import { useEffect } from "react";
// import LoginForm from "./components/LoginForm";



function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
      once: true,     // Sirf ek baar chalegi
    });
  }, []);
  return (
    <>
      <Navbar />
      <Dashboard />
      {/* <LoginForm/> */}
    </>
  )
}

export default App;