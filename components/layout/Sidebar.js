import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/styles.module.css";
import { useRouter } from "next/router";
import { navIconSize } from "./Navbar";

export default function Sidebar({ onClose }) {
  const SidebarOption = ({ text, href }) => {
    // get current path to determine link behavior and styling
    const currentPath = useRouter().asPath;
    const handleClose = (e) => {
      e.preventDefault();
      onClose();
      const target = e.target.getAttribute("href");
      // if target is not current page, navigate to target
      if (target !== currentPath) {
        window.location = target;
      }
    };
    return (
      <Link
        className={href === currentPath ? styles.selected : styles.menuOption}
        href={href}
        onClick={handleClose}
      >
        {text}
      </Link>
    );
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <button onClick={onClose} className={styles.closeButton}>
          <Image
            src="images/Close.svg"
            width={0.6 * navIconSize}
            height={0.6 * navIconSize}
            alt="Close menu button"
          />
        </button>
        <SidebarOption href="/" text="Home" />
        <SidebarOption href="/contact" text="Contact" />
        <SidebarOption href="/support" text="Support" />
        <SidebarOption href="/news" text="News" />
      </div>
    </div>
  );
}
