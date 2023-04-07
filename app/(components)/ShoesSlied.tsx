"use client";
import React from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AiOutlineStar } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import "@splidejs/splide/css";
import { toprateslaes } from "../../constants";
// eslint-disable-next-line
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

export default function ShoesSlied() {
  return (
    <div className="w-full h-auto frc justify-between flex-wrap relative ">  
     
      <Splide
        options={{
          perPage: 4,
          perMove: 1,
          type: "loop",
          rewind: true,
          keyboard: "global",
          gap: "1rem",
          pagination: false,
          arrows: false,
          drag: "free",
          focus: "center",
          padding: "2rem",
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },

          breakpoints: {
            1200: { perPage: 3 },
            991: { perPage: 2.3 },
            768: { perPage: 2 },
            500: { perPage: 1.3 },
            425: { perPage: 1 },
          },
        }}
        extensions={{ AutoScroll }}
        className="w-[95%] h-auto flex flex-row  items-center justify-between m-auto  "
      >
          
        {toprateslaes.map((data, i: any) => (
          <SplideSlide
            key={i}
            
            className={` relative min-w-[280px] h-[300px]  px-[20px]   py-[10px] bg-gradient-to-b ${
              data.color ? data.color : " PreBuildColour "
            } rounded-[10px]`}
          >
            <div className="w-full h-[86%] flex items-center justify-center">
              <img
                src={data.img}
                alt={`img/story/${i}`}
                className="w-full h-auto object-cover rotate-0 hover:rotate-[-12deg] cursor-pointer  transition-all  duration-700 ease-in-out "
              />
            </div>
            <div className="w-full h-[14%] frc justify-between">
              <div className="w-auro frc">
              <span id="italy" className="px-[12px] py-[3px] rounded-[5px] bg-slate-200 text-black">
                ${data.price}
              </span>
              <div  id="italy" className="ml-[15px] frc justify-center text-slate-100">
            <AiOutlineStar className="text-[20px] " />
            <span className="ml-[4px] ">{data.rating}</span>
          </div>
          </div>
          <div className="w-auto frc">
          <div className="p-[4px] active:scale-90 transition-all duration-100 rounded bg-slate-100 cursor-pointer ">
            <SiShopify className="text-[24px]" />
          </div>
          <div id="italy" className="px-[20px] py-[4px] active:scale-90 transition-all duration-100 cursor-pointer bg-slate-100 rounded ml-[12px]">
            Buy Now
          </div>
          </div>
     
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

/*
    const splide = new Splide( '.splide', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        arrows    : false,
        perPage: 3,
        autoScroll: {
          speed: 1,
        },
      } );
      
      splide.mount();
      */
