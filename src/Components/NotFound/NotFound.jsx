import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <h2 className="font-headings text-5xl uppercase bg-linear-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent">
        404 Error
      </h2>
      <Link
        to="/"
        className="bg-linear-to-r from-amber-500 to-orange-700 text-white px-5 py-3 rounded-xl"
      >
        Back to Home
      </Link>
    </div>
  );
}
