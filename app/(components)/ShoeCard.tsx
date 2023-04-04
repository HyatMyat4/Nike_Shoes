import React from "react";
import { Tilt } from "react-tilt";
import { AiOutlineStar } from "react-icons/ai";
import { SiShopify } from "react-icons/si";

export default function ShoeCard({ data }: any) {
  return (
    <Tilt // This way is work But not good way to realworld
      className={` relative bg-gradient-to-b fcc  w-[410px] h-[300px] rounded-[10px]  mb-[25px]
    ${
      data.color
        ? data.color
        : "from-violet-500 to-indigo-500 from-indigo-700 to-indigo-700 from-sky-600 to-indigo-600 from-green-500 to-emerald-500 from-orange-500 to-amber-500 from-gray-900 to-yellow-500 from-blue-500 to-cyan-500 from-yellow-500 to-yellow-500 from-red-500 from-[#936550] to-orange-900 from-slate-900 to-black  from-blue-900 to-blue-500  to-rose-500 from-blue-600 to-blue-500 shadow-blue-500 shadow-rose-500 shadow-violet-500"
    }
    `}
    >
      <div id="italy" className="fcc select-none  text-slate-200 ">
        <h3 className=" text-lg font-bold filter drop-shadow-sm ">
          {data.title}
        </h3>
        <div className="frc justify-center mt-[5px]">
          <span className="px-[12px] py-[3px] rounded-[5px] bg-slate-200 text-black">
            ${data.price}
          </span>
          <div className="ml-[15px] frc justify-center">
            <AiOutlineStar className="text-[20px] " />
            <span className="ml-[4px]">{data.rating}</span>
          </div>
        </div>
        <div className="frc mt-[10px] justify-center text-black">
          <div className="p-[4px] active:scale-90 transition-all duration-100 rounded bg-slate-100 cursor-pointer ">
            <SiShopify className="text-[24px]" />
          </div>
          <div className="px-[20px] py-[4px] active:scale-90 transition-all duration-100 cursor-pointer bg-slate-100 rounded ml-[12px]">
            Buy Now
          </div>
        </div>
      </div>
      <div className="">
         <div className=" rotate-0 hover:rotate-[-12deg]  transition-all  duration-700 ease-in-out">
            <img 
            src={data.img} 
            className="w-[280px] h-auto"
            />
         </div>
      </div>
    </Tilt>
  );
}
/* it Should be like thais 
  => it applied to html element in browser but not show colour 
 
    <Tilt
      className={` relative bg-gradient-to-b fcc  w-[410px] h-[300px] rounded-[10px]  mb-[25px]  ${data.color} `}
    >
      <div id="italy" className="fcc select-none  text-slate-200 ">
        <h3 className=" text-lg font-bold filter drop-shadow-sm ">
          {data.title}
        </h3>
        <div className="frc justify-center mt-[5px]">
          <span className="px-[12px] py-[3px] rounded-[5px] bg-slate-200 text-black">
            ${data.price}
          </span>
          <div className="ml-[15px] frc justify-center">
            <AiOutlineStar className="text-[20px] " />
            <span className="ml-[4px]">{data.rating}</span>
          </div>
        </div>
        <div className="frc mt-[10px] justify-center text-black">
          <div className="p-[4px] active:scale-90 transition-all duration-100 rounded bg-slate-100 cursor-pointer ">
            <SiShopify className="text-[24px]" />
          </div>
          <div className="px-[20px] py-[4px] active:scale-90 transition-all duration-100 cursor-pointer bg-slate-100 rounded ml-[12px]">
            Buy Now
          </div>
        </div>
      </div>
      <div className="">
         <div className=" rotate-0 hover:rotate-[-12deg]  transition-all  duration-700 ease-in-out">
            <img 
            src={data.img} 
            className="w-[280px] h-auto"
            />
         </div>
      </div>
    </Tilt>

*/