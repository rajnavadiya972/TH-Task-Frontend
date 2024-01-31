import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import Input from "../../components/Input";
import CustomButton from "../../components/CustomButton";
import { signUp } from "../../services/authService";

const Signup = () => {
  const navigate = useNavigate();

  const field = { firstname: "", lastname: "", email: "", password: "", confirmPassword: "" }
  const [data, setData] = useState(field);
  const [error, setError] = useState(field);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const checkEmpty = (value) => {
    return value === "";
  }

  const isError = () => {
    return !Object.values(error).every(checkEmpty);
  };

  const isEmpty = () => {
    return Object.values(data).some(checkEmpty);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty() || isError()) {
      toast.error("Please fill correct values!")
      return;
    }
    const res = await signUp(data);
    if (res.data.error || res.status !== 201) {
      toast.error(res.data.error)
      return;
    }
    toast.success(res.data.message)
    navigate("/login");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMsg = "";
    switch (name) {
      case "firstname":
        if (value.trim().length <= 0) {
          errorMsg = "Firstname must be present";
        }
        break;
      case "lastname":
        if (value.trim().length <= 0) {
          errorMsg = "Lastname must be present";
        }
        break;
      case "email":
        const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        const isValidEmail = emailPattern.test(value.trim());
        if (!isValidEmail) {
          errorMsg = "Email is not valid!";
        }
        break;
      case "password":
        const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const isValidPass = passPattern.test(value.trim());
        if (!isValidPass) {
          errorMsg = "Password must contain '[a-zA-Z1-9]'";
        }
        break;
      case "confirmPassword":
        if (data.password === "") {
          errorMsg = "Password must contain '[a-zA-Z1-9]'";
        }
        if (data.password !== value) {
          errorMsg = "Entered confirm password not match!";
        }
        break;
      default:
        errorMsg = "Error!";
    }
    setError((error) => {
      return {
        ...error,
        [name]: errorMsg,
      };
    });
  };

  const inputs = [
    {
      name: "firstname",
      type: "text",
      error: error.firstname !== "",
      helperText: error.firstname,
      label: "Firstname",
      placeholder: "Firstname",
      value: data.firstname,
    },
    {
      name: "lastname",
      type: "text",
      error: error.lastname !== "",
      helperText: error.lastname,
      label: "Lastname",
      placeholder: "Lastname",
      value: data.lastname,
    },
    {
      name: "email",
      type: "email",
      error: error.email !== "",
      helperText: error.email,
      label: "Email",
      placeholder: "example@gmail.com",
      value: data.email,
    },
    {
      name: "password",
      type: "password",
      error: error.password !== "",
      helperText: error.password,
      label: "Password",
      placeholder: "Password",
      value: data.password,
    },
    {
      name: "confirmPassword",
      type: "password",
      error: error.confirmPassword !== "",
      helperText: error.confirmPassword,
      label: "Confirm Password",
      placeholder: "Confirm Password",
      value: data.confirmPassword,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-blue-100">
      <form method="POST" className="p-5 rounded-lg bg-blue-50">
        <p className="justify-center flex text-lg text-blue-600 font-bold">
          Sign Up
        </p>
        <div className="flex flex-col justify-around min-h-[75vh] w-[20rem]">
          {inputs.map((input, index) => {
            const { type, error, name, label, placeholder, value, helperText } = input;
            return (
              <div key={index} className="flex flex-col">
                <Input
                  helperText={helperText}
                  type={type}
                  error={error}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  value={value}
                />
              </div>
            );
          })}
          <div className="flex justify-start">
            <CustomButton type="button" onClick={handleSubmit}>
              Sign Up
            </CustomButton>
            <span className=" ml-2 flex my-auto text-sm">
              Already have an account?&nbsp;
              <Link to="/login" className="text-blue-500 font-bold">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default Signup;
