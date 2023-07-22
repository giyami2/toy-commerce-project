import React from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import LayoutHeader from "@/components/commons/layout/header/LayoutHeader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faMagnifyingGlass, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

interface HeaderProps {
  name: string | undefined;
}

function Header({ name }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <LayoutHeader>
      <div className={styles.header__item} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} size="xl" color="#9e9e9e" />
      </div>
      <div className={styles.header__item__title}>{name}</div>
      <div className={styles.header__item}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" color="#9e9e9e" />
      </div>
      <div className={styles.header__item}>
        <FontAwesomeIcon icon={faArrowUpFromBracket} size="xl" color="#9e9e9e" />
      </div>
    </LayoutHeader>
  );
}

export default React.memo(Header);
