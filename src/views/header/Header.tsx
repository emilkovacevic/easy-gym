import { motion } from "framer-motion"


type Props = {}
const Header = (props: Props) => {
  return (
    <section
    className="border-b-2 relative z-10"
    >
    <motion.div
    initial={{ x: "100vw" }}
    animate={{ x: 0 }}
    transition={{ duration: 3 }}
    >
    <p>This is an announcement!</p>
  </motion.div>
    </section>
  )
}

export default Header