import Home from "./page/home/Home";
import About from "./page/about/About";
import ContactUs from "./page/contactUs/ContactUs";
import BMI from "./page/bmi/BMI";
import HealthReview from "./page/healthReview/HealthReview";
import DietPlan from "./page/obesSchool/submenus/dietPlan/DietPlan";
import ExerciseRoutine from "./page/obesSchool/submenus/exerciseRoutine/ExerciseRoutine";
import DailyTrack from "./page/obesSchool/submenus/dailyTrack/DailyTrack";
import VideoGallery from "./page/obesSchool/submenus/videoGallery/VideoGallery";
  
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
                  element: <VideoGallery />,
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