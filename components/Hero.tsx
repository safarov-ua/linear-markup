import styles from "../styles/Hero.module.scss";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          y: -80,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.4,
            type: "spring",
          },
        },
      }}
    >
      <div className={styles.hero}>
        <IconButton>Last Year You Said Next Year</IconButton>
        <h1 className={styles.hero__title}>
          Linear is a better way <br /> to build products
        </h1>
        <h2 className={styles.hero__subtitle}>
          Meet the new standard for modern software development. <br />
          Streamline issues, sprints, and product roadmaps.
        </h2>
        <Button>Get started {">"}</Button>
      </div>
    </motion.div>
  );
};
