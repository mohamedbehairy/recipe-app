import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white w-full py-5 z-50">
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-10" src={Logo} alt="Recipe" />
          <h2 className="text-2xl ml-5 font-black">Recipe</h2>
        </div>
        <h2 className="text-2xl font-black text-blue-800">Route</h2>
      </div>

      <hr className="border-neutral-300/80 my-5" />
      <p className="text-center text-neutral-600">
        @{new Date().getFullYear()} Mohamed Behairy. All Rights Reserved.
      </p>
    </footer>
  );
}
