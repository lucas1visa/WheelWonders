"use client";
// next image
import Image from "next/image";
//icons
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from "react-icons/md";
//react count up
import CountUp from "react-countup";
//import react intersectionm observer
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variantes
import { fadeIn } from "/variants";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className=" section flex items-center " id="about" ref={ref}>
      <div className=" container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* Image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className=" flex-1 mb-8 xl:mb-0"
          >
            <Image
              className=" rounded-[20px]"
              src={"/images/about/car01.png"}
              width={600}
              height={448}
              alt=""
            />
          </motion.div>
          {/* text & stats */}
          <div className=" flex-1 flex items-center xl:justify-center ">
            <div className=" xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="h2"
              >
                Servicios automotrices
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="mb-[42px] max-w-md"
              >
                Compra, elige, selecciona y repara con facilidad. Nuestras
                ubicaciones convenientes, variedad de tipos de automóviles y
                puntos de reparación confiables garantizan una experiencia
                automovilística sin complicaciones.
              </motion.p>
              {/* stats */}
              <motion.div
                className=" flex items-center gap-x-10 mb-12"
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
              >
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className=" uppercase text-[13px] font-semibold text-secondary">
                  Tipos de <br /> automóviles
                  </div>
                </div>
                {/* rental rental */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className=" uppercase text-[13px] font-semibold text-secondary">
                  Ventas <br />Globales
                  </div>
                </div>
                {/* repair points */}
                <div className="flex flex-col w-[100px]">
                  <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                  <div className="text-3xl font-black mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className=" uppercase text-[13px] font-semibold text-secondary">
                  Puntos de <br /> reparación
                  </div>
                </div>
                {/* btn */}
              </motion.div>
              <motion.button
                className=" hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]"
                variants={fadeIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
              >
                Ver todos los automóviles
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
