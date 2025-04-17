import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function TopHeader() {
  const navigate = useNavigate();

  const handleButtonClickSignIn = () => {
    navigate('/auth/sign-in');
  };
  const handleButtonClickSignUp = () => {
    navigate('/auth/sign-up');
  };
  return (
<div className="border-b border-[#f1f1f1]">
<div className='container px-10 py-4 '>
      <div className='flex gap-4 justify-end items-center h-auto'>
        <button onClick={handleButtonClickSignIn} className="font-medium text-[14px] underline " style={{ fontFamily: "poppins" }}>Sign In</button>
        <button onClick={handleButtonClickSignUp} className="font-medium text-[14px] underline " style={{ fontFamily: "poppins" }}>Sign Up</button>
      </div>
    </div>
</div>
  )
}
