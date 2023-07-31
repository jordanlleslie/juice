import styles from "../../styles/styles.module.css";
import { Modal } from "../shared/Modal";

export default function VideoModal() {
  return (
    <Modal>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/6DZXFXTR0F4"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        className={styles.video}
        loading="eager"
        style={{ border: "none" }}
      ></iframe>
    </Modal>
  );
}
