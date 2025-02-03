import React from "react";
import Main from "./pages/Main";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Tips from "./pages/Tips";
import Project from "./pages/Project";
import Message from "./pages/Message";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/project" element={<Project />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
