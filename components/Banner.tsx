import Image from "next/image";
import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "../styles/Banner.module.scss";

export const Banner = () => {
  const [isShowAnimation, setIsShowAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 230 && isShowAnimation === false) {
        setIsShowAnimation(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isShowAnimation]);

  return (
    <section className={styles.banner__container}>
      <Image
        className={cn(
          styles.banner__image,
          isShowAnimation ? styles.banner__image_active : ""
        )}
        src="/../public/promo-pic.webp"
        alt="promo-image"
        width="1200"
        height="1000"
      />
    </section>
  );
};
