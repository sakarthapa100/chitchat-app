import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-64 overflow-auto" />
      <MessageContainer className="flex-grow" />
    </div>
  );
};

export default Home;
