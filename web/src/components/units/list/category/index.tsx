import { useEffect, useState } from "react";
import _ from "lodash";
import api from "@/apis";
import { Category } from "@/apis/type";
import styles from "./index.module.css";

interface CategoryProps {
  categoryId: number;
  onChange: (id: number) => void;
}

function Category({ categoryId, onChange }: CategoryProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(999);

  useEffect(() => {
    api.categories.getCategories().then((response) => setCategories(response));
  }, []);

  useEffect(() => {
    const element = document.getElementsByTagName("li").item(currentIndex);
    if (element !== null) {
      element.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const onClickNavItem = (id: number, index: number) => {
    onChange(id);
    setCurrentIndex(index);
  };

  if (categories.length > 0) {
    return (
      <nav className={styles.wrapper}>
        <ul className={styles.categories}>
          <li
            className={
              categoryId === 999
                ? styles.activeCategoryItem
                : styles.categoryItem
            }
            onClick={() => onClickNavItem(999, 999)}
          >
            すべて
          </li>
          {categories.map((item, idx) => {
            const { id, name } = item;
            return (
              <li
                className={
                  categoryId === id
                    ? styles.activeCategoryItem
                    : styles.categoryItem
                }
                key={id}
                onClick={() => onClickNavItem(id, idx)}
              >
                {name}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Category;
