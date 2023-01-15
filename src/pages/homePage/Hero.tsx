import heroImage from "../../assets/hero-image.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: [-50, 0, 50],
      transition: { duration: 1 },
    });
  }, [controls]);

  return (
    <div id="home" className="relative top-[-85px]">
      <div className="w-full absolute text-center bg-[rgba(0,0,0,0.4)] h-full flex flex-col justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-amber-800 drop-shadow-sm">
          Easy Gym
        </h1>
        <p className="mt-8 font-bold text-2xl w-5/6 mx-auto drop-shadow-lg text-amber-500">
          Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
          Studios to get the Body Shapes That you Dream of.. Get Your Dream Body
          Now.
        </p>
        <motion.div
       style={{ y: -10,}}
       animate={{ y: 10}}
       transition={{
           delay: 0.5,
           ease: [0.075, 0.82, 0.165, 1],
           duration: 1.5,           
           repeat: Infinity,
           repeatType: "mirror",

       }}
        >

        <HashLink to="/#benefits" className="text-4xl flex justify-center m-12">
          <BsFillArrowDownCircleFill color="white" />
        </HashLink>
        </motion.div>
      </div>
      <img src={heroImage} alt="cover photo" className="object-cover" />
    </div>
  );
};

export default Hero;
