import React, { useState } from "react";
import Input from "../common/Input";
import ButtonComponent from "../common/ButtonComp";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
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
