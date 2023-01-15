import { motion } from "framer-motion"


type Props = {}
const Header = (props: Props) => {
  return (
    <section
    className="border-b-2 relative z-10"
    >
    <motion.div
    className="flex justify-between mx-4 py-2 flex-wrap"
    initial={{ x: "100vw" }}
    animate={{ x: 0 }}
    transition={{ duration: 3 }}
    >
    <p><a href="tel:+4733378901">Phone: +3541 50 564 01</a></p>
    <p>Adress: Jos Pas 411A</p>
  </motion.div>
    </section>
  )
}

export default Header