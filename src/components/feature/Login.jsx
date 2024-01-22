import React, { useState } from "react";
import Input from "../common/Input";
import ButtonComponent from "../common/ButtonComp";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../services/authService";
import Alert from "@mui/material/Alert";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isAlertShow, setIsAlertShow] = useState(false);
  const [userStatus, setUserStatus] = useState({
    status: "",
    message: "",
  });

  const handleSetIsAlertShow = (status) => {
    setIsAlertShow(() => {
      return status;
    });
  };

  const handleSetUserStatus = (status, message) => {
    setUserStatus(() => {
      return {
        status: status,
        message: message,
      };
    });
  };

  const isNull = () => {
    const { email, password } = data;
    if (email === "" || password === "") {
      return true;
    }
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isNull()) {
      handleSetIsAlertShow(true);
      setTimeout(() => {
        handleSetIsAlertShow(false);
      }, 1000);
      const res = await logIn(data);
      if (!res.error) {
        const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
        const expireToken = {
          expires: inOneHour,
        };
        handleSetUserStatus("success", res.message);
        Cookies.set("token", res.token, expireToken);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        handleSetUserStatus("error", res.error);
      }
    } else {
      handleSetIsAlertShow(true);
      setTimeout(() => {
        handleSetIsAlertShow(false);
      }, 3000);
      handleSetUserStatus("error", "Please fill all the values!");
    }
  };

  const inputs = [
    {
      name: "email",
      type: "email",
      label: "email",
      placeholder: "example@gmail.com",
      value: data.email,
    },
    {
      name: "password",
      type: "password",
      label: "password",
      placeholder: "Password",
      value: data.password,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-blue-100">
        <form
          method="POST"
          action="/user/signin"
          className="p-5 rounded-lg bg-blue-50"
        >
          {isAlertShow && (
            <Alert
              variant="filled"
              className="mb-2 w-[20rem]"
              severity={userStatus.status}
            >
              {userStatus.message}
            </Alert>
          )}
          <p className="justify-center flex text-lg text-blue-600 font-bold">
            LogIn
          </p>
          <div className="flex flex-col justify-around min-h-[35vh] w-[20rem]">
            {inputs.map((input, index) => {
              const { type, name, label, placeholder, value } = input;
              return (
                <div key={index} className="flex flex-col">
                  <Input
                    type={type}
                    onChange={handleChange}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    value={value}
                  />
                </div>
              );
            })}
            <div className="flex justify-start">
              <ButtonComponent type="submit" onClick={handleSubmit}>
                Login
              </ButtonComponent>
              <span className=" ml-2 flex my-auto text-sm">
                Don't have an account?
                <Link to="/signup" className="text-blue-500">
                  SignUp
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
