import Link from "next/link";
import Image from "next/image";
import styles from "../../styles.module.css";
import { useRouter } from "next/router";

function SidebarOption({ text, href }) {
  const pathname = useRouter().asPath;
  return (
    <Link
      className={href === pathname ? styles.selected : styles.menuOption}
      href={href}
    >
      {text}
    </Link>
  );
}

export default function Sidebar({ onClose, pathname }) {
  return (
    <div className={styles.sidebar}>
      <div id="sidebarContainer" className={styles.sidebarContainer}>
        <button>
          <Image
            src="images/Close.svg"
            width={48}
            height={48}
            onClick={onClose}
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
