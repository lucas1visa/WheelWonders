"use client";
import { useContext, useEffect, useState } from "react";
//import image
import Image from "next/image";
//react scroll
import { Link } from "react-scroll";
//Component
import SearchMobiles from "./SearchMobiles";
//import media query hook
import { useMediaQuery } from "react-responsive";
//icons
import { BiMenuAltRight, BiX } from "react-icons/bi";
//search context
import { SearchContext } from "../context/search";
export default function Header() {
    const {setSearchActive}= useContext(SearchContext)

  const [header, setHeader] = useState(false);

  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: '( min-width:1300px)',
  });
  useEffect(() => {
    const handleScroll = () => {
      //header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      //search
      if(window.scrollY > 800){
        setSearchActive(true)
      }else{
        setSearchActive(false)

      }
    };
    //add event listener
    window.addEventListener("scroll", handleScroll);
    //remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : " bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px]  mx-auto z-20 transition-all duration-300`}
    >
      <div className=" xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
            
          >
            <Image src={"/icons/logo.png"} width={164} height={54} alt="" />
          </Link>
          {/* nav open menu */}
          <div onClick={()=>setNav(!nav)} className=" cursor-pointer xl:hidden">
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className=" text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav className={`${nav ? ' max-h-max py-8 px-4 xl:py-0': 'max-h-0 xl:max-h-max'} flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}>
            <Link className="cursor-pointer" to="home" activeClass="active" smooth={desktopMode} spy={true} >Inicio</Link>
            <Link className="cursor-pointer" to="cars" activeClass="active" smooth={desktopMode} spy={true} >Autos</Link>
            <Link className="cursor-pointer" to="about" activeClass="active" smooth={desktopMode} spy={true} >Acerca</Link>
            <Link className="cursor-pointer" to="why" activeClass="active" smooth={desktopMode} spy={true} >¿Por qué elegirnos?</Link>
            <Link className="cursor-pointer" to="testimonial" activeClass="active" smooth={desktopMode} spy={true} >Testimonios </Link>
            <Link className="cursor-pointer" to="contact" activeClass="active" smooth={desktopMode} spy={true} >Contacto</Link>
            <Link className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto" to="/" activeClass="active" smooth={desktopMode} spy={true} >Ver todos los autos</Link>
            <SearchMobiles/>
        </nav>
      </div>
    </header>
  );
}
