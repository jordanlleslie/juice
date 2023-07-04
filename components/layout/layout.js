import { useState } from "react";
import Head from "next/head";
import styles from "../../styles.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles.row} style={{ height: "1000px" }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layoutContainer}>
        <Navbar handleCollapse={handleCollapse} />
        <div className={styles.childrenContainer}>{children}</div>
      </div>
      <Sidebar onClose={handleCollapse} collapsed={collapsed} />
    </div>
  );
}
