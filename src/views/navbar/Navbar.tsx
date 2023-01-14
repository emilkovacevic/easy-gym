import { useState } from "react";
import { LINKS } from "../../shared/types";
import { HashLink } from "react-router-hash-link";
import { useTheme } from "../../hooks/useTheme";
import { useStickyNav } from "../../hooks/useStickyNav";
import { motion } from "framer-motion";
import {SelectedPage} from '../../shared/types'


type Props = {};

const Navbar = (props: Props) => {
  const { theme, handleThemeSwitch } = useTheme();
  const [mobileNavMenu, setMobileNavMenu] = useState(false);
  const { isSticky } = useStickyNav();
  return (
    <nav
      className={`capitalize text-gray-800 justify-between p-2 relative z-10 dark:text-white font-semibold ${
        isSticky &&
        "font-normal sticky top-0 bg-light-nav_bg dark:bg-dark-nav_bg border-b-2 border-light-nav_dropshadow dark:border-dark-nav_dropshadow"
      } `}
      style={isSticky ? {color:"white"} : {}}
    >
      <div className="flex w-5/6 m-auto justify-between">
      <h2><HashLink className="hover:text-light-nav_hover dark:hover:text-dark-nav_hover" to='/'>EasyGym</HashLink></h2>

      {/* mobile layout */}
      {!mobileNavMenu && (
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setMobileNavMenu((prev) => !prev)}
          >
            ==
          </button>
        </div>
      )}

      {mobileNavMenu && (
        <motion.div 
        className='dark:bg-slate-800 bg-slate-200 absolute z-20 right-0 w-full h-screen top-0'
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
          <ul className="flex flex-col h-[50%] w-1/2 mt-[10%] mx-auto text-center justify-between relative">
          
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
          <li><button type="button" className="hover:text-light-nav_hover dark:hover:text-dark-nav_hover" onClick={handleThemeSwitch}>
          {theme === "dark" ?  <span>🌙'</span> : <span> 🌞 </span> }
          </button></li>
          <li>
            <button
              type="button"
              className="hover:text-light-nav_hover dark:hover:text-dark-nav_hover absolute top-0 right-[-25%]"
            >
              X
            </button>
          </li>
          </ul>
        </motion.div>
      )}

      {/* desktop layout */}
      <ul className="hidden sm:flex">
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
        <li className="mx-2 hover:text-light-nav_hover dark:hover:text-dark-nav_hover" >
          <button type="button" onClick={handleThemeSwitch}>
          
          
            {theme === "dark" ?  <span>🌙'</span> : <span> 🌞 </span> }

          </button>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
