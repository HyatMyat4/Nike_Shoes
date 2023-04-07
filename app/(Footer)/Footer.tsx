import React from "react";
import { footerAPI } from "../../constants";
function Footer() {
  return (
    <div className="w-full h-[300px] overflow-hidden">
      <div className="w-[90%] h-full frc justify-around ">
        {footerAPI.titles.map((data, i: any) => (
          <div key={`${data.title}/${i}`} className=" fcc justify-between text-start ">           
            <div id="italy" className="w-full h-auto mb-[10px] text-[18px] font-bold ">
              {data.title}
            </div>     
            {
              data.link.map((link , j : any ) => (
                <div className="w-full h-auto my-[5px] ">
                <span key={`${link}/${i}`} 
                className=" hover:underline cursor-pointer font-medium   text-start">
                   {link}
                </span>
                </div>
              ))
            }     
          
          </div>
        ))}
        <div className="fcc justify-between">
            <div className=" animate-bounce cursor-pointer">
               <img src="/logo3.png" 
                className="w-[150px] h-auto"
               />
            </div>      
        </div>
      </div>
    </div>
  );
}

export default Footer;
