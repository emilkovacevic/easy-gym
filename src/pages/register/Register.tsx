import { motion } from "framer-motion"
import CallToActionSpan from "../../components/CallToAction"

type Props = {}

const Register = ({}: Props) =>{
  return (
    <motion.div
    className="w-1/2 min-h-[80vh] mx-auto flex flex-col justify-center" 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    }}
    >
      <div className="my-4 bg-light-middle dark:bg-dark-middle p-4 rounded-md">
      <h1 className="text-light-heading  dark:text-dark-heading  sm:text-xl my-4">
            Wellcome to{' '}
            <span className="text-light-text_emphasis dark:text-dark-text_emphasis">
            EasyGym!
            </span>
          </h1>
      <form className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input className="dark:bg-dark  p-2 bg-slate-200 text-zinc-800" type="email" name="" id="email" />
        <label htmlFor="password">Password</label>
        <input className="dark:bg-dark-surface p-2 bg-slate-200 text-zinc-800" type="password" name="" id="" />
        <button className='m-6' type="submit" ><CallToActionSpan text='Log In' /></button>
      </form>
      </div>
    </motion.div>
  )
}

export default Register