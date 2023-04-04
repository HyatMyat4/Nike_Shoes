"use client"
import React from "react";
import {  toprateslaes } from '../../constants'
import ShoeCard from "./ShoeCard";
export default function TopRatedSels() {
  return (
    <div className="w-full h-auto">
      <div className="w-[90%] h-auto m-auto">
        <div className='w-full h-[80px] frc   justify-start mb-[15px] '>
            <h1 id='italy' className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
            drop-shadow-lg'>Top Rated Sales</h1>
        </div>
        <div className="w-full h-auto frc justify-between flex-wrap">
            {
                toprateslaes.map((data , index : any) => (
                    <ShoeCard  key={index} data={data}/>
                ) )
            }
        </div>
      </div>
    </div>
  );
}
