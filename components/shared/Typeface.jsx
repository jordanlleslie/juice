import styles from "../../styles/utils.module.css";

export function DisplayM(props) {
  return (
    <div className={styles.displayM} style={{ color: props.color }}>
      {props.text}
    </div>
  );
}
