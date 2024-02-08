/* import { useState } from "react";
import "./styles/hamburger.css";
export default function Header() {
  const [toggle, setToggle] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleHeader = () => {
    setToggle(!toggle);
  };
  return (
    <header className="flex h-fit w-screen bg-[rgb(255,255,255)] z-10 top-0 p-3 justify-between lg:justify-evenly lg:items-center shrink">
      <h1 className="text-3xl lg:text-3xl text-black font-['inter']  font-extrabold">
        SHOP.CO
      </h1>
      <nav className={toggle ? "hidden lg:flex" : "flex flex-col mt-12 mr-10"}>
        <ul
          className={"flex gap-3 " + (toggle ? null : "flex-col text-center")}
        >
          <li className="text-xl">
            <select className=" bg-inherit border-none">
              <option>Shop</option>
              <option>Sale</option>
            </select>
          </li>
          <li className="text-xl">On Sale</li>
          <li className="text-xl">New Arrivals</li>
          <li className="text-xl">Brands</li>
        </ul>
      </nav>

      <div className="p-3 px-=8 bg-[rgb(240,240,240)] w-64 py-1 rounded-xl outline-none hidden md:flex gap-3">
        <img src="./search.svg"  />
        <input
          type="search"
          className="bg-[rgb(240,240,240)]  outline-none"
          placeholder="Search..."
        />
      </div>

      <div
        className={`hamburger-container inline lg:hidden ${
          isOpen ? "open" : ""
        }`}
        onClick={() => {
          toggleMenu();
          toggleHeader();
        }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="lg:p-2 hidden lg:flex justify-evenly gap-2">
        <button className=" lg:hidden">
          <img src="./search.svg" alt="Search" />
        </button>
        <button>
          <img src="./cart.svg" alt="cart" />
        </button>
        <button>
          <img src="./account.svg" alt="profile" />
        </button>
      </div>
    </header>
  );
}
 */