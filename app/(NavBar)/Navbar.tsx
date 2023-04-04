"use client";
import React from "react";
import Image from "next/image";
import { SiShopify } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import Darkmode from "../(components)/Darkmode";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [onScroll, setonScroll] = useState<boolean>(false);

  const onScrollChange = () => {
    if (window.scrollY > 30) {
      setonScroll(true);
    } else {
      setonScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScrollChange);
    return () => {
      window.removeEventListener("scroll", onScrollChange);
    };
  }, []);
  return (
    <div className={`w-full h-[8vh] transition-all duration-75  ${onScroll ? 'fixed   top-0 left-0 right-0 opacity-5 z-[5] blur-effect-theme ' : ' bg-[#1B4CE0]'}  `}>
      <div className="w-[93%] h-full m-auto frc justify-between">
        <div className=" animate-slowfade">
          <Image
            className=""
            src="/logo.png"
            width={70}
            height={70}
            alt="Nike"
          />
        </div>
        <div className="w-auto h-auto frc animate-slideright">
          <div className={` ${onScroll ? ' text-slate-100' : 'text-slate-100 '} text-[35px] mr-[15px] relative cursor-pointer z-1 hover:scale-110 transition-all  duration-100  `}>
            <SiShopify className=" cursor-pointer  " />
            <div className="px-[5px] cursor-pointer rounded-full  group-hover:bg-orange-400 bg-orange-500 text-white absolute text-[10px] bottom-[-6px] right-[-4px]">
              5
            </div>
          </div>
          <div className={` ${onScroll ? ' text-slate-100' : 'text-slate-100 '}   text-[35px] hover:scale-110 transition-all duration-100 cursor-pointer `}>
            <FaUserCircle />
          </div>
          <Darkmode />
          
        </div>
      </div>
    </div>
  );
}
