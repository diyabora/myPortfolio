function LoginForm() {
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="bg-white w-96 p-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Login Form
                    </h1>

                    <form>

                        {/* Email */}
                        <div className="mb-4">
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
                        <div className="mb-6">
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
                        </button>

                    </form>

                </div>
            </div>
        </>
    )
}

export default LoginForm;