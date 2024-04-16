import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../../Layout/Sidebar";
import Loading from "../Loading";

import Dashboard from '../../components/pages/Dashboard';
import Calender from '../../components/pages/Calender';
import Documents from '../../components/pages/Documents';
import Project from '../../components/pages/Project';
import Reports from '../../components/pages/Reports';
import Team from '../../components/pages/Team';
import About from '../../components/About/About';
import Services from '../../components/services/Services';

// const Dashboard = React.lazy(() => import("../../components/pages/Dashboard"));
// const Calender = React.lazy(() => import("../../components/pages/Calender"));
// const Documents = React.lazy(() => import("../../components/pages/Documents"));
// const Project = React.lazy(() => import("../../components/pages/Project"));
// const Reports = React.lazy(() => import("../../components/pages/Reports"));
// const Team = React.lazy(() => import("../../components/pages/Team"));
// const About = React.lazy(() => import("../../components/About/About"));
// const Services = React.lazy(() => import("../../components/services/Services"));

export default function PrivateRoute() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route element={<Sidebar />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/project" element={<Project />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/team" element={<Team />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}
