import { motion } from "framer-motion"
import { BiLocationPlus } from "react-icons/bi"
import { BsTelephone } from "react-icons/bs"


type Props = {}
const Header = (props: Props) => {
  return (
    <section
    className="border-b-2 relative z-10"
    >
    <motion.div
    className="flex justify-between mx-4 py-2 flex-wrap "
    initial={{ x: "100vw" }}
    animate={{ x: 0 }}
    transition={{ duration: 2 }}
    >
    <div><a className="flex" href="tel:+4733378901"><BsTelephone className="m-auto mr-4" />Phone: +3541 50 564 01</a></div>
    <div><a className="flex" href="tel:+4733378901"><BiLocationPlus className="m-auto mr-4" />Jos Pas 411A</a></div>
  </motion.div>
    </section>
  )
}

export default Header