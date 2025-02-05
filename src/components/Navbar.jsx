"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">My Practice App</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="active">
            <Link
              className={path == "/" ? "bg-blue-400 text-white" : " "}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={path == "/about" ? "bg-blue-400 text-white" : " "}
              href="/about"
            >
              About
            </Link>
            {/* <a className="bg-blue-400 text-white">About</a> */}
          </li>
          <li>
            <Link
              className={path == "/contact" ? "bg-blue-400 text-white" : " "}
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={path == "/dashboard" ? "bg-blue-400 text-white" : " "}
              href="/dashboard"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
