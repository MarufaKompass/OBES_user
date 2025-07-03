import React, { useState } from "react";
import { Link } from "react-router";
import routes from "../routes";
import logo from "../../public/images/logo/Logo.png";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useObeContext } from "../../components/contextAPI/MainContextProvider";
export default function Header() {

  const pages = routes[0].pages;
  const [openIndex, setOpenIndex] = useState(null);
  const { user } = useObeContext();
  console.log("user", user)
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <nav className="p-2 shadow-lg">
      <div className="flex justify-between px-10 container">
        <Link to="/">
          <div>
            <img src={logo} alt="logo" className="w-15" />
          </div>
        </Link>
        <div className="flex gap-2 items-center">
          {pages.map((page, index) => (
            <div key={index} className="relative">
              <div
                onClick={() => handleToggle(index)}
                className="cursor-pointer text-[#333] hover:text-[#7B1E19] capitalize pl-4 text-[15px] font-medium flex justify-between items-center"
                style={{ fontFamily: "poppins" }}>
                <Link to={page.path}>{page.name}</Link>
                {page.children && (
                  <span className="pl-2">
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </span>
                )}
              </div>

              {/* Animated Submenu */}
              {page.children ? (
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden absolute top-10 left-4 ${openIndex === index
                      ? "max-h-40 w-[200px] shadow-xl  bg-white rounded-lg"
                      : "max-h-0 "
                    }`}
                >
                  {page.children?.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      to={child.path}
                      onClick={() => setOpenIndex(null)}
                      className="block text-[#666] hover:text-[#ec9f2b] pl-4  textAlign-left capitalize w-[160px] text-[14px] font-normal py-[4px] font-[poppins]"
                      style={{ fontFamily: "poppins" }}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className=" flex justify-between items-center ml-4 rounded-2xl relative group cursor">
          {/* <div>
          <img src={man} alt="man"  className="w-14 h-14" />
        </div> */}
          {/* <div>
          <UserInfo></UserInfo>
        </div> */}
          <a href="https://my.obesitybes.com/login" target="_blank" className="font-semibold font-[poppins]  text-[14px] underline-none text-[#fff] " style={{ fontFamily: "poppins" }}>
            <div className='flex gap-4 justify-end items-center h-auto border border-[#c2c1c1] px-10 py-2  rounded-[10px] bg-[#7B1E19]'>

              <span>Sign In</span>
            </div>
          </a>

        </div>
      </div>
    </nav>
  );
}
