import Home from "./page/home/Home";
import About from "./page/about/About";
import ContactUs from "./page/contactUs/ContactUs";

  
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
          name: "contact Us",
          path: "/contactUs",
          element: <ContactUs />,
        },
      
        
      ],
    },
  
  ];
  
  export default routes;