import styles from "../../styles/utils.module.css";

// TODO: Replace with Sass styles
export function DisplayM(props) {
  return (
    <div className={styles.displayM} style={{ color: props.color }}>
      {props.text}
    </div>
  );
}
