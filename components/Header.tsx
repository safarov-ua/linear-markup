import Image from "next/image";
import logo from "../public/logo.svg";
import { Navbar } from "./Navbar";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import { Button } from "./Button";
import { NavbarMobile } from "./NavbarMobile";
import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";

export const Header = () => {
  const [isShowMobile, setIsShowMobile] = useState(false);

  useEffect(() => {
        setIsShowMobile(window.innerWidth <= 660);
  }, []);

  useEffect(() => {
    const windowResize = () => {
      if (window.innerWidth > 660 && isShowMobile === true) {
        setIsShowMobile(false);
      } else if (window.innerWidth <= 660 && isShowMobile === false) {
        setIsShowMobile(true);
      }
    };

    window.addEventListener("resize", windowResize);

    return () => window.removeEventListener("resize", windowResize);
  }, [isShowMobile]);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__item}>
          <Link href="/" className={styles.header__logo}>
            <Image className={styles.header__image} src={logo} alt="logo" />
            <span>Linear</span>
          </Link>
          {!isShowMobile && <><Navbar /><Dropdown /></>}
        </div>
        <div className={styles.header__item}>
          <Link href="/" className={styles.header__login_button}>
            Log in
          </Link>
          <Button isSmall>Sign up</Button>
          {isShowMobile && <NavbarMobile />}
        </div>
      </div>
    </header>
  );
};
