import styles from "../../styles/styles.module.css";

export default function VideoModal({ url }) {
  return (
    <div className={styles.modal}>
      <iframe
        width="560"
        height="315"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        className={styles.video}
        loading="eager"
      ></iframe>
    </div>
  );
}
