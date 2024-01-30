import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import profile from "../../assets/images/profile.jpg";
import { logOutUser, fetchLoginUser } from "../../services/postApi";

const Header = ({ isLoggedIn, isDashboard, isUserPost }) => {
  const [userName, setUserName] = useState("USER");
  const [isLogedIn, setIsLogedIn] = useState(isLoggedIn);
  const handleLogout = () => {
    toast.success("Logged out!")
    logOutUser();
    setIsLogedIn(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await fetchLoginUser();
      if (user) {
        setUserName(user.userName);
      }
    };
    if (isLoggedIn) {
      fetchUserData();
    }
  }, [isLoggedIn]);

  return (
    <>
      <header className="rounded-[20px] mx-3 mt-3 bg-indigo-100">
        <ul>
          {isLogedIn ? (
            <div className="flex auto-cols-max pr-5 justify-end p-5 content-center">
              {isDashboard ? (
                <li className="justify-self-center mr-3">
                  <Link
                    to="/mypost"
                    className="p-3 rounded-[10px] bg-gradient-to-r from-indigo-400 to-indigo-300 hover:bg-gradient-to-bl"
                  >
                    My Post
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {isUserPost ? (
                <li className="justify-self-center mr-3">
                  <Link
                    to="/dashboard"
                    className="p-3 rounded-[10px] bg-gradient-to-r from-indigo-400 to-indigo-300 hover:bg-gradient-to-bl"
                  >
                    Dashboard
                  </Link>
                </li>
              ) : (
                <></>
              )}

              <li className="justify-self-center mr-3">
                <Link
                  onClick={handleLogout}
                  to="/login"
                  className="p-3 rounded-[10px] bg-gradient-to-r from-indigo-400 to-indigo-300 hover:bg-gradient-to-bl"
                >
                  Logout
                </Link>
              </li>
              <li className="justify-self-center2">
                <a href="/profile" className="flex">
                  <img
                    src={profile}
                    alt="USER"
                    className="mr-2 rounded-[50%] h-7 w-7"
                  ></img>
                  {userName}
                </a>
              </li>
            </div>
          ) : (
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
            </div>
          )}
        </ul>
      </header>
      <Toaster />
    </>
  );
};

export default Header;
