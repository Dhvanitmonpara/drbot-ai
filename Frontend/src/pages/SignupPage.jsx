import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import authService from "../appwrite/authConfig";
import { login } from "../store/authSlice";
import { LoadingBtn } from "../Components/index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignupPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const create = async (data) => {
    setLoading(true);
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.log("error returned");
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="min-h-[85vh] flex justify-center items-center bg-[#EBF7F7]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Join <span className="text-[#40bb98]">OutsourcingGPT</span>
        </h2>
        <form onSubmit={handleSubmit(create)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40bb98]"
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40bb98]"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40bb98]"
              placeholder="Create a password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
              {...register("confirm_password", {
                required: true,
                validate: (value) => {
                  if (watch("password") != value) {
                    return "Your passwords do no match";
                  }
                },
              })}>
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40bb98]"
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

          <div className="mt-8">
            {!loading ? (
              <button
                type="submit"
                className="w-full bg-[#40bb98] h-12 text-white py-2 px-4 rounded-md hover:bg-[#32a685] transition-colors duration-300">
                Sign Up
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-[#40bb98] h-12 text-white py-2 px-4 rounded-md hover:bg-[#32a685] transition-colors duration-300">
                <LoadingBtn className="h-full flex justify-center items-center" />
              </button>
            )}
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/account/login"
              className="text-[#40bb98] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
