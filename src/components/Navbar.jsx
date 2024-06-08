import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/profile", {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("access_token"),
        },
      })
      .then((res) => {
        setUserAuth(res.data.data);
        setIsLogin(true);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == "401") {
          Navigate("/login");
        }
      });
  }, []);
  
  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <Link
            to={"/"}
            class="flex items-center rtl:space-x-reverse"
          >
            <img
              src="public/images/log.png"
              class="h-9 mb-1"
              alt=""
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Inven<span class="text-[#754EF9]">taris</span>
            </span>
          </Link>
          <div class="flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLogin == true ? (
              ""
            ) : (
              <Link
                to={"/login"}
                type="button"
                class="text-white bg-[#754EF9] hover:bg-[#6546e0] focus:outline-none focus:ring-4 focus:ring-[#7e5cf9] font-medium rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2 dark:bg-[#5b3dc7] dark:hover:bg-[#5237b2] dark:focus:ring-[#6443d5]"
              >
                Login
              </Link>
            )}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="justify-between hidden w-full md:flex md:w-auto md:order-2"
            id="navbar-cta"
>
            {
              isLogin == true && userAuth.role == 'admin' ? (
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to={'/'}
                  class="block py-2 px-3 md:p-0 text-[#754EF9] bg-[#754EF9] rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/stuffs'}
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Stuff
                </Link>
              </li>
              <li>
                <Link to={'/inbound'}
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Inbound
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Lending
                </a>
              </li>
              <li> 
                <Link
                  to={'/users'}
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  User
                </Link>
              </li>
              <li>
                <Link to={'/profile'}
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Profile
                </Link>
                </li>
            </ul>

              ) : isLogin == true && userAuth.role == 'staff' ? (
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Lending
                </a>
              </li>
            </ul>
              ) : ''
            }
          </div>
        </div>
      </nav>
    </>
  );
}