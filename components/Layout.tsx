import { Header } from "./Header";
import styles from "../styles/Layout.module.scss";

export interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = (props: ILayoutProps) => {
  const { children } = props;

  return (
    <section className={styles.layout}>
      <div className={styles.layout__inner}>
        <Header />
        <main>{children}</main>
      </div>
    </section>
  );
};
