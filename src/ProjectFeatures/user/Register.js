import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import LandingIntro from "./LandingIntro";
import useNavigator from "../../hooks/useNavigator";
import InputText from "../../components/Input/InputText";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "../../features/auth/authApi";
import DatePicker from "../../components/datepicker/Datepicker";
function Register() {
  const { handleNavigation } = useNavigator();
  const [selected, setSelected] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
  const [resRegister, { data, isLoading, error: loginError }] =
    useRegisterMutation();

  useEffect(() => {
    if (loginError?.data) {
      setError(loginError.data);
    }
    if (data?.data?.access?.token && data?.data?.user) {
      handleNavigation("/");
    }
  }, [data, loginError]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log('data', formData)
    setError("");
    resRegister({
      ccode: formData.fulname,
      ogender: formData.ogender,
      dob: formData.dob,
      ccode: formData.ccode,
      smsmobile: formData.smsmobile,
      logmobile: formData.logmobile,
      logemail: formData.logemail,
      password: formData.password,
      role: formData.role,
    });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center" >
      <div className="card mx-auto w-full max-w-7xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Register
            </h2>
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
                    className="input border-[#d8d8d8] focus:outline-none focus:ring-0 w-[100%]"
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
                        className="input border-[#d8d8d8] focus:outline-none focus:ring-0 w-[100%]"
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
                        className="input border-[#d8d8d8] focus:outline-none focus:ring-0 w-[100%]"
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
                    className="input border-[#d8d8d8] focus:outline-none focus:ring-0 w-[100%]"
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
                        showCalendar={showCalendar} setShowCalendar={setShowCalendar}
                          {...field}
                          value={field.value}
                          onChange={(date) => field.onChange(date)}
                          format="YYYY-MM-DD"
                     
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
                        <span className="text-[#161616]">User</span>
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
                        <span className="text-[#161616]">Doctor</span>
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
                      className="input border-[#d8d8d8] focus:outline-none focus:ring-0 w-[100%]"
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

                 
          


              </div>

              <button
                type="submit"
                className="w-full font-serif text-[18px] text-[#fff] bg-[#7B1E19] py-[10px] cursor-pointer mt-6 rounded-[8px]"
              >
                Create Account
              </button>
            </form>

             <div className="ml-3 text-sm flex justify-center mt-3">
                    <label className="font-medium  text-[#161616] font-serif ">
                      Do you have an Account
                      <Link to="/login"> {" "}
                        <span className="  inline-block  text-[#7B1E19] underline hover:cursor-pointer transition duration-200">
                          Login
                        </span>
                      </Link>
                    </label>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
