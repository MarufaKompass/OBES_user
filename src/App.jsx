import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthRoutes from "./auth/authRoutes/AuthRoutes";
import MainLayout from "./layout/MainLayout";
import routes from "./routes";
import anotherRoutes from "./components/AnotherRoutes";

function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<MainLayout />}>
          {anotherRoutes
            .find((r) => r.layout === "hidden_routes")
            .pages.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
        </Route> 
        
        <Route path="/" element={<MainLayout />}>
          {routes
            .find((r) => r.layout === "user_dashboard")
            .pages.map(({ path, element, children }, index) => (
              <Route key={index} path={path} element={element}>
                {/* Nested Submenu Routes */}
                {children &&
                  children.map((child, childIndex) => (
                    <Route
                      key={childIndex}
                      path={child.path.replace(`${path}/`, "")}
                      element={child.element}
                    />
                  ))}
              </Route>
            ))}
        </Route>
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </>
  );
}

export default App;
