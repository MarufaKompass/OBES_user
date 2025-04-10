import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
}
