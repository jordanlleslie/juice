import Head from "next/head";
import styles from "./layout.module.css";
import Navbar from "./nav/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
