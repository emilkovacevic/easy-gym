import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CallToActionSpan from '../../components/CallToAction';

interface Props {
}

const NewsletterForm: React.FC<Props> = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmailValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // do something with email, such as send it to a server
    setEmail('');
    setError('');
    alert('Thank you for Subscribing')
  };

  const isEmailValid = (email: string) => {
    // Use a regular expression or other method to check email validity
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }} className="w-5/6 mx-auto flex justify-center flex-wrap mb-16 p-4 bg-light-middle dark:bg-dark-middle rounded-2xl">
      {/* GRAPHICS AND DESCRIPTION */}
      <div className="items-center justify-between gap-20 md:flex">
        {/* GRAPHIC */}
        <img
          className="w-full object-cover"
          alt="Subscribe to get Email"
          src="https://i.postimg.cc/sftgDR9b/image.jpg"
        />

        {/* DESCRIPTION */}
        <div className="p-6 md:p-12">
          <h1 className="font-serif text-xl font-medium text-center text-light-heading dark:text-dark-heading md:text-left">Get Diet and fitness tips in your inbox</h1>
          <p className="max-w-xs my-4 text-xs.leading-5.tracking-wide text-center md:text-left">Eat better and exercise better. Sign up for the Diet&Fitness newsletter</p>
          <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" className="p-2 px-4 text-center  text-zinc-900 dark:text-dark-text bg-light-background dark:bg-dark-background border border-zinc-600 placeholder:text-xs placeholder:text-center placeholder:md:text-left md:text-left focus:outline-none" />
              <button type="submit"><CallToActionSpan text='Subscribe' /></button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  )
}

export default NewsletterForm




