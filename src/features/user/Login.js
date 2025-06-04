
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import LandingIntro from "./LandingIntro";


function Login() {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();


  // const { mutateAsync, error, isPending, isError, isSuccess } = useMutation(loginUser)
  const onSubmit = async (data) => {
    console.log("login user", data);
    //   try {
    //     const res = await mutateAsync(data);
    //     console.log("res" , res)
    //     sessionStorage.setItem("token", JSON.stringify(res?.token));
    //     setUser(res.data.token);
    //     toast.success(res?.data?.message || "Login successful!");
    //     handleNavigation("/");
    //     reset();
    //   } catch (err) {
    //     toast.error(err?.response?.data?.message || "Login failed");
    //     reset();
    //   }
  };
  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 w-100">
                <div className="mb-3">
                  <p className="font-serif  text-[16px] mb-1">Mobile Number*</p>
                  <input
                    type="text"
                    {...register("login")}
                    placeholder="Mobile Number"
                    className="input border-[#d8d8d8] focus:outline-none focus:ring-0 w-[100%]"
                  />
                </div>
                <div>
                  <p className="font-serif  text-[16px] mb-1">Password*</p>
                  <input
                    {...register("password")}
                    placeholder="Password"
                    type="password"
                     className="input border-[#d8d8d8] focus:outline-none focus:ring-0 w-[100%]"
                  />
                </div>
              </div>

              <div className="text-right text-primary">
                <Link to="/forgot-password">
                  <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <button
                type="submit"
                className={
                  "btn mt-2 w-full bg-[#7B1E19] text-[#fff] hover:bg-[#7B1E19]"
                }
              >
                Login
              </button>

              <div className="text-center mt-4">
                Don't have an account yet?{" "}
                <Link to="/register">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    Register
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
