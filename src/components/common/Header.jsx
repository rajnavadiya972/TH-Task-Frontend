import React from "react";
import logo from "../common/ButtonComp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="rounded-[20px] mx-3 mt-3 bg-indigo-100">
        <ul>
          <div className="flex auto-cols-max pr-5 justify-end p-5 content-center">
            <li className="justify-self-center mr-3">
              <Link
                to="/signup"
                className="p-3 rounded-[10px] bg-gradient-to-r from-indigo-400 to-indigo-300 hover:bg-gradient-to-bl"
              >
                SignUp
              </Link>
            </li>
            <li className="justify-self-center mr-6 ml-3">
              <Link
                to="/login"
                className="p-3 rounded-[10px] bg-gradient-to-r from-indigo-400 to-indigo-300 hover:bg-gradient-to-bl"
              >
                LogIn
              </Link>
            </li>
            <li className="justify-self-center2">
              <a href="/profile" className="flex">
                <img
                  src={logo}
                  alt="USER"
                  className="mr-2 rounded-[50%] h-7 w-7"
                ></img>
                RAJ NAVADIYA
              </a>
            </li>
          </div>
        </ul>
      </header>
    </>
  );
};

export default Header;
