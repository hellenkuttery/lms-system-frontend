import React from "react";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
  return (
    <div class="bg-gray-500 w-100">
      <div class="mx-auto flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10">
        <div class="max-w-md rounded-3xl bg-gradient-to-t from-blue-700 via-blue-700 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
          <p class="mb-20 font-bold tracking-wider">CORINE</p>
          <p class="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
            Start your <br />
            journey with us
          </p>
          <p class="mb-28 leading-relaxed text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
            voluptas a officia. Omnis.
          </p>
          <div class="bg-blue-600/80 rounded-2xl px-4 py-8">
            <p class="mb-3 text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea
              voluptates sapiente!
            </p>
            <div class="">
              <div class="flex items-center">
                <img
                  class="h-10 w-10 rounded-full object-cover"
                  src="/images/y9s3xOJV6rnQPKIrdPYJy.png"
                  alt="Simon Lewis"
                />
                <p class="ml-4 w-56">
                  <strong class="block font-medium">Simon Lewis</strong>
                  <span class="text-xs text-gray-200">
                    {" "}
                    Published 12 Bestsellers{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-20">
          <h2 class="mb-2 text-3xl font-bold">Login</h2>
          <a href="#" class="mb-10 block font-bold text-gray-600">
            <Link to="/register">
            Haven't an account got Register Page </Link>
          </a>
          <p class="mb-1 font-medium text-gray-500">Looking for?</p>
          <div class="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
            <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
              <input
                class="peer hidden"
                type="radio"
                name="radio"
                id="radio1"
                checked
              />
              <label
                class="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                for="radio1"
              >
                {" "}
              </label>
              <div class="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
              <span class="pointer-events-none z-10">Projects</span>
            </div>
            <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
              <input
                class="peer hidden"
                type="radio"
                name="radio"
                id="radio3"
                checked
              />
              <label
                class="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                for="radio3"
              >
                {" "}
              </label>
              <div class="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
              <span class="pointer-events-none z-10">Job</span>
            </div>
          </div>
          <p class="mb-1 font-medium text-gray-500">Email</p>
          <div class="mb-4 flex flex-col">
            <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                type="email"
                id="signup-email"
                class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <p class="mb-1 font-medium text-gray-500">Password</p>
          <div class="mb-4 flex flex-col">
            <div class="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                type="password"
                id="signup-password"
                class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Choose a password (minimum 8 characters)"
              />
            </div>
          </div>
          <button class="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
