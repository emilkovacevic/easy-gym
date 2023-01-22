import { useState } from "react";
import { LINKS } from "../../shared/types";
import { HashLink } from "react-router-hash-link";
import { useTheme } from "../../hooks/useTheme";
import { useStickyNav } from "../../hooks/useStickyNav";
import { motion } from "framer-motion";
import {SelectedPage} from '../../shared/types'
import { BsCart2 } from "react-icons/bs";
import ProductCart from "../../components/ProductCart";
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import  useScrollListener from '../../hooks/useScrollListener'

type Props = {};

const Navbar = (props: Props) => {
  const { theme, handleThemeSwitch } = useTheme();
  const [mobileNavMenu, setMobileNavMenu] = useState(false);
  const [productCartOpen, isProductCartOpen] = useState(false)
  const { isSticky } = useStickyNav();
  const { disableScroll, setDisableScroll } = useScrollListener()


  return (
    <nav
      className={`capitalize justify-between p-2 relative z-10 dark:text-dark-nav_text text-light-nav_text font-semibold ${
        isSticky &&
        "font-normal sticky text-light-nav_text_scroll dark:text-dark-nav_text_scroll top-0 bg-light-nav_bg dark:bg-dark-nav_bg border-b-2 border-light-nav_dropshadow dark:border-dark-nav_dropshadow"
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
        className='border-b-2 z-20 right-0 w-full h-screen top-0'
        transition={{ duration: 0.25 }}
        initial='hidden'
        whileInView='visible'
        onClick={() => setMobileNavMenu((prev) => !prev)}
        variants={
          {
            hidden: {opacity:0, x:50},
            visible:{opacity:1, x:0},
          }
        }  
        >
          <ul className="flex flex-col min-h-screen justify-evenly text-right">
          
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
            <li>
              <HashLink key={link.id} to={link.path}>
                {link.path}
              </HashLink>
            </li>
          ))}
         <li><button type="button" onClick={()=>isProductCartOpen(prev => !prev)} className="sm:mx-4 hover:text-light-nav_hover dark:hover:text-dark-nav_hover"><BsCart2 /></button></li>
          <li><button type="button" className="hover:text-light-nav_hover dark:hover:text-dark-nav_hover" onClick={handleThemeSwitch}>
          {theme === "dark" ? <span>🌙</span> : <span>🌞</span>}
          </button></li>
          <li>
            <button
              type="button"
              className="hover:text-light-nav_hover dark:hover:text-dark-nav_hover absolute top-0 right-[-25%]"
            >
              x
            <IoIosClose />
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
        <li><button type="button" onClick={()=>isProductCartOpen(prev => !prev)} className="mx-4 hover:text-light-nav_hover dark:hover:text-dark-nav_hover"><BsCart2 /></button></li>
        <li className="mx-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover" >
          <button type="button" onClick={handleThemeSwitch}>
          
          
            {theme === "dark" ?  <span>🌙</span> : <span>🌞</span> }

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
