import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import image from "../../../public/images/auth/registrationBg.png";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { useRegister } from "../hooks/AuthPostsRQ";
import Loader from "../../components/loader/Loader";
import { useAppNavigation } from "../../components/dynamicNavigation/useAppNavigation";

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);

  const { handleNavigation } = useAppNavigation();
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [selected, setSelected] = useState("user");
  const {
    register,
    handleSubmit,
    control,
    reset,
    // formState: { errors },
  } = useForm({});

  const { mutate, isPending, isSuccess, isError, error } = useRegister();

  const handleButtonClick = () => {
    navigate("/");
  };
  const handleButtonClickLogin = () => {
    navigate("/auth/sign-in");
  };

  const onSubmit = async (data) => {
    const formattedDob = dayjs(data.dob).format("YYYY-MM-DD");
    const finalData = {
      ...data,
      dob: formattedDob,
    };
    console.log(finalData);

    mutate(finalData, {
      onSuccess: (res) => {
        console.log("success", res);
        toast.success(res?.data?.message || "Registration successful!");
        handleNavigation("/");
        reset();
      },
      onError: (err) => {
        console.error("❌ Error:", err);
        toast.error(err?.response?.data?.message || "Registration failed");
        reset();
      },
    });
  };

  return (
    <>
      {isPending ? (
        // <p>loading</p>
        <div>
          <Loader></Loader>
        </div>
      ) : (
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
                <button
                  onClick={() => handleNavigation("/auth/sign-in")}
                  className="font-medium text-primary-color font-serif"
                >
                  Sign in
                </button>
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div>
                  <label
                    className="font-serif  text-[14px]"
                    style={{ fontFamily: "poppins" }}
                  >
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    placeholder="Full Name"
                    {...register("fulname", { required: true })}
                    className="mt-1 appearance-none border  w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
                  />
                  {/* {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>} */}
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    {" "}
                    <div>
                      <label
                        className="font-serif  text-[14px]"
                        style={{ fontFamily: "poppins" }}
                      >
                        Code
                      </label>

                      <input
                        name="ccode"
                        value="88"
                        {...register("ccode", { required: true })}
                        className="mt-1 appearance-none border w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
                      />

                      {/* {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>} */}
                    </div>
                  </div>
                  <div className="col-span-3">
                    {" "}
                    <div>
                      <label
                        className="font-serif  text-[14px]"
                        style={{ fontFamily: "poppins" }}
                      >
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
                  <label
                    className="font-serif  text-[14px]"
                    style={{ fontFamily: "poppins" }}
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    {...register("logemail", { required: true })}
                    className="mt-1  appearance-none border w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-[#848282] placeholder:text-sm placeholder:normal"
                  />
                  {/* {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>} */}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-serif  text-[14px]"
                      style={{ fontFamily: "poppins" }}
                    >
                      Date Of Birth
                    </label>
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
                          style={{
                            width: "100%",
                            marginTop: 4,
                            paddingTop: 9,
                            paddingBottom: 9,
                            border: "1px solid #848282",
                            outline: "none",
                            boxShadow: "none",
                            borderRadius: "5px",
                            color: "#848282",
                          }}
                        />
                      )}
                    />
                  </div>
                  <div>
                    <label
                      className="font-serif  text-[14px]"
                      style={{ fontFamily: "poppins" }}
                    >
                      Type
                    </label>

                    <div className="flex gap-4 items-center h-12">
                      <label className="flex items-center space-x-2">
                        <input
                          {...register("role", { required: true })}
                          type="radio"
                          name="role"
                          value="user"
                          checked={selected === "user"}
                          onChange={() => setSelected("user")}
                          className="accent-[#7B1E19]"
                        />
                        <span className="text-gray-800">User</span>
                      </label>

                      <label className="flex items-center space-x-2">
                        <input
                          {...register("role", { required: true })}
                          type="radio"
                          name="role"
                          value="doctor"
                          checked={selected === "doctor"}
                          onChange={() => setSelected("doctor")}
                          className="accent-[#7B1E19]"
                        />
                        <span className="text-gray-800">Doctor</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    className="font-serif text-[14px]"
                    style={{ fontFamily: "poppins" }}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="password"
                      {...register("password", { required: true })}
                      className="mt-1 appearance-none border  w-full py-[10px] px-3 rounded-sm text-[#848282] leading-tight focus:outline-none focus:shadow-none  placeholder:text-gray-400 placeholder:text-sm placeholder:normal"
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
                    className="h-4 w-4 checked:text-white accent-[#7b1e19] focus:ring-[#7b1e19] border-gray-300 rounded"
                  />
                  <div className="ml-3 text-sm">
                    <label className="font-medium text-gray-700 font-serif ">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-[#7b1e19] hover:text-primary/90"
                      >
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
                className="w-full font-serif text-[18px] text-[#fff] bg-primary-color py-[10px] cursor-pointer mt-6"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
