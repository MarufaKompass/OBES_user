import { Routes, Route } from "react-router-dom";
// import {
//   ChartPieIcon,
//   UserIcon,
//   UserPlusIcon,
//   ArrowRightOnRectangleIcon,
// } from "@heroicons/react/24/solid";

// import {
//   ServerStackIcon,
//   RectangleStackIcon,
// } from "@heroicons/react/24/solid";
import Login from "../login/Login";
import Registration from "../registration/Registration";

// const icon = {
//   className: "w-5 h-5 text-inherit",
// };

export function AuthRoutes() {
  const navbarRoutes = [
    {
      title: "auth pages",
      layout: "auth",
      pages: [
        {
          // icon: <ServerStackIcon {...icon} />,
          name: "sign in",
          path: "/sign-in",
          element: <Login />,
        },
        {
          // icon: <RectangleStackIcon {...icon} />,
          name: "sign up",
          path: "/sign-up",
          element: <Registration />,
        },
      ],
    },

  ];

  return (
    <div className="relative min-h-screen w-full">
      <Routes>
        {navbarRoutes.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
    </div>
  );
}

AuthRoutes.displayName = "/src/layout/AuthRoutes.jsx";

export default AuthRoutes;
