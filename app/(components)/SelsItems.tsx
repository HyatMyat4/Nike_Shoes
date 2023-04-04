import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { SiShopify } from "react-icons/si";

export default function SelsItems({ data, index }: any) {
  console.log(data.color);
  return (
    <div
      key={index}
      className={`w-[32%] h-[150px] group hover:scale-110 transition-all duration-500 ${
        data.color
          ? data.color
          : "from-violet-500 to-indigo-500 from-red-500 to-rose-500 from-blue-600 to-blue-500 shadow-blue-500 shadow-rose-500 shadow-violet-500"
      }
       relative bg-gradient-to-b ${
         data.shadow
       }  frc justify-between   rounded-[15px] p-[20px]  `}
    >
      <div id="italy" className="fcc select-none items-start text-slate-200 ">
        <h3 className=" text-lg font-bold filter drop-shadow-sm ">
          {data.title}
        </h3>
        <div className="frc mt-[5px]">
          <span className="px-[12px] py-[3px] rounded-[5px] bg-slate-200 text-black">
            ${data.price}
          </span>
          <div className="ml-[15px] frc">
            <AiOutlineStar className="text-[20px] " />
            <span className="ml-[4px]">{data.rating}</span>
          </div>
        </div>
        <div className="frc mt-[10px] text-black">
          <div className="p-[4px] active:scale-90 transition-all duration-100 rounded bg-slate-100 cursor-pointer ">
            <SiShopify className="text-[24px]" />
          </div>
          <div className="px-[20px] py-[4px] active:scale-90 transition-all duration-100 cursor-pointer bg-slate-100 rounded ml-[12px]">Buy Now</div>
        </div>
      </div>
      <div className="">
         <div className=" rotate-[-33deg] group-hover:rotate-[-12deg]  transition-all  duration-700 ease-in-out">
            <img 
            src={data.img} 
            className="w-[280px] h-auto"
            />
         </div>
      </div>
    </div>
  );
}
//rating
