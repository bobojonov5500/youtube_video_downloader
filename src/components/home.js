import React from "react";
import Input from "./input";
import Download from "./download-vidoes";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className=" max-w-screen-md bg-white rounded-sm border-black mx-auto mt-20 py-14 text-center">
      <p className="bg-white text-3xl">Download Video and Audio from YouTube</p>
      <div className="px-3 mt-10 bg-white">
        <Input />
      </div>
      <Routes>
        <Route path={"/youtube/:id"} element={<Download />} />
      </Routes>
    </div>
  );
};

export default Home;
