'use client'
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

const BackToTopBtn = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    // Agrega el evento 'scroll' dentro del useEffect
    window.addEventListener('scroll', handlerScroll);

    // Devuelve una función de limpieza para eliminar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, []); // Pasa un arreglo vacío como segundo argumento para que el useEffect se ejecute solo una vez al montar el componente

  return (
    <Link
      to="home"
      smooth={true}
      className={`${!isActive ? 'hidden' : 'fixed bg-accent hover:bg-accent-hover w-12 h-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white ' }`}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
};

export default BackToTopBtn;
