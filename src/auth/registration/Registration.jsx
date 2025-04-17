import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import image from "../../../public/images/auth/registrationBg.jpg";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const handleButtonClick = () => {
    navigate('/');
  };

  const onSubmit = async(data) => {
    const formattedDob = dayjs(data.dob).format("YYYY-MM-DD");
    const finalData = {
      ...data,
      dob: formattedDob,
    };
    console.log(finalData);
    try {
      const res = await axios.post(
        "https://obapi.myhealthrow.com/public/api/signup",
        finalData
      );
      console.log("Response:", res);
      // sessionStorage.setItem("token", JSON.stringify(res.data.token));
      toast.success(res.data?.data?.message);

      handleButtonClick();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-serif  font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-serif ">
            Already have an account?{" "}
            <a href="#" className="font-medium text-[#FE9A00] font-serif ">
              Sign in
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label className="font-serif  text-[16px]">Full Name</label>
              <input
                name="fullname"
                type="text"
                placeholder="Full Name"
                {...register("fulname", { required: true })}
                className="mt-1 appearance-none border  w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
              />
              {/* {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>} */}
            </div>
            <div class="grid grid-cols-4 gap-4">
              <div class="">
                {" "}
                <div>
                  <label className="font-serif  text-[16px]">Code</label>

                  <input
                    name="ccode"
                    value="88"
                    {...register("ccode", { required: true })}
                    className="mt-1 appearance-none border w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
                  />

                  {/* {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>} */}
                </div>
              </div>
              <div class="col-span-3">
                {" "}
                <div>
                  <label className="font-serif  text-[16px]">
                    Mobile Number
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Mobile Number"
                    {...register("logmobile", { required: true })}
                    className="mt-1  appearance-none border  w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
                  />
                  {/* {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>} */}
                </div>
              </div>
            </div>

            <div>
              <label className="font-serif  text-[16px]">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                {...register("logemail", { required: true })}
                className="mt-1  appearance-none border  w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
              />
              {/* {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>} */}
            </div>
            <div>
              <Controller
                name="dob"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    value={field.value}
                    onChange={(date) => field.onChange(date)}
                    format="YYYY-MM-DD"
                    style={{ width: "100%" }}
                  />
                )}
              />
            </div>
            <div>
              <label className="font-serif  text-[16px]">Password</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="mt-1  appearance-none border  w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
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

            <div className="flex items-center">
              <input
                id="agree"
                type="checkbox"
                className="h-4 w-4 checked:text-white accent-[#FE9A00] focus:ring-[#FE9A00] border-gray-300 rounded"
              />
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700 font-serif ">
                  I agree to the{" "}
                  <a href="#" className="text-[#FE9A00] hover:text-primary/90">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#] hover:text-primary/90">
                    Privacy Policy
                  </a>
                </label>
                {/* {errors.acceptTerms && <p className="mt-1 text-sm text-red-500">{errors.acceptTerms}</p>} */}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full font-serif text-[18px] text-[#fff] bg-[#FE9A00] py-[10px] cursor-pointer mt-6"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
