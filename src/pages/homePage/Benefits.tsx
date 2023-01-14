import { motion } from "framer-motion"
import { BenefitType }  from '../../shared/types'
  import { BiHome } from 'react-icons/bi';
  import { HiUserGroup } from 'react-icons/hi';
  import { HiAcademicCap } from 'react-icons/hi';
import Benefit from "./Benefit";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
      icon: <BiHome className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <HiUserGroup className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <HiAcademicCap className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque.",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

type Props = {}

function Perks({}: Props) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
     
    >
      {/* HEADER */}
      <motion.div
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
      </motion.div>

      {/* BENEFITS */}
      <motion.div
        className="mt-5 items-center justify-between gap-8 md:flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {benefits.map((benefit: BenefitType) => (
          <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </motion.div>
    </motion.div>
    <h2 className="text-light-heading dark:text-dark-heading sm:text-xl my-8 text-center">MORE THAN JUST GYM.</h2>
        <p className="my-5 text-sm text-center">
          We provide world class fitness equipment, trainers and classes to
          get you to your ultimate fitness goals with ease. We provide true
          care into each and every member.
        </p>
  </section>
  )
}

export default Perks