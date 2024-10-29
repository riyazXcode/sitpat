import React from "react";
import { Menu } from "lucide-react";
import LogoPNG from "../assets/images/logomain.png";
import { useState } from "react";


const SideBar = () => {
  return (
    <aside className="h-screen min-w-fit max-w-64">
      <nav className="h-full flex flex-col border-r shadow-sm bg-bg-grey">
        <div className="p-4 pb-2 flex justify-between items-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
          <img src={LogoPNG} className=" w-28"></img>
          <button className="p-1.5 rounded-lg">
            <Menu color="white" size={30}/>
          </button>
        </div>
        <hr className="my-3 "></hr>
        <h1 className="text-white text-2xl pl-4">Student Database</h1>
        <ul className="ml-3 mt-2">
          <li className="group pl-8 hover:text-black hover:bg-white py-2 transition duration-200 hover:cursor-pointer hover:border-l-8 hover:border-main-blue">
            <span className=" text-white group-hover:text-black transition duration-200">Add Student Details</span>
          </li>
          <li className="group pl-8 hover:text-black hover:bg-white py-2 transition duration-200 hover:cursor-pointer hover:border-l-8 hover:border-main-red">
            <span className=" text-white group-hover:text-black transition duration-200">Delete Student Details</span>
          </li>
          <li className="group pl-8 hover:text-black hover:bg-white py-2 transition duration-200 hover:cursor-pointer hover:border-l-8 hover:border-main-yellow">
            <span className=" text-white group-hover:text-black transition duration-200">Update Student Details</span>
          </li>
          <li className="group pl-8 hover:text-black hover:bg-white py-2 transition duration-200 hover:cursor-pointer hover:border-l-8 hover:border-main-cyan-green">
            <span className=" text-white group-hover:text-black transition duration-200">View Student Database</span>
          </li>
        </ul>
        <hr className="my-3"></hr>
        <h1 className="text-white text-2xl pl-4">Placement Database</h1>
        <ul className="ml-3 mt-2">
          <li className="group pl-8 hover:text-black hover:bg-white py-2 transition duration-200 hover:cursor-pointer hover:border-l-8 hover:border-main-blue">
            <span className=" text-white group-hover:text-black transition duration-200">Add Placement Training</span>
          </li>
          <li className="group pl-8 hover:text-black hover:bg-white py-2 transition duration-200 hover:cursor-pointer hover:border-l-8 hover:border-main-red">
            <span className=" text-white group-hover:text-black transition duration-200">Delete Placement Training</span>
          </li>    
          <li className="group pl-8 hover:text-black hover:bg-white py-2 transition duration-200 hover:cursor-pointer hover:border-l-8 hover:border-main-yellow">
            <span className=" text-white group-hover:text-black transition duration-200">Update Placement Training</span>
          </li>
          <li className="group pl-8 hover:text-black hover:bg-white py-2 transition duration-200 hover:cursor-pointer hover:border-l-8 hover:border-main-cyan-green">
            <span className=" text-white group-hover:text-black transition duration-200">View Placement Database</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
