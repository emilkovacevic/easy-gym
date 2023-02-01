import heroImage from "../../assets/hero-image.jpg";
import { HashLink } from "react-router-hash-link";

const Hero = () => {

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div
        className="absolute inset-0 bg-white/70 dark:bg-black/20 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/90 sm:to-white/5"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-black">
            Wellcome to the

            <strong className="block font-extrabold text-light-text_emphasis dark:text-dark-text_emphasis">
              Easy Gym.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-black">
            Best known for: New Equipment, Best Instructors, 24h/7d working hours and Free Parking
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <HashLink to="/register"
              className="block w-full rounded bg-light-text_emphasis dark:bg-dark-text_emphasis px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </HashLink>

            <HashLink
              to="#about"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-light-text_emphasis dark:text-dark-text_emphasis shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </HashLink>
          </div>
        </div>
      </div>
    </section>

  )
  }

export default Hero;
