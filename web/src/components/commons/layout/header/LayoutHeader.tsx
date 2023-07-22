import React from "react";
import _ from "lodash";
import styles from "./index.module.css";

interface HeaderProps {
  children: React.ReactNode;
}

function LayoutHeader({ children }: HeaderProps) {
  return (
    <div className={styles.wrapper}>
      <div>{children}</div>
    </div>
  );
}

export default React.memo(LayoutHeader);
