import Link from "next/link";
import Image from "next/image";
// import Spacer from "../shared/Spacer";

const styles = {
  header: {
    padding: "36px 72px",
    display: "flex",
    justifyContent: "space-between",
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
          <Link href="/">Emory Juice</Link>
        </div>
        <div>
          <Link style={styles.headerOption} href="/">
            Home
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
