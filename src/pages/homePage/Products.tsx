import { motion } from "framer-motion";
import supplementImg from "../../assets/image7.jpg";
import { Link } from "react-router-dom";
import CallToAction from "../../components/CallToAction";

type Props = {};

function Products({}: Props) {
  return (
    <section
      id="about"
      className="w-5/6 m-auto flex flex-wrap justify-center items-center  mx-auto py-20 bg-light-middle dark:bg-dark-middle rounded-xl p-4"
    >
      {/* GRAPHICS AND DESCRIPTION */}
      <div className="sm:flex sm:flex-wrap sm:justify-between sm:items-center ">
        {/* DESCRIPTION */}
        <div className="mx-auto w-full sm:w-1/2 min-w-[300px]">
          {/* TITLE */}
          <div className="relative ">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h2 className="text-light-heading uppercase dark:text-dark-heading sm:text-xl my-4">
                  <span className="text-light-text_emphasis dark:text-dark-text_emphasis">
                  Hiqh Quality{" "}
                  </span>
                    Products
                </h2>
              </motion.div>
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
            <p className="my-5">
              Quis amet vulputate tincidunt at in nulla nec. Consequat sed
              facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
              pretium sapien proin integer nisl. Felis orci diam odio.
            </p>
            <p className="mb-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </motion.div>

          {/* BUTTON */}
          <div className="relative mt-16">
            <div className="before:absolute text-center md:text-left before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <Link
                to="/products"
                className="text-light-heading uppercase dark:text-dark-heading"
              >
               <CallToAction text={'Explore'}></CallToAction>
              </Link>
            </div>
          </div>
        </div>
        {/* GRAPHIC */}
        <div className="w-full sm:w-1/2 mx-auto px-4 sm:px-0 my-4 md:my-0">
          <img
            className="mx-auto object-cover"
            alt="products-page-graphic"
            src={supplementImg}
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
