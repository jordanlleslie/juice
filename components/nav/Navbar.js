import Link from "next/link";
import Image from "next/image";
import Spacer from "../shared/Spacer";
import { DisplayM } from "../shared/Typeface";
import utilStyles from "../../styles/utils.module.css";

// TODO: Replace with Sass styles
const styles = {
  header: {
    padding: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
  },
  iconContainer: {},
  menuContainer: {
    justifyContent: "flex-end",
  },
};

// TODO: Replace with Sass styles
import { orange, gray } from "../../constants/Colors";

export default function Navbar() {
  return (
    <div style={styles.header}>
      <div style={styles.iconContainer}>
        <Link href="/" className={utilStyles.row}>
          <Image src="/images/JuiceLogo.svg" width={64} height={64} />
          <Spacer size={1} />
          <DisplayM text="Emory Juice" color={orange.o} />
        </Link>
      </div>
      <div style={styles.menuContainer} className={utilStyles.row}>
        <Image src="/images/Menu.svg" width={64} height={64} />
      </div>
    </div>
  );
}
