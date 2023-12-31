"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

export default function Cta() {
  return (
    <section
      className="pt-24 xl:pt-48 justify-center flex items-center pb-0 bg-[#b2b7c2]/10"
      id="contact"
    >
      <div className=" container mx-auto">
        <div className=" flex flex-col md:flex-row xl:items-center">
          {/* text */}
          <div className=" flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0 ">
            <div className=" max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                className="h2"
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
              >
                ¡Descarga nuestra aplicación ahora y sal a la carretera con facilidad!
              </motion.h2>
              <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mb-10">
                Contáctanos y con gusto resolveremos todas tus dudas. ¡Escríbenos!
              </motion.p>
              {/* btn */}
              <motion.div
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="flex gap-x-3 justify-center md:justify-start"
              >
                <button className=" btn-cta ">
                  <Image
                    src={"/icons/buttons/google-play.svg"}
                    width={132}
                    height={36}
                    alt=""
                  />
                </button>
                <button className=" btn-cta ">
                  <Image
                    src={"/icons/buttons/app-store.svg"}
                    width={132}
                    height={36}
                    alt=""
                  />
                </button>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="flex-1 flex justify-center order-1 md:order-none"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Image
              src={"/images/cta/phone.svg"}
              width={320}
              height={640}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
