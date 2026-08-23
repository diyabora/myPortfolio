import { ImCompass } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import libraryPicture from "../assets/librarySS.png";
import travelXPicture from "../assets/travelXSS.png";
import bootsrapSS from "../assets/bootstrapSS.png";
import LoginForm from "./LoginForm";
import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { VscCode } from "react-icons/vsc";
import { IoLocation } from "react-icons/io5";
import { TbDatabase } from "react-icons/tb";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";
import { Link } from "react-router-dom";


function Dashboard() {
  let skills = [
    { name: "React.js", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "Express.js", percentage: 80 },
    { name: "MongoDB", percentage: 85 },
    { name: "Javascript", percentage: 90 },
    { name: "HTML/CSS", percentage: 95 }
  ];

  return (
    <>
      <div className="h-[calc(100vh-60px)] flex items-center justify-between px-12 bg-linear-to-r from-[#0B1120] to-[#1e3b8a] text-white">
        {/* <h3 className="text-5xl text-white opacity-10">this is a dashboard</h3> */}
        <div className="about-section">
          <h3 className="text-2xl text-blue-400" data-aos="fade-up">Hello, I'm</h3>
          <h1 className="text-6xl font-semibold " data-aos="fade-up" data-aos-delay="100">Diya <span className="text-blue-600">Bora</span></h1>
          <h3 className="text-4xl mt-2.5" data-aos="fade-up" data-aos-delay="200"> M<span className="text-orange-200">E</span><span className="text-green-300">R</span>N Stack Developer</h3>
          <p className="text-lg mt-4" data-aos="fade-up" data-aos-delay="300">I build modern, responsive, and scalable web
            <br /> applications using MongoDB, Express.js,<br /> React, and Node.js.
          </p>
          <div className="btn flex gap-6 items-center mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-6 rounded-md cursor-pointer" data-aos="fade-right">
              Hire me
            </button>
            <Link to="https://wa.me/7455921052" target="_blank ">
              <button className="py-2 flex px-6 border rounded-md hover:bg-blue-600 hover:border-blue-500 cursor-pointer" data-aos="fade-left" data-aos-delay="400">
                Contact Me <span className="items-center flex ml-1"><ImCompass /></span>
              </button>
            </Link>
          </div>
          <p className="text-lg mt-4" data-aos="fade-up" data-aos-delay="500">Connect with me</p>
          <div className="social-icons flex gap-6 mt-2 text-xl">
            <span className="border border-white/10 bg-white/5 p-2 rounded-lg cursor-pointer " data-aos="fade-up" data-aos-delay="600"> <Link to="https://github.com/diyabora" target="_blank "><FaGithub /></Link></span>
            <span className="border border-white/10 bg-white/5 p-2 rounded-lg cursor-pointer " data-aos="fade-up" data-aos-delay="700"> <Link to="https://www.linkedin.com/in/diya-bora" target="_blank "><FaLinkedinIn /></Link></span>
            <span className="border border-white/10 bg-white/5 p-2 rounded-lg cursor-pointer " data-aos="fade-up" data-aos-delay="800"><Link to="https://www.instagram.com/mehandiart_diya" target="_blank "><CiInstagram /></Link></span>
          </div>
        </div>
        <div className="img-section">
          <img src="path/to/diya-bora-image.jpg" alt="Diya Bora" className=" rounded-full border-4 border-blue-600" />
        </div>
      </div>
      <div className="about-skills-todo grid grid-cols-1 lg:grid-cols-3 text-white bg-[#1a243b] px-12 py-10" id="about">
        <div className="about-section border-e border-white/10 px-10 gap-4 flex flex-col">
          <h2 className="text-2xl font-semibold ">About Me</h2>
          <p className="">
            I am a passionate MERN Stack developer who loves turning ideas into real-world applications. I enjoy solving problems, writing clean code and learning new technologies.
          </p>
          <p className="text-md flex items-center gap-2"><span className="text-2xl text-blue-600"><IoPersonSharp /></span>Name: Diya Bora</p>
          <p className="text-md flex items-center gap-2"><span className="text-2xl text-blue-600"> <HiLocationMarker /></span>location: Haldwani, India</p>
          <p className="text-md flex items-center gap-2"><span className="text-2xl text-blue-600" ><FaGraduationCap /></span>Education: BCA</p>
          <p className="text-md flex items-center gap-2"><span className="text-2xl text-blue-600" > <SiFreelancer /></span>Freelance: Available</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md w-fit cursor-pointer">More About Me</button>
        </div>
        <div className="skills-section border-e border-white/10 px-10  ">
          <h3 className="text-2xl font-semibold ">My Skills </h3>
          {
            skills.map((items, index) => (
              <div className="skills-list " key={index}>
                <div className="flex justify-between mt-4">
                  <p>{items.name}</p>
                  <p>{items.percentage}%</p>
                </div>
                <div className="h-2 bg-white/10 rounded mt-1">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${items.percentage}%` }}></div>
                </div>
              </div>
            ))
          }

        </div>
        <div className="to-do-section px-10 gap-4 flex flex-col">
          <h3 className="text-2xl font-semibold ">What I Do</h3>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="web-card  rounded-xl border border-white/10 bg-[#111827]/30  text-center flex flex-col gap-2 py-3  " data-aos="fade-right" data-aos-delay="100">
              <div className="text-blue-500 flex justify-center text-[40px]"><RiComputerLine /></div>
              <p className="">Web Development</p>
            </div>
            <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  py-3 text-center flex flex-col gap-2 " data-aos="fade-left" data-aos-delay="100">
              <div className="text-blue-500 flex justify-center text-[40px]"><MdOutlineStorage /></div>
              <p >Backend Development</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  text-center flex flex-col gap-2 py-3  " data-aos="fade-right" data-aos-delay="300">
              <div className="text-blue-500 flex justify-center text-[40px]"><TbDatabase /></div>
              <p className="">Database Design</p>
            </div>
            <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  py-3 text-center flex flex-col gap-2 " data-aos="fade-left" data-aos-delay="400">
              <div className="text-blue-500 flex justify-center text-[40px]"><HiMiniCodeBracket /></div>
              <p >API Development</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  text-center flex flex-col gap-2 py-3  " data-aos="fade-right" data-aos-delay="500">
              <div className="text-blue-500 flex justify-center text-[40px]"><MdOutlinePhoneIphone /></div>
              <p className="">Responsive Design</p>
            </div>
            <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  py-3 text-center flex flex-col gap-2 " data-aos="fade-left" data-aos-delay="600">
              <div className="text-blue-500 flex justify-center text-[40px]"><MdOutlineSecurity /></div>
              <p >Authentication</p>
            </div>
          </div>
        </div>
      </div>
      <div className="myprojects-section  bg-[#0B1120] text-white  px-12 py-10 flex flex-col">
        <h2 className="text-3xl font-semibold text-center">My Projects</h2>
        {/* <div className="project-container "> */}
        <div className="grid grid-cols-4 gap-4 mt-10">
          <div className="bg-white/10  border-black rounded-xl  flex flex-col gap-2 shadow-2xl px-6 py-4" data-aos="fade-up">
            <img src={libraryPicture} alt="" className="rounded-xl " />
            <h3 className="text-xl font-semibold ">Library Management System</h3>
            <p className="text-[17px] text-white/90 leading-4.5">A complete library management system with authentication, CRUD operations and dashboard </p>
            <div className="project-technologies flex gap-2.5 text-white/90 mt-3">
              <div className=" border border-blue-900 rounded-xl px-3 py-1 ">React</div>
              <div className="border border-blue-900 rounded-xl px-3 py-1 ">Node.js</div>
              <div className="border border-blue-900 rounded-xl px-3 py-1 ">MongoDB</div>
            </div>
            <div className="flex justify-between mt-1 ">
              <p>Live Demo</p>
              <p>GitHub</p>
            </div>
          </div>
          <div className="bg-white/10  border-black rounded-xl  flex flex-col gap-2 shadow-2xl px-6 py-4" data-aos="fade-up" data-aos-delay="100">
            <img src={bootsrapSS} alt="" className="rounded-xl " />
            <h3 className="text-xl font-semibold ">Bootstrap Project</h3>
            <p className="text-[17px] text-white/90">A responsive website built with Bootstrap and React </p>
            <div className="project-technologies flex gap-2.5 text-white/90 mt-3">
              <div className=" border border-blue-900 rounded-xl px-3 py-1 ">React</div>
              <div className="border border-blue-900 rounded-xl px-3 py-1 ">Bootstrap</div>
              <div className="border border-blue-900 rounded-xl px-3 py-1 ">MongoDB</div>
            </div>
            <div className="flex justify-between mt-1 ">
              <p>Live Demo</p>
              <p>GitHub</p>
            </div>
          </div>
          <div className="bg-white/10  border-black rounded-xl  flex flex-col gap-2 shadow-2xl px-6 py-4" data-aos="fade-up" data-aos-delay="200" >
            <img src={travelXPicture} alt="" className="rounded-xl " />
            <h3 className="text-xl font-semibold ">TravelX</h3>
            <p className="text-[17px] text-white/90">A travel booking platform with real-time availability and pricing </p>
            <div className="project-technologies flex gap-2.5 text-white/90 mt-3">
              <div className=" border border-blue-900 rounded-xl px-3 py-1 ">React</div>
              <div className="border border-blue-900 rounded-xl px-3 py-1 ">Node.js</div>
              <div className="border border-blue-900 rounded-xl px-3 py-1 ">MongoDB</div>
            </div>
            <div className="flex justify-between mt-1 ">
              <p>Live Demo</p>
              <p>GitHub</p>
            </div>
          </div>
          <div className="bg-white/10  border-black rounded-xl  flex flex-col gap-2 shadow-2xl px-6 py-4" data-aos="fade-up" data-aos-delay="300">
            <img src={libraryPicture} alt="" className="rounded-xl " />
            <h3 className="text-xl font-semibold ">Library Management System</h3>
            <p className="text-[17px] text-white/90 leading-4.5">A complete library management system with authentication, CRUD operations and dashboard </p>
            <div className="project-technologies flex gap-2.5 text-white/90 mt-3">
              <div className=" border border-blue-900 rounded-xl px-3 py-1 ">React</div>
              <div className="border border-blue-900 rounded-xl px-3 py-1 ">Node.js</div>
              <div className="border border-blue-900 rounded-xl px-3 py-1 ">MongoDB</div>
            </div>
            <div className="flex justify-between mt-1 ">
              <p>Live Demo</p>
              <p>GitHub</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-9">
          <button className="border py-3 px-15 rounded-lg w-fit hover:bg-blue-500 hover:border-blue-500 cursor-pointer">View All projects</button>
        </div>
      </div>
      <div className="h-100 bg-[#1a243b] grid lg:grid-cols-2 text-white px-12 ">
        <div className="experience-section border-e border-r-white/10 px-5 ">
          <h3 className="text-3xl font-semibold py-10" >Experiece</h3>
          <p className="text-lg font-semibold">Fresher</p>
          <p className="">Currently I'm focusing on building<br /> projects,improving my skills,
            <br /> and learning new technologies.</p>
        </div>
        <div className="education-section px-5 py-10">
          <h3 className="text-3xl font-semibold">Education</h3>
        </div>
      </div>
      <div className="getIntouch h-fit-content grid lg:grid-cols-3  text-white bg-[#0B1120] px-16 py-14 ">
        <div className="details  flex flex-col gap-3">
          <h3 className="text-3xl font-semibold">
            Get In Touch
          </h3>
          <p className="text-lg">Have a project in mind or want to work together?<br />Feel free to reach out to me.</p>
          <div className="flex items-center gap-2"><span className="text-blue-600 text-lg"><MdMail /></span><p>divyanshibora005@gmail.com</p></div>
          <div className="flex items-center gap-2"><span className="text-blue-600 text-lg"><IoCall /></span><p>+91 8869016485</p></div>
          <div className="flex items-center gap-2"><span className="text-blue-600 text-lg"><IoLocation /></span><p>Haldwani, India</p></div>
        </div>
        <div className="detail-form col-span-2">
          <form action="" className="w-full p-3">
            <div className="flex gap-4 mb-3">
              <input type="text" className="bg-white/10 px-4 py-2 focus:ring-1 focus:ring-blue-500 w-full rounded-lg outline-none" placeholder="Your Name" />
              <input type="text" className="bg-white/10 px-4 py-2 focus:ring-1 focus:ring-blue-500 w-full rounded-lg outline-none" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <input type="text" className="bg-white/10 w-full px-4 py-2 focus:ring-1 focus:ring-blue-500 outline-none  rounded-lg " placeholder="Subject" />
            </div>
            <div className="mb-3">
              <textarea placeholder="Your Message" rows={3} className="bg-white/10 w-full px-4 py-2 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none"></textarea>
            </div>
            <div>
              <button className="bg-blue-600 px-4 py-2 rounded-lg w-50 cursor-pointer hover:bg-blue-700">Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3  text-white bg-[#0B1120] px-16  h-50">
        <div className="">
          <h3 className="text-xl font-semibold flex items-center mb-2"><span className="text-blue-500 text-5xl"><VscCode /></span>Diya<span className="text-blue-500"> Bora</span></h3>
          <div className="text-white/90">
            <p>MERN Stack Developer</p>
            <p>Building the web, one line of code at a time.</p>
          </div>
        </div>
        <div className=" ">
          <h3 className="text-xl font-semibold mb-2">
            Quick Links</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="text-white/90">
              <p>Home</p>
              <p>About</p>
              <p>Skills</p>
              <p>Projects</p>
            </div>
            <div className="text-white/90">
              <p>Education</p>
              <p>Contact</p>
              <p>Resume</p>
            </div>
          </div>

        </div>
        <div className="">
          <h3 className="text-xl font-semibold">Connect</h3>
          <div className="social-icons flex gap-6 mt-4 text-xl">
            <span className="border border-white/10 bg-white/5 p-2 rounded-lg cursor-pointer " data-aos="fade-up" data-aos-delay="600"> <Link to="https://github.com/diyabora" target="_blank "><FaGithub /></Link></span>
            <span className="border border-white/10 bg-white/5 p-2 rounded-lg cursor-pointer " data-aos="fade-up" data-aos-delay="700"> <Link to="https://www.linkedin.com/in/diya-bora" target="_blank "><FaLinkedinIn /></Link></span>
            <span className="border border-white/10 bg-white/5 p-2 rounded-lg cursor-pointer " data-aos="fade-up" data-aos-delay="800"><Link to="https://www.instagram.com/*/98" target="_blank "><CiInstagram /></Link></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;