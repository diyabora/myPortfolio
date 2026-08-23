import { IoPersonSharp } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri"; 

function About() {
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
            <div className="grid grid-cols-1 lg:grid-cols-3 text-white bg-[#1a243b] px-12 py-10 ">
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
                        <div className="web-card  rounded-xl border border-white/10 bg-[#111827]/30  text-center py-3  " data-aos="fade-right" data-aos-delay="100">
                            <div className="text-blue-500 flex justify-center text-5xl"><RiComputerLine /></div>
                            <p className="">Web Development</p>
                        </div>
                        <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  py-3 text-center " data-aos="fade-left" data-aos-delay="100">
                            <div className="text-blue-500 flex justify-center text-5xl"><RiComputerLine /></div>
                            <p >Backend Development</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  text-center py-3  " data-aos="fade-right" data-aos-delay="300">
                            <div className="text-blue-500 flex justify-center text-5xl"><RiComputerLine /></div>
                            <p className="">Database Design</p>
                        </div>
                        <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  py-3 text-center " data-aos="fade-left" data-aos-delay="400">
                            <div className="text-blue-500 flex justify-center text-5xl"><RiComputerLine /></div>
                            <p >API Development</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  text-center py-3  " data-aos="fade-right" data-aos-delay="500">
                            <div className="text-blue-500 flex justify-center text-5xl"><RiComputerLine /></div>
                            <p className="">Responsive Design</p>
                        </div>
                        <div className="web-card  rounded-xl shadow-lg border border-white/10 bg-[#111827]/30  py-3 text-center " data-aos="fade-left" data-aos-delay="600">
                            <div className="text-blue-500 flex justify-center text-5xl"><RiComputerLine /></div>
                            <p >Authentication</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;