import React, { useState } from "react";
import { useForm } from "react-hook-form";
import image from "../../../public/images/auth/registrationBg.jpg";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    // const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const {
      register,
      handleSubmit,
      // formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => console.log(data);
  return (
    <div
         className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-cover bg-center"
         style={{ backgroundImage: `url(${image})` }}
       >
         <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
           <div className="text-center">
             <h2 className="mt-6 text-3xl font-serif  font-extrabold text-gray-900">
               Login
             </h2>
             <p className="mt-2 text-sm text-gray-600 font-serif ">
               don't have an account?{" "}
               <a href="#" className="font-medium text-[#FE9A00] font-serif ">
                 Sign Up
               </a>
             </p>
           </div>
    

           <form onSubmit={handleSubmit(onSubmit)}>
             <div className="space-y-4">
               <div>
                 <label className="font-serif  text-[16px]">Mobile Number</label>
                 <input
                   id="name"
                   name="name"
                   type="text"
                   autoComplete="name"
                   placeholder="Mobile Number"
                   {...register("name")}
                   className="mt-1  appearance-none border  w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
                   style={{ fontFamily: "poppins" }} />
                 {/* {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>} */}
               </div>
   
           
   
               <div>
                 <label className="font-serif  text-[16px]">Password</label>
                 <div className="relative">
                   <input
                     id="password"
                     name="password"
                     type="password"
                     placeholder="Password"
                     {...register("example")}
                     className="mt-1  appearance-none border  w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal" 
                     style={{ fontFamily: "poppins" }}
                   />
                   <button
                     type="button"
                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
                     onClick={() => setShowPassword(!showPassword)}
                     style={{ fontFamily: "poppins" }}
                   >
                     {/* {showPassword ? (
                     <EyeOff className="h-4 w-4 text-gray-400" />
                   ) : (
                     <Eye className="h-4 w-4 text-gray-400" />
                   )} */}
                   </button>
                 </div>
                 {/* {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>} */}
               </div>
   
             
             </div>
   
             <button
               type="submit"
               className="w-full font-serif text-[18px] text-[#fff] bg-[#FE9A00] py-[10px] cursor-pointer mt-6"
               style={{ fontFamily: "poppins" }} >
               Sign In
             </button>
           </form>
         </div>
       </div>
  )
}
