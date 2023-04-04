import React from "react";
import { popularsales } from '../../constants'
import SelsItems from "./SelsItems";
function PopularSeals() {
  return (
    <div className="w-full h-auto  ">
      <div className="w-[90%] h-auto m-auto fcc items-start justify-between">
        <h1
          id="italy"
          className="text-5xl font-extrabold filter drop-shadow-sm text-black text-start"
        >
          Popular Sales
        </h1>
        <div className="w-full h-auto frc justify-between my-[30px]">
            {
              popularsales.map((data , index : any) => (              
                 <SelsItems data={data} index={index}/>
              ))
            }
        </div>
      </div>
    </div>
  );
}

export default PopularSeals;
