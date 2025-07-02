import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import TopHeader from "../header/TopHeader";

export default function MainLayout() {
  return (
    <div>
      {/* <TopHeader></TopHeader> */}
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
}
