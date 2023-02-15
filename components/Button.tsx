import styles from "../styles/Button.module.scss";
import cn from "classnames";

export interface IButtonProps {
  isSmall?: boolean;
  children: React.ReactNode;
}

export const Button = (props: IButtonProps) => {
  const { isSmall, children } = props;

  return (
    <button
      type="button"
      className={cn(styles.button, isSmall ? styles.button__small : "")}
    >
      {children}
    </button>
  );
};
