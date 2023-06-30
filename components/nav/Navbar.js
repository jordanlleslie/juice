import Link from "next/link";
import Image from "next/image";
// import Spacer from "../shared/Spacer";

const styles = {
  header: {
    padding: "36px 72px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerOption: {
    margin: "0px 32px",
    textDecoration: "none",
  },
};

export default function Navbar() {
  return (
    <>
      <div style={styles.header}>
        <div>
          <Link href="/"><Image src="/images/JuiceMainLogo.svg" width={240} height={100}/></Link>
        </div>
        <div>
          <Link style={styles.headerOption} href="/news">
            News
          </Link>
          <Link style={styles.headerOption} href="/contact">
            Contact
          </Link>
          <Link style={styles.headerOption} href="/support">
            Support
          </Link>
        </div>
      </div>
    </>
  );
}
