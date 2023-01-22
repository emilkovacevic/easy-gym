import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import CallToActionBtn from "../../components/CallToAction";
import FormModal from "../../components/FormModal";

const Form = () => {
  const width = useScreenWidth();
  const inputStyles = `mb-5 w-full rounded-lg bg-light-middle dark:bg-dark-middle
  px-5 py-3 placeholder-gray-500`;

  const [state, handleSubmit] = useForm('xpznlopp');

  if (state.succeeded) {
    return <FormModal />;
  }

  return (
    <section id="contact" className="mx-auto w-5/6 pt-24 pb-32">
      <div>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-light-heading  dark:text-dark-heading  sm:text-xl my-4">
            <span className="text-light-text_emphasis dark:text-dark-text_emphasis">
              JOIN NOW
            </span>{" "}
            TO GET IN SHAPE
          </h2>
          <p className="my-5">
            This is a website to showcase my work as a developer! By filling up this form, you will be sending me a message. I would love to hear your thoughts on it.
          </p>
          <p>You can visit my official website<a className="text-light-text_emphasis dark:text-dark-text_emphasis hover:underline focus:underline" target='_blank' rel='noreferrer' href="https://emilwebsite.vercel.app/"> here.</a></p>
          <p className='my-4'>Made by Emil</p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
               onSubmit={handleSubmit}
               method="POST"
            >
               <ValidationError
            prefix="NAME"
            field="NAME"
            errors={state.errors}
          />
               <label htmlFor="name" className="absolute left-[9999px]">Your Name</label>
              <input
                id='name'
                className={inputStyles}
                type="text"
                placeholder="NAME"
                required
              />

            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
             <label htmlFor="email" className="absolute left-[9999px]">Your Email</label>
              <input
                className={inputStyles}
                id="email"
                type="email" 
                name="email"
                placeholder="EMAIL"
                required
              />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
               <label htmlFor="text-area" className="absolute left-[9999px]">Add your message</label>
              <textarea
                id='text-area'
                className={inputStyles}
                placeholder="MESSAGE"
                rows={width > 1240 ? 10 : 3}
                cols={50}
                required
                />

              <button
                type="submit"
                className="mt-5"
              >
                <CallToActionBtn text={'SUBMIT'}  />
              
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Form;
