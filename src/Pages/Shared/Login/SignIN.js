import React from 'react';
import Footer from '../Footer/Footer';
import designer from '../../../assets/Designer.png';
import { Link } from 'react-router-dom';

const SignIN = () => {
  return (
    <div>
      <div className="bg-gray-100 -mt-10 text-gray-900 flex justify-center mt-5">
        <div className="m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-4 sm:p-5">
            <div className="ml-5 mt-5 flex flex-col items-center h-full">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In to Your Account</h1>
              <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center h-full">
                  <form className="mx-auto max-w-xs h-full">
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 mb-5 focus:bg-white"
          id="username"
          type="text"
          placeholder="Username"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          id="password"
          type="password"
          placeholder="Password"
        />
        <div className="flex items-center mb-4">
          <input
            className="mr-2"
            type="checkbox"
            id="checkbox_id"
          />
          <label className="text-sm" htmlFor="checkbox_id">
            Remember Me
          </label>
        </div>
        <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
      </form>

                  {/* Sign up and forgot password links */}
                  <div className="mt-6 text-xs text-gray-600 text-center mb-6">
                    <p>
                      Don't have an account?{' '}
                      <Link className="underline text-primary" to="/signUp">
                        Sign Up
                      </Link>
                    </p>
                    <p>
                      <Link className="underline text-primary " to="#">
                        Forgot Password?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[90px] flex-1 bg-blue-950 text-center hidden lg:flex">
            {/* Background color */}
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block  bg-cover rounded-r-s"
              style={{
                backgroundImage: `url(${designer})`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIN;
