import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
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
        <li className={`${styles.navbar__item} ${styles.navbar__item_desktop}`}>
          <Link className={styles.navbar__link} href="/">
            Customers
          </Link>
        </li>
        <li className={`${styles.navbar__item} ${styles.navbar__item_desktop}`}>
          <Link className={styles.navbar__link} href="/">
            Changelog
          </Link>
        </li>
        <li className={`${styles.navbar__item} ${styles.navbar__item_desktop}`}>
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
  );
};
