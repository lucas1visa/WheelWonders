"use client";
//next imaga
import Image from "next/image";
// frame motions
import { motion } from "framer-motion";
//import swiper react componet and swiper stiles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
//variantes
import { fadeIn } from "/variants";
//iicons
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    message:
      "They truly exeeded my expetations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer",
  },
  {
    message:
      "They truly exeeded my expetations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer",
  },
];
export default function TestiomonialSlider() {
  return (
    <motion.div
    variants={fadeIn("up", 0.4)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.6 }}
    className=" container mx-auto">
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination ]}
        className="h-450 xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt=""
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary mb-12">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
