import Head from "next/head";
import styles from "../../styles.module.css";
import Navbar from "../nav/Navbar";
// TODO: Replace with Sass styles

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layoutContainer}>{children}</div>
    </div>
  );
}
