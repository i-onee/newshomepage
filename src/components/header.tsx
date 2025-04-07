import style from "@/styles/header.module.css";
import { useMediaQuery } from "@/hook";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "@/utils";
import { useState, useEffect } from "react";

const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];
const Header: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={style.header}>
      <Link href="#">
        <Image
          className={style.logo}
          alt="logo"
          src="/svg/logo.svg"
          width={512}
          height={512}
        />
      </Link>

      {isMobile && (
        <button
          className={clsx(style.toggler, isOpen ? style.menu_e : style.menu_c)}
          onClick={toggleMenu}
          type="button"
        >
          <Image
            alt={isOpen ? "close menu" : "open menu"}
            src={`/svg/${isOpen ? "icon-menu-close" : "icon-menu"}.svg`}
            width={isOpen ? 32 : 40}
            height={isOpen ? 32 : 20}
            priority
          />
        </button>
      )}

      <div className={clsx(style.menu, `${!isOpen && style.hidden}`)}>
        <nav>
          {navLinks.map((text, index) => (
            <Link href="#" key={index}>
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
