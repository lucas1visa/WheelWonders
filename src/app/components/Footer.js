"use client";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import Copyright from "./Copyright";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import { Link } from "react-scroll";
export default function Footer() {
  return (
    <footer className=" pt-20 bg-white z-20" id="contact">
      <div className=" container mx-auto mb-24 gap-y-6">
        {/* grid  */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
          {/* logo */}
          <div className="flex flex-col flex-1 gap-y-8">
            <Link
              to={"home"}
              smooth={true}
              spy={true}
              className=" cursor-pointer"
            >
              <Image src={"icons/logo.svg"} width={200} height={200} alt="" />
            </Link>
            {/* text */}
            <div className="text-secondary">
              Fugiat id velit pariatur dolor minim pariatur exercitation
              deserunt laboris.
            </div>
            {/* phone & email */}
            <div className=" flex flex-col gap-y-4 font-semibold">
              {/* phone */}
              <div className=" flex items-center gap-x-[10px]">
                <FaPhone />
                <div className=" font-medium">(54)387-5537012</div>
              </div>
              {/* email */}

              <div className=" flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className=" font-medium">visalucas557@gmail.com</div>
              </div>
            </div>
          </div>
          {/* links */}
          <div className="flex-1 flex flex-col xl:items-center" >
            <div className="flex-1 flex flex-col xl:items-center">
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className=" flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="#">Salta</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Mobiles</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">How we work</a>
                </li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-2">
              <div className="text-secondary">Mon-Fri:</div>
              <div className=" font-semibold">09:00AM - 09:00PM</div>
            </div>
            <div className="flex gap-x-2">
              <div className=" text-secondary">Sat:</div>
              <div className=" font-semibold">09:00AM - 07:00PM</div>
            </div>
            <div className="flex gap-x-2">
              <div className=" text-secondary">Sun:</div>
              <div className=" font-semibold">Closed</div>
            </div>
            </div>
          </div>
           {/* newsletter */}
           <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Newsletter</h3>
            <div className=" mb-9 text-secondary">Laborum officia cupidatat elit nulla esse enim enim pariatur aliquip velit elit.</div> 
             {/*form */}
             <form className="flex gap-x-2 h-14">
                <input type="text" placeholder="Your email" className=" outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"></input>
                <button type="submit" className=" btn btn-sm btn-accent  w-24">Submit</button>
             </form>
          </div>
        </div>
      </div>
      <Copyright/>
    </footer>
  );
}
