import { useState } from "react";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import { PiFarmThin } from "react-icons/pi";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },
  {
    id: 2,
    title: "Favorites",
    link: "/favorites",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
  {
    id: 5,
    title: "Contacts",
    link: "/contacts",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="md:pt-4 relative z-30 bg-white">
        {/* Анимированный контейнер с плавным появлением */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container mx-auto py-4 flex justify-between items-center"
        >
          {/*  ______ Logo section ______Логотип с  иконкой  */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <p className="text-secondary">FARM</p>
            <PiFarmThin />
            <p className="">SHARING</p> 
          </div>
          {/*  ______ Menu section ______Десктопное меню - скрыто на мобильных устройствах */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {/* Рендерим пункты меню из массива */}
              {NavbarMenu.map((item) => (
                <li key={item.id} className="">
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-red-500 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              {/* Кнопка корзины с эффектом при наведении */}
              <button className="text-2xl hover:bg-[#de2c4d] hover:text-white rounded-full p-2">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile Hamburger icon - видна только на мобильных устройствах */}
          <div onClick={() => setOpen(!open)} className="md:hidden">
            {/* https://react-icons.github.io/react-icons/ */}
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>

        {/* Mobile Menu Content (Мобильное меню отображается отдельно от навигации) */}
      </nav>
      {/*  Передаем состояние открытия в мобильное меню */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
