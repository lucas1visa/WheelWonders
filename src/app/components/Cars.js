"use client";
//import component
import Brands from "./Brands";
import CarSileder from "./CarSileder";

//icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
//framer
import { motion } from "framer-motion";
//variants


export default function Cars() {
  return (
    <section className=" h-screen flex items-center" id="cars">
      <div className=" container mx-auto">
        <Brands />
        <CarSileder />
      </div>
    </section>
  );
}
