import { useState } from "react";
import Head from "next/head";
import styles from "../../styles.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  // COLLAPSE SIDEBAR
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleClickOut = () => {
    if (!collapsed) setCollapsed(true);
  };

  return (
    <div className={collapsed ? styles.withoutSidebar : styles.withSidebar}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* SIDEBAR */}
      <Sidebar onClose={handleCollapse} collapsed={collapsed} />
      {/* MAIN CONTENT */}
      <div className={styles.mainContainer} onClick={handleClickOut}>
        <Navbar handleCollapse={handleCollapse} />
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </div>
  );
}
