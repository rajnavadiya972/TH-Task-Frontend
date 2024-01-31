import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import Input from "../../components/Input";
import CustomButton from "../../components/CustomButton";
import { logIn } from "../../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const isEmpty = () => {
    const { email, password } = data;
    return (email === "" || password === "")
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
    if (isEmpty()) {
      toast.error("Please fill all the values!");
      return;
    }
    const res = await logIn(data);
    if (res.data.error || res.status !== 200) {
      toast.error(res.data.error)
      return;
    }
    toast.success(res.data.message)
    navigate("/dashboard");
  };

  const inputs = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "example@gmail.com",
      value: data.email,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Password",
      value: data.password,
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-blue-100">
        <form method="POST" className="p-5 rounded-lg bg-blue-50">
          <p className="justify-center flex text-lg text-blue-600 font-bold">
            Log in
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
              <CustomButton type="submit" onClick={handleSubmit}>
                Log in
              </CustomButton>
              <span className=" ml-2 flex my-auto text-sm">
                Don't have an account?&nbsp;
                <Link to="/signup" className="text-blue-500 font-bold">
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </form>
        <Toaster />
      </div>
    </>
  );
};

export default Login;
