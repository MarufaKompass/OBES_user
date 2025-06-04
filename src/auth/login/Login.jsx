import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import image from "../../../public/images/auth/registrationBg.png";
import { useObeContext } from "../../../components/contextAPI/MainContextProvider";
import { loginUser } from "../hooks/AuthPostsRQ";
import Loader from "../../components/loader/Loader";
import { useAppNavigation } from "../../components/dynamicNavigation/useAppNavigation";
import { useMutation } from "@tanstack/react-query";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useObeContext();
  const { handleNavigation } = useAppNavigation();
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();  
  
const { mutateAsync, error, isPending, isError, isSuccess } = useMutation(loginUser)
const onSubmit = async (data) => {
  try {
    const res = await mutateAsync(data);
    console.log("res" , res)
    sessionStorage.setItem("token", JSON.stringify(res?.token));
    setUser(res.data.token);
    toast.success(res?.data?.message || "Login successful!");
    handleNavigation("/");
    reset();
  } catch (err) {
    toast.error(err?.response?.data?.message || "Login failed");
    reset();
  }
};

  return (
    <>
      {isPending ? (
        <>
          <Loader></Loader>
        </>
      ) : (
        <>
          <div
            className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-serif  font-extrabold text-gray-900">
                  Login
                </h2>
                <p className="mt-2 text-sm text-gray-600 font-serif ">
                  don't have an account?{" "}
                  <button
                    onClick={() => handleNavigation("/auth/sign-up")}
                    className="font-medium text-primary-color font-serif "
                  >
                    Sign Up
                  </button>
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                  <div>
                    <label className="font-serif  text-[16px]">
                      Mobile Number
                    </label>
                    <input
                      id="name"
                      name="login"
                      type="text"
                      autoComplete="name"
                      placeholder="Mobile Number"
                      {...register("login")}
                      className="mt-1  appearance-none border  w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
                      style={{ fontFamily: "poppins" }}
                    />
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
                        autoComplete="password"
                        {...register("password")}
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
                  className="w-full font-serif text-[18px] text-[#fff] bg-primary-color py-[10px] cursor-pointer mt-6"
                  style={{ fontFamily: "poppins" }}
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
