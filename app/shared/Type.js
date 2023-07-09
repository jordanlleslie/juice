import styles from "../../styles/styles.module.css";

export const DisplayM = ({ children }) => {
  return <p className={styles.displayM}>{children}</p>;
};
export const DisplayL = ({ children }) => {
  return <p className={styles.displayL}>{children}</p>;
};
