import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function UserInfo() {
    const navigate = useNavigate();
     const handleButtonClick = () => {
        navigate('/profile');
      };
  return (
    <div className="absolute right-0 mt-8 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
    <ul className="py-2 text-sm text-gray-700">
      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[15px]" style={{ fontFamily: "poppins" }} onClick={handleButtonClick}>My Profile</li>
      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[15px]" style={{ fontFamily: "poppins" }}>Settings</li>
      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[15px]" style={{ fontFamily: "poppins" }}>Logout</li>
    </ul>
  </div>
  )
}
