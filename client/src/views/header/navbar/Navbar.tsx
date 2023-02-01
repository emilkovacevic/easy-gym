import { useState } from "react";
import { LINKS } from "../../../shared/types";
import { HashLink } from "react-router-hash-link";
import { useTheme } from "../../../hooks/useTheme";
import { useStickyNav } from "../../../hooks/useStickyNav";
import { motion } from "framer-motion";
import { SelectedPage } from '../../../shared/types'
import { BsCart2 } from "react-icons/bs";
import ProductCart from "../../../components/ProductCart";
import { IoIosMenu } from 'react-icons/io'

type Props = {};

const Navbar = (props: Props) => {
  const { theme, handleThemeSwitch } = useTheme();
  const [mobileNavMenu, setMobileNavMenu] = useState(false);
  const [productCartOpen, isProductCartOpen] = useState(false)
  const { isSticky } = useStickyNav();

  return (
<nav
  className={`capitalize block justify-between p-2 dark:text-dark-nav_text text-light-nav_text font-semibold ${isSticky &&
    "font-normal fixed top-0 z-50 w-full text-light-nav_text_scroll dark:text-dark-nav_text_scroll bg-light-nav_bg dark:bg-dark-nav_bg border-b-2 border-light-nav_dropshadow dark:border-dark-nav_dropshadow"
    } `}
>
  <div className="flex w-5/6 m-auto justify-between">
    <h2><HashLink className="hover:text-light-nav_hover dark:hover:text-dark-nav_hover" to='/'>EasyGym</HashLink></h2>

    {/* mobile layout */}
    {!mobileNavMenu && (
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMobileNavMenu((prev) => !prev)}
        >
          <IoIosMenu />
        </button>
      </div>
    )}

    {mobileNavMenu && (
      <motion.div
        className='mx-auto md:hidden bg-gray-400 p-4 absolute z-50 rounded-l-xl right-0 '
        initial='hidden'
        onClick={() => setMobileNavMenu((prev) => !prev)}
        animate={mobileNavMenu ? 'visible' : 'hidden'}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
            <ul className="h-full">
              <li className="my-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
                <HashLink to={`/#${SelectedPage.Home}`}>
                  {SelectedPage.Home}
                </HashLink>
              </li>
              <li className="my-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
                <HashLink to={`/#${SelectedPage.About}`}>
                  {SelectedPage.About}
                </HashLink>
              </li>
              <li className="my-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
                <HashLink to={`/#${SelectedPage.Classes}`}>
                  {SelectedPage.Classes}
                </HashLink>
              </li>
              <li className="my-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
                <HashLink to={`/#${SelectedPage.Contact}`}>
                  {SelectedPage.Contact}
                </HashLink>
              </li>
              {LINKS.map((link) => (
                <li className="my-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
                  <HashLink key={link.id} to={link.path}>
                    {link.path}
                  </HashLink>
                </li>
              ))}
              <li><button type="button" onClick={() => isProductCartOpen(prev => !prev)} className="my-2 sm:mx-4 hover:text-light-nav_hover dark:hover:text-dark-nav_hover"><BsCart2 /></button></li>
              <li><button type="button" className="my-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover" onClick={handleThemeSwitch}>
                {theme === "dark" ? <span>🌙</span> : <span>🌞</span>}
              </button>
              </li>
            </ul>
          </motion.div>
        )}


        {/* desktop layout */}
        <ul className="hidden md:flex">
          <li className="mx-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
            <HashLink to={`/#${SelectedPage.Home}`}>
              {SelectedPage.Home}
            </HashLink>
          </li>
          <li className="mx-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
            <HashLink to={`/#${SelectedPage.About}`}>
              {SelectedPage.About}
            </HashLink>
          </li>
          <li className="mx-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
            <HashLink to={`/#${SelectedPage.Classes}`}>
              {SelectedPage.Classes}
            </HashLink>
          </li>
          <li className="mx-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
            <HashLink to={`/#${SelectedPage.Contact}`}>
              {SelectedPage.Contact}
            </HashLink>
          </li>

          {LINKS.map((link) => (
            <li key={link.id} className="mx-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover">
              <HashLink key={link.id} to={link.path}>
                {link.path}
              </HashLink>
            </li>
          ))}
          <li><button type="button" onClick={() => isProductCartOpen(prev => !prev)} className="mx-4 hover:text-light-nav_hover dark:hover:text-dark-nav_hover"><BsCart2 /></button></li>
          <li className="mx-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover" >
            <button type="button" onClick={handleThemeSwitch}>


              {theme === "dark" ? <span>🌙</span> : <span>🌞</span>}

            </button>
          </li>
        </ul>
      </div>
      {/* Product Cart */}
      <div className="relative">
        {productCartOpen && <ProductCart isProductCartOpen={isProductCartOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;
