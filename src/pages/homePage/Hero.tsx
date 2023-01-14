import heroImage from "../../assets/hero-image.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import {  useAnimation } from "framer-motion";
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
    <div id="home" className="relative top-[-70px]">
      <div className="w-full absolute text-center bg-[rgba(0,0,0,0.4)] h-full flex flex-col justify-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-amber-800 drop-shadow-sm">
          Easy Gym
        </h1>
        <p className="mt-8 font-bold text-2xl w-5/6 mx-auto drop-shadow-lg text-amber-500">
          Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
          Studios to get the Body Shapes That you Dream of.. Get Your Dream Body
          Now.
        </p>
       <HashLink to="/#about"
       className="text-4xl flex justify-center m-12"
       >
        <BsFillArrowDownCircleFill /></HashLink>
      </div>
      <img src={heroImage} alt="cover photo" className="object-cover"/>
    </div>
  );
};

export default Hero;
