import { FaFilter, FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <Header />

      <main className="flex flex-col p-4 gap-4">

        <h2 className="text-lg text-blue-500 md:text-xl">All (89)</h2>

        <div>

          <button className="flex flex-row gap-1 items-center justify-center text-base md:text-lg md:gap-2">
            <FaFilter />
            <span>Filter</span>
          </button>

        </div>

        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
          
          <li className="border p-2 flex flex-col gap-1 rounded-sm shadow-sm md:gap-2 md:py-4">
            <button className="text-lg self-end md:text-xl">
              <FaShoppingCart />
            </button>
            <img src="https://twofeet.fbitsstatic.net/img/p/tenis-everlast-range-3-unissex-152248/350332.jpg?w=1000&h=1000&v=no-value" />
            <div>
              <h3 className="text-base font-medium md:text-lg">Everlast Shoes</h3>
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
    </>
  )
}

export default App
