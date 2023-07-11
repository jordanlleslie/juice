"use client";

import "../../styles/globals.css";
import { useState } from "react";
import styles from "../../styles/styles.module.css";
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
    <>
      <div className={collapsed ? styles.withoutSidebar : styles.withSidebar}>
        {/* SIDEBAR */}
        <Sidebar onClose={handleCollapse} />
        {/* MAIN CONTENT */}
        <div className={styles.mainContainer} onClick={handleClickOut}>
          <Navbar handleCollapse={handleCollapse} />
          <div className={styles.childrenContainer}>{children}</div>
        </div>
      </div>
    </>
  );
}
