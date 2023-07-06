import Link from "next/link";
import Image from "next/image";
import styles from "../../styles.module.css";

export const navIconSize = 48;

export default function Navbar({ handleCollapse }) {
  return (
    <div className={styles.headerContainer}>
      <div>
        <Link href="/">
          <Image
            priority={true}
            className={styles.juiceIcon}
            src="/images/JuiceLogo.svg"
            width={navIconSize}
            height={navIconSize}
            alt="Emory Juice logo"
          />
        </Link>
      </div>
      <button className={styles.expandOnHover}>
        <Image
          src="/images/Menu.svg"
          width={0.8 * navIconSize}
          height={0.8 * navIconSize}
          alt="Open menu button"
          onClick={handleCollapse}
        />
      </button>
    </div>
  );
}
