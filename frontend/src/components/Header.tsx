import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa"
import { IoIosSearch } from "react-icons/io"
import { Link } from "react-router"

export const Header = () => {
    return (
        <header className="bg-neutral-800 flex flex-col justify-center px-4 py-2 gap-4 shadow-md md:py-4 lg:px-8">

            <div className="flex flex-row justify-between items-center text-xl md:text-2xl lg:text-3xl">

                <h1 className="font-cinzel text-blue-300">Lustra</h1>

                <nav className="flex flex-row gap-4 text-white">

                    <Link to={"/"}>
                        <FaHome />
                    </Link>

                    <Link to={"/cart"}>
                        <FaShoppingCart />
                    </Link>

                    <Link to={"/user"}>
                        <FaUser />
                    </Link>

                </nav>

            </div>

            <form className="flex flex-row justify-center items-center gap-2 bg-white w-fit self-center px-2 py-1 rounded-md md:py-2 md:px-4">
                <input type="text" className="bg-white w-[200px] outline-0 text-sm md:text-base md:w-[320px]" />

                <button className="text-base md:text-lg lg:text-xl">
                    <IoIosSearch />
                </button>
            </form>

        </header>
    )
}
