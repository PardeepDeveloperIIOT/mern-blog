import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonAccount from "../components/ButtonAccount";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const HandleSignupFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="max-w-screen-lg min-h-screen mt-36 mx-auto">
        <div className=" flex p-3 flex-col md:flex-row md:items-center gap-5">
          {/* left side */}
          <div className="flex-1 left-side-conatiner text-4xl font-bold ">
            <Link to={"/"}>
              <span className="rounded-lg px-2 py-2 bg-gradient-to-r from-blue-400  to-purple-400">
                MERN
              </span>
              Blog
            </Link>
            <p className="text-sm font-semibold mt-5">
              This si my first MERN Blog Project. You can Sign up with your
              email and password or with google.
            </p>
          </div>
          {/* right side */}
          <div className="flex-1 right-side-conatiner ">
            <form
              onSubmit={HandleSignupFormSubmit}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col ">
                <label htmlFor="username" className="font-medium">
                  Your Username
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="Username"
                  id="username"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium">
                  Your Email
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="email"
                  value={formData.email}
                  placeholder="name@complany.com"
                  id="email"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="font-medium">
                  Your Pasword
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  id="password"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="text-center">
                <ButtonAccount title="SignUp"></ButtonAccount>
              </div>
            </form>
            <div className="flex gap-2  mt-5">
              <span className="font-medium">Have an Account?</span>
              <Link to={"/sign-in"} className="text-blue-600 font-bold">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
