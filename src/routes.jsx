// import {
//     HomeIcon,
//     UserCircleIcon,
//     TableCellsIcon,
//     InformationCircleIcon
//   } from "@heroicons/react/24/solid";

  import Home from "./page/home/Home";
import About from "./page/about/About";
import ContactUs from "./page/contactUs/ContactUs";
import BMI from "./page/bmi/BMI";
import HealthReview from "./page/healthReview/HealthReview";
import OBESSchool from "./page/obesSchool/ObesSchool";
import DietPlan from "./page/obesSchool/submenus/DietPlan";
import ExerciseRoutine from "./page/obesSchool/submenus/ExerciseRoutine";
import DailyTrack from "./page/obesSchool/submenus/DailyTrack";
import Videos from "./page/obesSchool/submenus/Videos";
  
//   const icon = {
//     className: "w-5 h-5 text-inherit",
//   };
  
  export const routes = [
    {
      layout: "user_dashboard",
      pages: [
        {
        //   icon: <HomeIcon {...icon} />,
          name: "home",
          path: "/",
          element: <Home />,
        },
        {
        //   icon: <UserCircleIcon {...icon} />,
          name: "About",
          path: "/about",
          element: <About />,
        },
        {
          //   icon: <TableCellsIcon {...icon} />,
            name: "Bmi",
            path: "/bmi",
            element: <BMI />,
        },
        {
          //   icon: <TableCellsIcon {...icon} />,
            name: "Health Review",
            path: "/healthReview",
            element: <HealthReview />,
        },
        {
          //   icon: <TableCellsIcon {...icon} />,
            name: "OBES School",
            // path: "/obesSchool",
            // element: <OBESSchool />,
            children: [
              {
                  name: "Diet Plan",
                  path: "/obesSchool/dietPlan",
                  element: <DietPlan />,
              },
              {
                  name: "Exercise Routine",
                  path: "/obesSchool/exerciseRoutine",
                  element: <ExerciseRoutine />,
              },
              {
                  name: "Daily Track",
                  path: "/obesSchool/dailyTrack",
                  element: <DailyTrack />,
              },
              {
                  name: "Videos",
                  path: "/obesSchool/videos",
                  element: <Videos />,
              },
          ],
        },
        {
        //   icon: <TableCellsIcon {...icon} />,
          name: "contact Us",
          path: "/contactUs",
          element: <ContactUs />,
        },
        
      ],
    },
  
  ];
  
  export default routes;