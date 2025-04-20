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
      // {
      // //   icon: <UserCircleIcon {...icon} />,
      //   name: "About",
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   //   icon: <TableCellsIcon {...icon} />,
      //     name: "Bmi",
      //     path: "/bmi",
      //     element: <BMI />,
      // },
      // {
      //   //   icon: <TableCellsIcon {...icon} />,
      //     name: "Health Review",
      //     path: "/healthReview",
      //     element: <HealthReview />,
      // },
      // {
      // //   icon: <TableCellsIcon {...icon} />,
      //   name: "contact Us",
      //   path: "/contactUs",
      //   element: <ContactUs />,
      // },
    ],
  },
];

export default anotherRoutes;
