import styles from "../styles/IconButton.module.scss";

export interface IButtonProps {
  children: React.ReactNode;
}

export const IconButton = (props: IButtonProps) => {
  const { children } = props;

  return (
    <button
      type="button"
      className={styles.icon_button}
    >
      {children}
      <div className={styles.icon_button__icon}>→</div>
    </button>
  );
};
