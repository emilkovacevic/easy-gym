import { motion } from "framer-motion";
import supplementImg from "../../assets/image7.jpg";
import { Link } from "react-router-dom";
import CallToActionSpan from "../../components/CallToAction";

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
      {/* GRAPHICS AND DESCRIPTION */}
      <div className="mt-8 items-center justify-between gap-20 lg:mt-12 md:flex">
        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <div>
                <h2 className="text-light-heading dark:text-dark-heading  sm:text-xl my-4">
                  We sell the{" "}
                  <span className="text-light-text_emphasis dark:text-dark-text_emphasis">
                  BEST PRODUCTS
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* DESCRIPT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5 text-justify">
              Quis amet vulputate tincidunt at in nulla nec. Consequat sed
              facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
              pretium sapien proin integer nisl. Felis orci diam odio.
            </p>
            <p className="mb-5 text-justify">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </motion.div>

          {/* BUTTON */}
          <div className="relative mt-16">
            <div className="text-center md:text-right before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <Link to='/register'><CallToActionSpan text={'Shop'} /></Link>
            </div>
          </div>
        </div>
         {/* GRAPHIC */}
         <img
          className="mx-auto my-12 lg:my-0 min-w-[350px]"
          alt="products-page-graphic"
          src={supplementImg}
        />
      </div>
    </motion.section>
  );
};

export default Products;

