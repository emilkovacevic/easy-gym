import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Benefit = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      draggable
      variants={childVariant}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className="mt-5 rounded-md border-2 border-gray-200 bg-light-middle dark:bg-dark-middle px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <HashLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        to={`#${SelectedPage.Contact}`}
      >
        <p>Learn More</p>
      </HashLink>
    </motion.div>
  );
};

export default Benefit;
