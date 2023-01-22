import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import CallToActionBtn from "../../components/CallToAction";
type Props = {};

const Description = ({}: Props) => {
  return (
    <section className="w-5/6 mx-auto flex flex-wrap py-20">
      {/* GRAPHICS AND DESCRIPTION */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        {/* GRAPHIC */}
        <img
          className="mx-auto min-w-[350px]"
          alt="benefits-page-graphic"
          src={BenefitsPageGraphic}
        />

        {/* DESCRIPTION */}
        <div>
          {/* TITLE */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h2 className="text-light-heading dark:text-dark-heading  sm:text-xl my-4">
                  MILLIONS OF HAPPY MEMBERS {" "}
                  <span className="text-light-text_emphasis dark:text-dark-text_emphasis">
                  GETTING FIT
                  </span>
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
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="my-5">
              Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
              egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
              fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla
              nec. Consequat sed facilisis dui sit egestas ultrices tellus.
              Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci
              diam odio.
            </p>
            <p className="mb-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </motion.div>

          {/* BUTTON */}
          <div className="relative mt-16 ">
            <div className="text-center md:text-left before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <Link to='/register'><CallToActionBtn text={'Join Now'} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
