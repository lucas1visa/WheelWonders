"use client";

import React, { useState } from "react";

//handless ui
import { Menu } from "@headlessui/react";

//icons
import { FaMapMarkerAlt } from "react-icons/fa";

//location data

const locations = ["General Guemes, Argentina", "Espora 56, Salta", "Parque 25"];
export default function LocationSelection() {
  const [location, setLocation] = useState("Select Location");
  return (
    <Menu as="div" className=" w-full  flex xl:flex-row">
      <div className=" relative flex-1">
        {/* btn */}
        <Menu.Button className=" dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className=" w-full h-16 xl:h-full flex justify-center xl:justify-start  xl:border-r xl:border-blackl/10">
            <div className="flex flex-col justify-center">
              <div className=" flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />

                <div className="text-[15px] uppercase font-bold ">Seleccionar ubicación</div>
              </div>
              <div className=" uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        {/* items */}
        <Menu.Items className='drodown-menu w-full  shadow-lg absolute -top-56 xl:top-[90px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:translate-x-0 text-sm text-center xl:text-start bg-white max-w-[332px] py-6 rounded-[10px]'>{locations.map((location, index)=>{
            return <div key={index} onClick={()=>setLocation(location)} className=" cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] uppercase">{location}</div>
        })}</Menu.Items>
      </div>
    </Menu>
  );
}