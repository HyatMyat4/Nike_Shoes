"use client";
import React from "react";
import { story } from "../../constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
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
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
function Stories() {
  return (
    <div className="w-full auto">
      <div className="w-[95%] h-auto m-auto">
        <div className="w-full h-[80px] frc   justify-start mb-[15px] ">
          <h1
            id="italy"
            className=" text-[40px] font-bold text-slate-900 filter
            drop-shadow-lg ml-[46px]"
          >
            Top Stories
          </h1>
        </div>
        <div>
          <Splide
            options={{
              perPage: 4,
              perMove: 1,
              type: "loop",
              rewind: true,
              keyboard: "global",
              gap: "1rem",
              pagination: false,
              padding: "2rem",
              arrows: false,
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: -1,
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
            className="w-full h-auto"
          >
            {story.map((data, i: any) => (
              <SplideSlide
                key={i}
                className=" relative bg-slate-100 dark:bg-slate-900  min-w-[300px] h-[500px]   rounded-[10px]  p-[10px] 
                bg-gradient-to-b fcc justify-between "
              >
                <div className="w-full h-auto rounded-[8px] overflow-hidden">
                  <img src={data.img} />
                </div>
                <div className="fcc w-full h-auto">
                  <div className="w-full h-[60px] frc justify-between ">
                    <div id="italy" className="frc">
                      <BsFillSuitHeartFill className="text-rose-600 text-[20px] mr-[5px]" />{" "}
                      {data.like}
                    </div>
                    <div id="italy" className="frc">
                        <FaRegClock className="mr-[5px] text-[20px]"/>{data.time}
                    </div>
                    <div id="italy" className=" text-blue-600">
                        #{data.by}
                    </div>
                  </div>
                  <div id='italy' className="w-full h-auto">
                     <h1 className=" text-[17px] font-bold dark:text-slate-100  text-slate-900">{data.title}</h1>
                  </div>
                  <div >
                     <p    className="text-[15px] dark:text-slate-100  text-slate-900">{data.text.slice(0,140)}...</p>
                  </div>               
                </div>
                <a href={data.url} id='italy' className="w-full active:scale-90 transition-all duration-100 cursor-pointer h-[40px] frc justify-center rounded-[5px] text-slate-100 
                   dark:text-slate-900 dark:bg-slate-100 bg-slate-900">
                     ReadMore
                </a>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Stories;
