import Link from "next/link";
import { DisplayM } from "./shared/Typography";
import styles from "../styles/styles.module.css";

export const metadata = {
  title: "Emory Juice Ultimate",
  description: "Not found",
};

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <DisplayM>Uh oh! This page doesn't exist.</DisplayM>
      <p className={styles.notFoundMessage}>
        You may have mistyped the address or the page may have been moved.
      </p>
      <Link className={styles.homeButton} href="/">
        Go back to Home
      </Link>
    </div>
  );
}
