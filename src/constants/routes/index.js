// All components mapping with path for internal routes

import { lazy } from "react";
const Dashboard = lazy(() => import("../../pages/obes/protected/Dashboard"));
const Welcome = lazy(() => import("../../pages/obes/protected/Welcome"));
const Page404 = lazy(() => import("../../pages/obes/protected/404"));
const Blank = lazy(() => import("../../pages/obes/protected/Blank"));
const Charts = lazy(() => import("../../pages/obes/protected/Charts"));
const Leads = lazy(() => import("../../pages/obes/protected/Leads"));
const Integration = lazy(() => import("../../pages/obes/protected/Integration"));
const Calendar = lazy(() => import("../../pages/obes/protected/Calendar"));
const Team = lazy(() => import("../../pages/obes/protected/Team"));
const DietPlan = lazy(() => import("../../pages/obes/protected/DietPlan"));
const ExerciseRoutine = lazy(() => import("../../pages/obes/protected/ExerciseRoutine"));
const DailyTrack  = lazy(() => import("../../pages/obes/protected/DailyTrack"));
const ObesVideos = lazy(() => import("../../pages/obes/protected/ObesVideos"));
const Bills = lazy(() => import("../../pages/obes/protected/Bills"));
const ProfileSettings = lazy(() => import("../../pages/obes/protected/ProfileSettings"));
const GettingStarted = lazy(() => import("../../pages/obes/GettingStarted"));
const DocFeatures = lazy(() => import("../../pages/obes/DocFeatures"));
const DocComponents = lazy(() => import("../../pages/obes/DocComponents"));

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/welcome",
    component: Welcome,
  },
  {
    path: "/leads",
    component: Leads,
  },
  {
    path: "/settings-team",
    component: Team,
  },
  {
    path: "/calendar",
    component: Calendar,
  },



  
  {
    path: "obes/dietPlan",
    component: DietPlan,
  },

  {
    path: "obes/exerciseRoutine",
    component: ExerciseRoutine,
  },
  {
    path: "obes/dailyTrack",
    component: DailyTrack,
  },

  {
    path: "obes/videos",
    component: ObesVideos,
  },


  {
    path: "/settings-profile",
    component: ProfileSettings,
  },
  {
    path: "/settings-billing",
    component: Bills,
  },
  {
    path: "/getting-started",
    component: GettingStarted,
  },
  {
    path: "/features",
    component: DocFeatures,
  },
  {
    path: "/components",
    component: DocComponents,
  },
  {
    path: "/integration",
    component: Integration,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
