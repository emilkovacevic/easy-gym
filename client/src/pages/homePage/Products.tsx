import { motion } from "framer-motion";
import supplementImg from "../../assets/image7.jpg";
import { Link } from "react-router-dom";
import CallToActionSpan from "../../components/CallToAction";
import { HashLink } from "react-router-hash-link";

type Props = {};

const Products = ({}: Props) => {
  return (
    <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }} className="w-5/6 mx-auto lg:flex flex-row-reverse flex-wrap py-10 bg-light-middle dark:bg-dark-middle rounded-xl px-4">
<div className=" bg-blueGray-200 -mt-24">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
          <div className="px-4 flex-auto">
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap items-center mt-16">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
          <i className="fas fa-user-friends text-xl"></i>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Working with us is a pleasure
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your workout to be lost. Let us help you with best proteins and vitamins.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          Buy our products to fast forward your workout.
        </p>
        <HashLink to='/products' className="font-bold text-blueGray-700 mt-8"><CallToActionSpan text="Visit the store"/></HashLink>
      </div>
      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-wordsw-full mb-2 shadow-lg rounded-lg bg-pink-500">
          <img alt="..." src={supplementImg} className="w-full align-middle rounded-t-lg" />
          <blockquote className="relative p-8 mb-4">
          <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
                  </svg>
         
            <h4 className="font-bold text-white">
              Top Notch Products
            </h4>
            <p className="text-md font-light mt-2 text-white">
             <q>When I started the diet program recommended by <span className="font-bold">Easy Gym</span>, I lost 10 kg and now I am in the best shape ever!</q>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
  <footer className="relative pt-8 pb-6 mt-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            <p>Made with Care</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
    </motion.section>
  );
}

export default Products;

