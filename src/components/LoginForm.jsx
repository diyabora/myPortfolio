function LoginForm() {
    let arr = ['apple', 'banana', 'grapes', 'orange'];


    return (
        <>
              <div id="education" className="education-section px-5 py-10  bg-[#1a243b] h-100">
                      <div className=" text-white flex flex-col justify-center px-8 font-sans">
                        <h2 className="text-2xl font-semibold tracking-wide relative inline-block ">
                          Education
                          <span className="absolute bottom-[-6px] left-0 w-10 h-[3px] bg-cyan-400"></span>
                        </h2>
                      </div>
                      <div className="absolute border-l-2  border-slate-700 ml-4 space-y-10 mt-4">
                        <div className="relative pl-8">
                          <span className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
                          <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 items-baseline">
                            <span className="text-sm font-semibold text-slate-400">
                              2023 - Present
                            </span>
                            <div>
                              <h3 className="text-lg font-bold text-slate-200">
                                Bachelor of Computer Applications (BCA)
                              </h3>
                              <p className="text-sm text-slate-400">XYZ University</p>
                            </div>
                          </div>
                        </div>
            
                        <div className="relative pl-8">
                          <span className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-2 border-slate-700"></span>
            
                          <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 items-baseline">
                            <span className="text-sm font-semibold text-slate-400">2022</span>
                            <div>
                              <h3 className="text-lg font-bold text-slate-200">
                                Higher Secondary
                              </h3>
                              <p className="text-sm text-slate-400">ABC School</p>
                            </div>
                          </div>
                        </div>
            
                        <div className="relative pl-8">
                          <span className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-2 border-slate-700"></span>
            
                          <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 items-baseline">
                            <span className="text-sm font-semibold text-slate-400">2020</span>
                            <div>
                              <h3 className="text-lg font-bold text-slate-200">High School</h3>
                              <p className="text-sm text-slate-400">XYZ School</p>
                            </div>
                          </div>
                        </div>
                      </div> 
                    </div> 
        </>
    )
}

export default LoginForm;
{/* <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="bg-white w-96 p-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Login Form
                    </h1>

                    <form>

                        {/* Email */}
{/* <div className="mb-4">
                            <label className="block mb-2 font-medium">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Password */}
{/* <div className="mb-6">
                            <label className="block mb-2 font-medium">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                            Login
                        </button> */}

{/* </form> */ }

{/* </div> */ }
{/* // </div> */ }
