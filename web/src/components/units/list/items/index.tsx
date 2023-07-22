import React, { useEffect, useState } from "react";
import api from "@/apis";
import { Item } from "@/apis/type";
import { addComma } from "@/util";
import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

// Define Props
interface SoldOutProps {
  isSoldOut: boolean;
}

interface ItemProps {
  info: Item;
}

interface ItemsProps {
  searchText: string;
  categoryId: number;
}

function Items({ searchText, categoryId }: ItemsProps) {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    api.items.getItems().then((res) => {
      let filteredList;
      // when category is 'すべて',
      if (categoryId === 999) {
        // when text(in search bar) is not null
        if (searchText !== "") {
          // Returns data containing entered text
          filteredList = res.filter((data) => data.name.includes(searchText));
        } else filteredList = res;
      } else {
        if (searchText !== "") {
          // Returns data containing entered text and same category
          filteredList = res.filter(
            (data) =>
              data.category_id == categoryId && data.name.includes(searchText)
          );
        } else
          filteredList = res.filter((data) => data.category_id == categoryId);
      }

      setList(filteredList);
    });
  }, [searchText, categoryId]);

  if (list.length > 0) {
    return (
      <div className={styles.wrapper}>
        {list.map((data) => {
          return <Item key={data.id} info={data} />;
        })}
        <RegisterButton />
      </div>
    );
  } else {
    <div className={styles.wrapper}>No Items</div>;
  }
}

function Item({ info }: ItemProps) {
  const navigate = useNavigate();

  function onClickItem(info: Item) {
    navigate(`/items/${info.id}`);
  }

  return (
    <div className={styles.item} onClick={() => onClickItem(info)}>
      <SoldOutMark isSoldOut={info.is_sold_out} />
      <div className={styles.info}>
        <img src={info.image} width={"100%"} height={"100%"} />
        <div className={styles.title}>
          <div className={styles.title__name}>{info.name}</div>
          <div className={styles.title__price}>
            <p>￥{addComma(info.price)}</p>
            {info.like_count > 0 && (
              <div className={styles.title__like}>
                <FontAwesomeIcon icon={faHeart} />
                {info.like_count}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Sold Mark
function SoldOutMark({ isSoldOut }: SoldOutProps) {
  if (isSoldOut)
    return (
      <div className={styles.soldmark}>
        <p className={styles.soldmark__text}>SOLD</p>
      </div>
    );
}

// Register Button
function RegisterButton() {
  return (
    <div className={styles.registerBtn}>
      <div>
        <p className={styles.registerBtn__text}>出品</p>
        <FontAwesomeIcon
          icon={faCamera}
          color="#fff"
          style={{ fontSize: "3em" }}
        />
      </div>
    </div>
  );
}

export default React.memo(Items);
