"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/styles.module.css";
import { usePathname } from "next/navigation";
import { navIconSize } from "./Navbar";

export default function Sidebar({ onClose }) {
  // get current path to determine link behavior and styling
  const path = usePathname();
  const SidebarOption = ({ text, href }) => {
    const handleClose = (e) => {
      e.preventDefault();
      // if target is not current page, navigate to target. otherwise close sidebar
      const target = e.target.getAttribute("href");
      if (target !== path) {
        window.location = target;
      } else onClose();
    };

    return (
      <Link
        className={href === path ? styles.selected : styles.menuOption}
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
