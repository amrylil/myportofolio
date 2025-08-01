import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { RiMenu4Line, RiProfileFill } from "react-icons/ri";

const Navbar = ({
  onClickHome,
  onClickAbout,
  onClickPortofolio,
  onClickContact,
}) => {
  const [btnMenu, setBtnMenu] = useState(true);
  const handleBtnMenu = () => {
    setBtnMenu(!btnMenu);
  };

  
  return (
    <div className="w-full flex justify-center">
      <Analytics />
      <nav className="flex w-full md:px-28 px-6  py-5 justify-between fixed z-10 bg-opacity-80 bg-gray-900 backdrop-blur-sm ">
        <div className="text-gray-50 text-xl font-bold">
          Lil
          <span
            className="text-green-500 "
            style={{ textShadow: "0px 0px 10px 	#22c55e" }}
          >
            Amry();
          </span>
        </div>
        <div
          onClick={handleBtnMenu}
          className="text-green-500 md:hidden font-bold shadow-sm hover:scale-105 transition-all"
        >
          <RiMenu4Line size={24} />
        </div>
        <div
          className={`w-full px-8 absolute end-0 top-14  ${
            btnMenu && "hidden"
          }`}
        >
          <ul
            className={`bg-opacity-90 bg-gray-900 backdrop-blur-sm  w-full h-max justify-center flex flex-col rounded-md border border-green-500 p-4`}
          >
            <li
              onClick={onClickHome}
              className="flex menu items-center hover:bg-gray-950 text-slate-50 p-3 rounded-md gap-2"
            >
              <div>
                <AiFillHome />
              </div>
              <div>Home</div>
            </li>
            <li
              onClick={onClickAbout}
              className="flex menu items-center hover:bg-gray-950 text-slate-50 p-3 rounded-md gap-2 "
            >
              <div>
                <RiProfileFill />
              </div>
              <div>About</div>
            </li>
            <li
              onClick={onClickPortofolio}
              className="flex menu items-center hover:bg-gray-950 text-slate-50 p-3 rounded-md gap-2 "
            >
              <div>
                <AiFillProject />
              </div>
              <div>Portofolio</div>
            </li>
            <li
              onClick={onClickContact}
              className="flex menu items-center hover:bg-gray-950 text-slate-50 p-3 rounded-md gap-2 "
            >
              <div>
                <MdContacts />
              </div>
              <div>Contact</div>
            </li>
          </ul>
        </div>
        <div className="md:flex gap-4 font-semibold text-gray-50 hidden ">
          <div
            onClick={onClickHome}
            className="menu hover:underline"
            style={{ textShadow: "0px 0px 10px 	#22c55e" }}
          >
            Home
          </div>
          <div
            onClick={onClickAbout}
            className="menu hover:underline"
            style={{ textShadow: "0px 0px 10px 	#22c55e" }}
          >
            About
          </div>
          <div
            onClick={onClickPortofolio}
            className="menu hover:underline"
            style={{ textShadow: "0px 0px 10px 	#22c55e" }}
          >
            Portofolio
          </div>
          <div
            onClick={onClickContact}
            className="menu hover:underline"
            style={{ textShadow: "0px 0px 10px 	#22c55e" }}
          >
            Contact
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
