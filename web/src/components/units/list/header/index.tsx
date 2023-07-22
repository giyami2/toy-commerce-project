import React from "react";
import _ from "lodash";
import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import LayoutHeader from "@/components/commons/layout/header/LayoutHeader";

interface HeaderProps {
  searchText: string;
  onChange: (text: string) => void;
}

function Header({ searchText, onChange }: HeaderProps) {
  return (
    <LayoutHeader>
      <div className={styles.header__item}>
        <FontAwesomeIcon icon={faBars} size="xl" color="#9e9e9e" />
      </div>
      <div className={styles.header__item__title}>
        <input
          type="text"
          placeholder="検索"
          className={styles.search_bar}
          name="searchText"
          value={searchText}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className={styles.header__item}>
        <FontAwesomeIcon icon={faBell} size="xl" color="#9e9e9e" />
      </div>
      <div className={styles.header__item}>
        <FontAwesomeIcon icon={faCheck} size="xl" color="#9e9e9e" />
      </div>
    </LayoutHeader>
  );
}

export default React.memo(Header);
