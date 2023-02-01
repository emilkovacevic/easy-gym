// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useScreenWidth } from "../../hooks/useScreenWidth";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import Card from "./Card";
import { motion } from "framer-motion";

interface ClassType {
  id: number;
  name: string;
  description?: string;
  image: string;
}

const CLASSES: Array<ClassType> = [
  {
    id: 1,
    name: "Weight Training Classes",
    description:
      "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    id: 2,
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem obcaecati commodi dicta iste in rem!",
    image: image2,
  },
  {
    id: 3,
    name: "Ab Core Classes",
    description:
      "Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    id: 4,
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image4,
  },
  {
    id: 5,
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
    image: image5,
  },
  {
    id: 6,
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: image6,
  },
];

type Props = {};

function Classes({}: Props) {
  const screenWidth = useScreenWidth();
  return (
    <section
      id="classes"
      className="w-5/6 mx-auto py-20 bg-light-middle dark:bg-dark-middle rounded-xl p-4"
    >
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
        <h2 className="text-light-heading dark:text-dark-heading sm:text-xl my-4 text-center">
          <span className="text-light-text_emphasis dark:text-dark-text_emphasis">OUR </span>
          CLASSES
        </h2>
        <p className="my-4 text-center">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
          mattis odio in risus nunc.
        </p>
      </motion.div>

      <ul className="my-4">
        <Swiper
        className="h-[350px]"
          slidesPerView={screenWidth > 1240 ? 4 : screenWidth > 960 ? 3 : screenWidth > 600 ? 2 : 1}
          spaceBetween={screenWidth > 600 ? 30 : 10}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {CLASSES.map((item: ClassType) => (
            <SwiperSlide
              key={item.id}
              className="flex justify-center align-middle"
            >
              <Card
                name={item.name}
                description={item.description}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </section>
  );
}

export default Classes;
