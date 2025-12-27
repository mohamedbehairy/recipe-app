import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sm:hidden">
        {!isOpen && (
          <i
            onClick={() => setIsOpen(true)}
            className="fa-solid fa-bars fa-2x text-amber-500 cursor-pointer
             p-5 z-50"
          ></i>
        )}
      </div>

      <aside
        className={`
          bg-white px-5 w-[250px] h-screen fixed top-0 z-40
          transition-all duration-300
          ${isOpen ? "left-0" : "-left-full"}
          sm:left-0
        `}
      >
        <img className="w-full mb-6" src={Logo} alt="logoImg" />

        <ul className="text-left">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="bg-amber-500 w-full py-2 px-4 text-white rounded-xl
                         font-bold text-xl block shadow-orange-200 shadow-lg
                         transition-all duration-300 hover:scale-105 my-4"
            >
              <i className="fa-solid fa-utensils mr-2"></i>
              Meals
            </Link>
          </li>

          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 px-4 text-black border border-neutral-300
                         rounded-xl text-xl block transition-all duration-300
                         hover:scale-105 my-4"
            >
              <i className="fa-solid fa-carrot mr-2"></i>
              Ingredients
            </Link>
          </li>

          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-full py-2 px-4 text-black border border-neutral-300
                         rounded-xl text-xl block transition-all duration-300
                         hover:scale-105 my-4"
            >
              <i className="fa-solid fa-earth-americas mr-2"></i>
              Area
            </Link>
          </li>
        </ul>
      </aside>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
        ></div>
      )}
    </>
  );
}
