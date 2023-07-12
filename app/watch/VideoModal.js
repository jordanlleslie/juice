import styles from "../../styles/styles.module.css";
import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

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
        frameBorder="0"
      ></iframe>
    </Modal>
  );
}

export function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div ref={overlay} className={styles.modal} onClick={onClick}>
      {children}
    </div>
  );
}
