import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion"

type Props = {
  id: number,
  title: string,
  info: string
}

const Question = ({ title, info }: Props) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='relative p-4 rounded shadow-md bg-light-background dark:bg-dark-background m-2'>
      <header className='flex justify-between'>
        <h4 onClick={() => setExpanded(!expanded)} className='text-lg font-medium cursor-pointer'>
          {title}
        </h4>
        <button className=' px-3 py-2 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:outline-none' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <AnimatePresence>
        {expanded && (
          <motion.div 
            className="mt-4"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.1 }}
          >
            <p className='text-light-text dark:text-dark-text'>{info}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default Question
