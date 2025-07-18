import { FaFilter, FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { Header } from "./components/Header"
import { Link } from "react-router"

function App() {

  return (
    <div className="flex flex-col">
      <Header />

      <main className="flex flex-col p-4 gap-4 lg:max-w-[1200px] lg:self-center lg:flex-row lg:gap-8">

        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-lg text-blue-500 md:text-xl">All (89)</h2>

          <button className="flex flex-row gap-1 items-center justify-center text-base md:text-lg md:gap-2 lg:hidden">
            <FaFilter />
            <span>Filter</span>
          </button>

          <div className="hidden lg:flex flex-col gap-2">

            <div className="flex flex-col gap-1">
              <label>Order by</label>
              <select className="border border-gray-400 font-light rounded-sm w-[150px] px-2 py-1 text-sm">
                <option value="price">Price</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label>Categories</label>

              <ul className="flex flex-col gap-0.5">

                <li className="flex flex-row gap-1">
                  <input type="checkbox" />
                  <label>Man</label>
                </li>

                <li className="flex flex-row gap-1">
                  <input type="checkbox" />
                  <label>Woman</label>
                </li>

              </ul>

            </div>

          </div>

        </div>

        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4">

          <li className="border border-gray-400 p-2 flex flex-col gap-1 rounded-sm shadow-sm md:gap-2 md:py-4">
            <button className="text-lg self-end md:text-xl">
              <FaShoppingCart />
            </button>
            <img src="https://twofeet.fbitsstatic.net/img/p/tenis-everlast-range-3-unissex-152248/350332.jpg?w=1000&h=1000&v=no-value" />
            <div>
              <Link to={"/product/0"}>
                <h3 className="text-base font-medium md:text-lg">Everlast Shoes</h3>
              </Link>
              <h4 className="text-sm font-medium md:text-base">$25.47 <span className="line-through text-gray-500">($47.33)</span></h4>
            </div>

            <ul className="flex flex-row md:text-lg md:gap-1">
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStarHalfAlt />
              </li>
              <li>
                <FaRegStar />
              </li>
            </ul>

          </li>

        </ul>

      </main>
    </div>
  )
}

export default App
