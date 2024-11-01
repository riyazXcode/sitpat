import React from "react";
import { Menu } from "lucide-react";
import LogoPNG from "../assets/images/logomain.png";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedItem, toggleSidebar} from "../features/sidebar/sidebarSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

  const handleItemClick = (item)=>{
    dispatch(setSelectedItem(item));
  }

  const handleToggle = ()=>{
    dispatch(toggleSidebar());
  }

  return (
      <aside className={`h-screen ${isCollapsed ? 'w-12' : 'w-64'} transition-all duration-200`}>
        <nav className="h-full flex flex-col border-r shadow-sm bg-bg-grey">
          <div className="pt-4 px-2 pb-2 flex justify-between items-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            {!isCollapsed && <img src={LogoPNG} className="w-28 transition-all duration-200" alt="Logo" />}
            <button className="rounded-lg" onClick={handleToggle}>
              <Menu color="white" size={30}/>
            </button>
          </div>
          {!isCollapsed && <div>
          <hr className="my-3 "></hr>
          <h1 className="text-white text-xl pl-4 pr-3">Student Database</h1>
          <ul className="ml-3 mt-2">
            {["Add Student Details", "Delete Student Details", "Update Student Details", "View Student Database"].map((item) => (
                <li
                    key={item}
                    onClick={() => handleItemClick(item)}
                    className="group pl-3 hover:text-black hover:bg-white py-2 transition duration-500 hover:cursor-pointer hover:border-l-8 hover:border-main-blue"
                >
                  <span className=" text-white group-hover:text-black transition duration-200">{item}</span>
                </li>
            ))}
          </ul>
          <hr className="my-3"></hr>
          <h1 className="text-white text-xl pl-4 pr-3">Placement Database</h1>
          <ul className="ml-3 mt-2 ">
            {["Add Placement Training", "Delete Placement Training", "Update Placement Training", "View Placement Database"].map((item) => (
                <li
                    key={item}
                    onClick={() => handleItemClick(item)}
                    className="group pl-3 hover:text-black hover:bg-white py-2 transition duration-500 hover:cursor-pointer hover:border-l-8 hover:border-main-cyan-green"
                >
                  <span className=" text-white group-hover:text-black transition duration-200">{item}</span>
                </li>
            ))}
          </ul>
          </div>}
        </nav>
      </aside>
  );
};

export default SideBar;
