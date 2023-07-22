import React from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ChipProps {
  icon: IconProp;
  text: string;
}

function LayoutChip({ icon, text }: ChipProps) {
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={icon} color={"#aeafb4"}/>
      <p>{text}</p>
    </div>
  );
}

export default React.memo(LayoutChip);
