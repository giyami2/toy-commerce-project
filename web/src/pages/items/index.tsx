import _ from "lodash";
import styles from "./index.module.css";
import { ItemsLayout } from "@/components/units";

function ItemsPage() {
  return (
    <div className={styles.wrapper}>
      <ItemsLayout />
    </div>
  );
}

export default ItemsPage;
