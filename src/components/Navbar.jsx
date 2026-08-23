import { VscCode } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="navbar bg-[#0B1120] text-white h-15 flex justify-between items-center px-10 sticky top-0 z-50">
                <h1 className="text-xl font-semibold flex items-center"><span className="text-blue-500 text-5xl"><VscCode /></span>Diya<span className="text-blue-500"> Bora</span></h1>
                <ul className="flex  h-15 justify-center items-center gap-10 cursor-pointer">
                    <li className="hover:underline  hover:text-blue-500 underline-offset-21">Home</li>
                    <li className="hover:underline  hover:text-blue-500 underline-offset-21 focus:underline"><Link to="/about"> About</Link> </li>
                    <Link to="/skills"> <li className="hover:underline  hover:text-blue-500 underline-offset-21">Skills</li></Link>
                    <Link to="/projects"> <li className="hover:underline  hover:text-blue-500 underline-offset-21">Projects</li></Link>
                    <Link to="/education"> <li className="hover:underline  hover:text-blue-500 underline-offset-21">Education</li></Link>
                    <Link to="/contact"> <li className="hover:underline  hover:text-blue-500 underline-offset-21">Contact</li></Link>
                    <button className="bg-blue-600 hover:bg-blue-700 py-1 px-3 rounded-md  mx-15 cursor-pointer">Download Resume</button>
                </ul>
            </div >
        </>
    )
}

export default Navbar;