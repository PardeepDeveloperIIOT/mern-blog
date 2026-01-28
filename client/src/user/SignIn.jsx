import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonAccount from "../components/ButtonAccount";
import { useDispatch, useSelector } from "react-redux";
import { login, removeError, removeSuccess } from "../features/user/userSlice";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const HandleSignInFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(removeError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      toast.success("Login Successful");
      dispatch(removeSuccess());
      navigate("/");
    }
  }, [dispatch, success]);
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
              onSubmit={HandleSignInFormSubmit}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium">
                  Your Email
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="email"
                  value={userData.email}
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
                  value={userData.password}
                  placeholder="Password"
                  id="password"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div className="text-center">
                <ButtonAccount title={"SignIn"}></ButtonAccount>
                <OAuth></OAuth>
              </div>
            </form>
            <div className="flex gap-2  mt-5">
              <span className="font-medium">Dont have an Account?</span>
              <Link to={"/sign-up"} className="text-blue-600 font-bold">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
