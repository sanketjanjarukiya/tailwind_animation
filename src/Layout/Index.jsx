import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
        <div>
           <Sidebar/>
        </div>
    </>
  )
}