import { useState, useEffect } from "react";
import React from "react";
import Header from "../components/Header";
import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";

function HomePage() {
  
  return (
    <>
      <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
      <Header/>
        <div className="flex h-full mb-10">
          {/* left card*/}
          <LeftCard/>
          {/* right card*/}
          <RightCard/>
        </div>
      </div>
    </>
  );
}

export default HomePage;
