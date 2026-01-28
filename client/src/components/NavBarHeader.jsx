import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

// bg-gray-800

const NavBarHeader = () => {
  return (
    <div className="main">
      <div className="navbar-main bg-gray-800 text-white py-3 px-4 ">
        <div className="navbar-component-1 flex gap-4 justify-between ">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <Link to={"/"}>
                <span className="rounded-lg px-2 py-2 bg-gradient-to-r from-blue-400  to-purple-400">
                  MERN
                </span>
              </Link>
              Stack
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/projects"}>Project</Link>
          </div>
          <div className="flex gap-2 items-center">
            <form>
              <div className="relative hidden lg:inline">
                <input
                  type="text"
                  placeholder="Serach..."
                  className=" px-2 py-2 rounded-lg bg-gray-600"
                />
                <AiOutlineSearch className=" btn text-3xl absolute -top-0.5 right-0  text-gray-400 px-1"></AiOutlineSearch>
              </div>
            </form>
            <button className="lg:hidden btn px-4 py-3 border border-gray-500 rounded-lg">
              <AiOutlineSearch></AiOutlineSearch>
            </button>
            <Link
              to={"/sign-in"}
              className="px-3 py-2 border-2 border-blue-400 rounded-xl hover:bg-gradient-to-r from-blue-400 to-pink-400 transition-500 ease-in-out"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarHeader;
