import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Dropdown.module.scss";
import cn from "classnames";
import { IoIosPeople } from "react-icons/io";
import { RiLeafFill, RiShoppingBagFill } from "react-icons/ri";

export const Dropdown = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <nav
      className={styles.dropdown}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <h3
        className={cn(
          styles.dropdown__title,
          isHover ? styles.dropdown__title_active : ""
        )}
      >
        Company
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#8A8F98">
          <path d="M4.53 5.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.054.007l4-3.903a.75.75 0 0 0-1.048-1.073l-3.47 3.385L4.53 5.47Z"></path>
        </svg>
      </h3>
      {isHover && (
        <ul className={styles.dropdown__list}>
          <li className={styles.dropdown__item}>
            <Link className={styles.dropdown__link} href="/">
              <IoIosPeople /> About
            </Link>
          </li>
          <li className={styles.dropdown__item}>
            <Link className={styles.dropdown__link} href="/">
              <RiLeafFill /> Blog
            </Link>
          </li>
          <li className={styles.dropdown__item}>
            <Link className={styles.dropdown__link} href="/">
              <RiShoppingBagFill /> Careers
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
