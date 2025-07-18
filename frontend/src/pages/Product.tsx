import { FaAngleUp, FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { Header } from "../components/Header"

export const Product = () => {
  return (
    <div>
      <Header />

      <main className="p-4 flex flex-col gap-6">


        <div className="flex flex-col gap-2">
          <img src="https://twofeet.fbitsstatic.net/img/p/tenis-everlast-range-3-unissex-152248/350332.jpg?w=1000&h=1000&v=no-value" />

          <h2 className="text-base font-bold">Everlast Shoes</h2>
          <ul className="flex flex-row items-center md:text-lg md:gap-1">
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
            <span className="ml-2 text-sm font-light">(48 reviews)</span>
          </ul>
          <h3 className="text-base font-semibold">$25.47 <span className="text-sm text-neutral-600 line-through">($47.33)</span></h3>

        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-base font-semibold">Size</h4>
          <ul className="grid grid-cols-4 gap-2">

            <li className="relative border border-black bg-gray-200 text-center rounded-md text-lg px-4 py-1 flex items-center justify-center overflow-hidden">
              <span className="z-10 text-black">32</span>
              <div className="absolute top-1/2 left-1/2 w-[160%] h-[1.5px] bg-black/30 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            </li>


            <li className="border border-neutral-500 text-center rounded-md text-lg px-4 py-1 flex items-center justify-center">34</li>

            <li className="border border-neutral-500 text-center rounded-md text-lg px-4 py-1 flex items-center justify-center">36</li>

            <li className="border border-neutral-500 text-center rounded-md text-lg px-4 py-1 flex items-center justify-center">38</li>

          </ul>
        </div>

        <button className="flex flex-row justify-center items-center border w-1/2 self-end gap-2 py-1 text-base rounded-md shadow-sm">
          <FaShoppingCart />
          <span>Add to Cart</span>
        </button>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <h4 className="text-base font-semibold">Description</h4>
            <button className="text-lg">
              <FaAngleUp />
            </button>
          </div>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eligendi dolore numquam, mollitia ipsam consectetur vel odio, temporibus atque dolorem et unde fuga repudiandae. Iure ratione fugit, necessitatibus voluptatem itaque minima, repudiandae fuga dolore, placeat deleniti at mollitia. Maxime neque ratione molestias dolor rem, velit minima cumque nihil earum ducimus!</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <h4 className="text-base font-semibold">Reviews</h4>
            <button className="text-lg">
              <FaAngleUp />
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <div
                  className="h-[45px] w-[45px] bg-center bg-cover rounded-full"
                  style={{ backgroundImage: "url('/rhuan.jpg')" }}
                ></div>
                <div>
                  <h5>Rhuan</h5>
                  <ul className="flex flex-row items-center md:text-lg md:gap-1">
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
                </div>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque saepe odio voluptas sequi quis, quidem repellat quia et dignissimos quibusdam quos minima cumque atque.</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col py-4 px-6 gap-4 bg-neutral-100 border border-gray-300 rounded-sm">
          <h4 className="text-base font-semibold">Explore More</h4>
          <ul className="grid grid-cols-2">
            <li>
              <img src="https://img.irroba.com.br/fit-in/1000x1000/filters:fill(fff):quality(80)/lojaqueb/catalog/ton-0304-pto-bcp.jpg" />
            </li>
            <li>
              <img src="https://img.irroba.com.br/fit-in/1000x1000/filters:fill(fff):quality(80)/lojaqueb/catalog/ton-0304-pto-bcp.jpg" />
            </li>
            <li>
              <img src="https://img.irroba.com.br/fit-in/1000x1000/filters:fill(fff):quality(80)/lojaqueb/catalog/ton-0304-pto-bcp.jpg" />
            </li>
            <li>
              <img src="https://img.irroba.com.br/fit-in/1000x1000/filters:fill(fff):quality(80)/lojaqueb/catalog/ton-0304-pto-bcp.jpg" />
            </li>
          </ul>
        </div>

      </main>

    </div>
  )
}
