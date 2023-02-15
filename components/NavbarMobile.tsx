import { useState } from "react";
import Link from "next/link";
import styles from "../styles/NavbarMobile.module.scss";

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={styles.navbar__icon}
        onClick={() => {
          onToggleNavbar();
        }}
      >
      </div>
      {isOpen && (
        <div className={styles.navbar__container}>
          <nav className={styles.navbar__inner}>
            <ul className={styles.navbar__list}>
              <li className={styles.navbar__item}>
                <Link className={styles.navbar__link} href="/">
                  Features
                </Link>
              </li>
              <li className={styles.navbar__item}>
                <Link className={styles.navbar__link} href="/">
                  Method
                </Link>
              </li>
              <li className={styles.navbar__item}>
                <Link className={styles.navbar__link} href="/">
                  Customers
                </Link>
              </li>
              <li className={styles.navbar__item}>
                <Link className={styles.navbar__link} href="/">
                  Changelog
                </Link>
              </li>
              <li className={styles.navbar__item}>
                <Link className={styles.navbar__link} href="/">
                  Integrations
                </Link>
              </li>
              <li className={styles.navbar__item}>
                <Link className={styles.navbar__link} href="/">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
