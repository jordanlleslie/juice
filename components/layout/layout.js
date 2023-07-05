import { useState } from "react";
import Head from "next/head";
import styles from "../../styles.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();
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
      <Sidebar onClose={handleCollapse} pathname={router.asPath} />
      {/* MAIN CONTENT */}
      <div className={styles.mainContainer} onClick={handleClickOut}>
        <Navbar handleCollapse={handleCollapse} />
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </div>
  );
}
