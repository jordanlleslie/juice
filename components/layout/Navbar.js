import Link from "next/link";
import Image from "next/image";
import Spacer from "../shared/Spacer";
import { DisplayM } from "../shared/Typeface";
import styles from "../../styles.module.css";
import colors from "../../sass/base/_colors.module.scss";

export default function Navbar({ handleCollapse }) {
  return (
    <div className={styles.headerContainer}>
      <div>
        <Link href="/" className={styles.row}>
          <Image src="/images/JuiceLogo.svg" width={64} height={64} />
          <Spacer size={1} />
          <DisplayM text="Emory Juice" color={colors["orange-o"]} />
        </Link>
      </div>
      <Image
        src="/images/Menu.svg"
        width={64}
        height={64}
        onClick={handleCollapse}
      />
    </div>
  );
}
