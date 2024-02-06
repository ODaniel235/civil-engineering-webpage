import cartImage from "./assets/cart.svg";
import accountImage from "./assets/account.svg";
import searchImage from "./assets/search.svg";
export default function Header() {
  return (
    <header className="flex h-fit w-screen bg-[rgb(255,255,255)] z-10 top-0 p-3 items-center justify-between lg:justify-evenly shrink">
      <h1 className="text-2xl lg:text-3xl text-black font-['inter']  font-extrabold">
        SHOP.CO
      </h1>
      <nav className="hidden lg:flex">
        <ul className="flex gap-3">
          <li>
            <select>
              <option>Shop</option>
              <option>Sale</option>
            </select>
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </nav>

      <input
        type="search"
        className="bg-[rgb(240,240,240)]  w-64  px-6 py-1 rounded-xl outline-none hidden md:flex"
        placeholder="Search..."
      />
      <div className="toggle h-fit w-fit lg:hidden">
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </div>
      <div className="lg:p-2 hidden lg:flex justify-evenly gap-2">
        <button className=" lg:hidden">
          <img src={searchImage} alt="Search" />
        </button>
        <button>
          <img src={cartImage} alt="cart" />
        </button>
        <button>
          <img src={accountImage} alt="profile" />
        </button>
      </div>
    </header>
  );
}
