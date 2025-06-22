import Profile from "../header/Profile";
import Home from "../page/home/Home";

//   const icon = {
//     className: "w-5 h-5 text-inherit",
//   };

export const anotherRoutes = [
  {
    layout: "hidden_routes",
    pages: [
      {
        //   icon: <HomeIcon {...icon} />,
        name: "profile",
        path: "/",
        element: <Home />,
      },
      {
        //   icon: <HomeIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },

    ],
  },
];

export default anotherRoutes;
