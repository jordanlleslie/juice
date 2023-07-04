import Link from "next/link";
import Image from "next/image";
import styles from "../../styles.module.css";

export default function Sidebar({ onClose, collapsed }) {
  console.log(styles.sidebarCollapsed + " " + styles.sidebarExpanded);
  return (
    <div
      className={collapsed ? styles.sidebarCollapsed : styles.sidebarExpanded}
    >
      <div className={styles.sidebarContainer}>
        <button onClick={onClose}>
          <Image src="images/Close.svg" width={48} height={48} />
        </button>
        <Link className={styles.menuOption} href="/">
          Home
        </Link>
        <Link className={styles.menuOption} href="/contact">
          Contact
        </Link>
        <Link className={styles.menuOption} href="/support">
          Support
        </Link>
        <Link className={styles.menuOption} href="/news">
          News
        </Link>
      </div>
    </div>
  );
}
