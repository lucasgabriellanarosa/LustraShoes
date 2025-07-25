import { Link } from "react-router"

export const Register = () => {
    return (
        <div className="flex flex-col min-h-dvh items-center justify-center md:justify-start md:flex-row-reverse">

            <header className="bg-linear-to-b from-neutral-800 to-neutral-700 flex flex-col items-center justify-center absolute top-0 w-full text-blue-500 gap-6 py-4 rounded-b-[80px] sm:py-8 sm:rounded-b-[160px] md:relative md:h-dvh md:rounded-br-none md:w-1/2 md:rounded-l-[320px]">
                <h2 className="text-xl sm:text-2xl">Welcome Back!</h2>
                <p className="text-sm sm:text-base">Already have an account?</p>

                <Link to="/login">
                    <button className="text-base border py-1 px-8 rounded-sm sm:text-lg cursor-pointer hover:bg-blue-300 hover:text-blue-900">Login</button>
                </Link>
            </header>

            <main className="flex flex-col justify-center items-center gap-6 sm:gap-12 md:w-1/2">
                <h1 className="text-blue-500 text-2xl uppercase sm:text-3xl">Register</h1>

                <form className="flex flex-col gap-6 sm:gap-12">
                    <div className="flex flex-col gap-1 text-sm sm:text-base">
                        <label>Username</label>
                        <input type="text" className="border border-neutral-500 rounded-sm py-0.5 px-1" />
                    </div>

                    <div className="flex flex-col gap-1 text-sm sm:text-base">
                        <label>Password</label>
                        <input type="text" className="border border-neutral-500 rounded-sm py-0.5 px-1" />
                    </div>

                    <div className="flex flex-col gap-1 text-sm sm:text-base">
                        <label>Confirm Password</label>
                        <input type="text" className="border border-neutral-500 rounded-sm py-0.5 px-1" />
                    </div>


                    <button className="bg-neutral-800 text-blue-300 w-fit self-center py-1 px-8 rounded-md shadow-sm sm:text-lg sm:py-2 sm:px-12 cursor-pointer hover:bg-neutral-700 hover:text-blue-500">Register</button>
                </form>

            </main>

        </div>)
}
