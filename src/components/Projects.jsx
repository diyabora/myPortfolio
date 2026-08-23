function Projects() {
    return (
        <>
            <div className="myprojects-section  bg-[#0B1120] text-white h-fit px-12 py-10 flex flex-col">
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

        </>
    )
}

export default Projects;