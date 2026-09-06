import { useState } from "react";
import { VscCode } from "react-icons/vsc";
import { FaBars, FaTimes } from "react-icons/fa";

// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className="bg-[#0B1120] text-white h-15 sticky top-0 z-50">
      <div className="h-full flex justify-between items-center px-5 md:px-10">
        {/* Logo */}
        <h1 className="text-xl font-semibold flex items-center">
          <span className="text-blue-500 text-4xl md:text-5xl">
            <VscCode />
          </span>

          <span className="ml-1">
            Diya<span className="text-blue-500"> Bora</span>
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex h-full items-center gap-8 lg:gap-10 cursor-pointer">
          <li className="hover:text-blue-500 hover:underline underline-offset-8">
            <a href="#home">Home</a>
          </li>

          <li className="hover:text-blue-500 hover:underline underline-offset-8">
            <a href="#about">About</a>
          </li>

          <li className="hover:text-blue-500 hover:underline underline-offset-8">
            <a href="#about">Skills</a>
          </li>

          <li className="hover:text-blue-500 hover:underline underline-offset-8">
            <a href="#projects">Projects</a>
          </li>

          <li className="hover:text-blue-500 hover:underline underline-offset-8">
            <a href="#education">Education</a>
          </li>

          <li className="hover:text-blue-500 hover:underline underline-offset-8">
            <a href="#contact">Contact</a>
          </li>

          <a
            href="diya_bora.pdf"
            download="diya-bora-resume.pdf"
            className="bg-blue-600 hover:bg-blue-700 py-2 px-5 rounded-md"
          >
            Download Resume
          </a>
        </ul>

        {/* Hamburger Button - Mobile */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-2xl text-blue-500"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <>
          {/* Background Overlay */}
          <div
            onClick={closeMenu}
            className="md:hidden fixed inset-0 top-15 bg-black/50 z-40"
          ></div>

          {/* Right Sidebar */}
          <div className="md:hidden fixed top-15 right-0 h-[calc(100vh-60px)] w-[55%] max-w-[320px] bg-[#0F172A] border border-[#1F2937] shadow-2xl  z-50">
            <ul className="flex flex-col items-center gap-7 py-10">
              <li
                className="hover:text-blue-500 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#home">Home</a>
              </li>

              <li
                className="hover:text-blue-500 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#about">About</a>
              </li>

              <li
                className="hover:text-blue-500 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#skills">Skills</a>
              </li>

              <li
                className="hover:text-blue-500 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#projects">Projects</a>
              </li>

              <li
                className="hover:text-blue-500 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#education">Education</a>
              </li>

              <li
                className="hover:text-blue-500 cursor-pointer"
                onClick={closeMenu}
              >
                <a href="#contact">Contact</a>
              </li>

              <a
                href="diya_bora.pdf"
                download="diya_bora_resume.pdf"
                className="bg-blue-600 hover:bg-blue-700 py-2 px-5 rounded-md"
              >
                Download Resume
              </a>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;

// function Navbar() {
//     const [isMobileOpen, setIsMobileOpen] = useState(false);
//     const closeMenu = () => {
//         setIsMobileOpen(false);
//     }
//     return (
//         <>
//             <nav className="bg-[#1b3a89] text-white h-15 sticky top-0 z-50 flex justify-around items-center">
//                 <h3>diya bora</h3>
//                 <ul className="hidden md:flex justify-around items-center h-15 gap-10 " >
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                     <li>Read more</li>
//                     <li>Education</li>
//                     <li>Projects</li>
//                 </ul>
//                 <button className="md:hidden " onClick={() => { setIsMobileOpen(!isMobileOpen) }}>
//                     {isMobileOpen ? <FaTimes /> : <FaBars />}
//                 </button>
//                 {isMobileOpen && (
//                     <>
//                         <div className="md:hidden fixed bg-black/50 inset-0 top-15 z-40" onClick={closeMenu}> </div>
//                         <ul className="md:hidden fixed top-15 right-0 bg-black/70 h-[calc(100vh-60px)]  text-white text-lg  z-60 hover:text-blue-800" >
//                             <li >Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                             <li>Read more</li>
//                             <li>Education</li>
//                             <li>Projects</li>
//                         </ul>
//                     </>

//                 )}
//             </nav>

//         </>
//     )
// }

// export default Navbar;
