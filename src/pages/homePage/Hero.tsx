import heroImage from "../../assets/hero-image.jpg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Hero = () => {

return (
    <div className="relative min-h-screen w-screen text-center">
      <img
        className="absolute h-full w-full object-cover"
        src={heroImage}
        alt="background"
      />
      <div className="absolute h-full w-full p-10">
      <div className="bg-[#1f1e1e59] dark:bg-[#1f1e1ead] flex flex-col justify-center items-center min-h-screen md:min-h-full px-4 sm:w-4/5 w-full  grow m-auto text-white drop-shadow-lg rounded-b-xl md:rounded-3xl">
          <h2 className="text-md sm:text-xl md:text-2xl">Wellcome to</h2>
        <h1 className="text-light-heading  dark:text-dark-heading text-2xl p-4 sm:text-3xl md:text-4xl lg:text-5xl text-center font-medium">
            <span className="text-light-text_emphasis dark:text-dark-text_emphasis">
            Easy{' '}
            </span>
            Gym
        </h1>
        <hr className="mt-8 px-8 sm:mt-12"/>
        <p className="mt-8 sm:mt-12 lg:mt-16 text-sm sm:text-lg lg:text-2xl w-5/6 mx-auto drop-shadow-lg p-4 font-semibold tracking-widest ">
          The easy gym, best known for: New Equipment, Best Instructors, 24h/7d working hours and Free Parking 
        </p>
        
        <HashLink to="/#about" className="text-4xl mx-auto w-12 h-12 flex justify-center my-12">
        <motion.div
       style={{ y: -10,}}
       animate={{ y: 10}}
       transition={{
           delay: 0.5,
           ease: [0, 0.25, 0.75, 1],
           duration: 1,           
           repeat: Infinity,
           repeatType: "mirror",

       }}
       whileHover={{
        y: 10,
        scale:1.5
      }}
        >
          <BsFillArrowDownCircleFill color="white" />
        </motion.div>
        </HashLink>
      </div>
      </div>
    </div>
  );
};


export default Hero;
