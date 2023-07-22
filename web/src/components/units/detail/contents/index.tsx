import React from "react";
import { Item } from "@/apis/type";
import _ from "lodash";
import LayoutChip from "@/components/commons/layout/chip/LayoutChip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import styles from "./index.module.css";
import { addComma } from "@/util";

interface ContentsProps {
  detail: Item;
}

interface TitleProps {
  name: string;
  like_count: number;
}

interface DescriptionProps {
  content: string;
}

interface FooterProps {
  price: number;
  shipping_fee: string;
}

function Contents({ detail }: ContentsProps) {
  if (!_.isEmpty(detail)) {
    return (
      <div className={styles.wrapper}>
        <img src={detail.image} />
        <Title name={detail.name} like_count={detail.like_count} />
        <Description content={detail.description} />
        {/* Footer */}
        <Footer price={detail.price} shipping_fee={detail.shipping_fee} />
      </div>
    );
  } else {
    <div className={styles.wrapper}>No Item</div>;
  }
}

function Title({ name, like_count }: TitleProps) {
  return (
    <div className={styles.title}>
      <p>{name}</p>
      <div className={styles.box}>
        <div className={styles.chipbox}>
          <div>
            <LayoutChip icon={faHeart} text="いいね！" />
            <span>{like_count}</span>
          </div>
          <LayoutChip icon={faMessage} text="コメント" />
        </div>
        <div className={styles.flagbtn}>
          <FontAwesomeIcon icon={faFlag} size="lg" color="#9e9e9e" />
        </div>
      </div>
    </div>
  );
}

function Description({ content }: DescriptionProps) {
  return (
    <div className={styles.description}>
      <div className={styles.description__subject}>商品の説明</div>
      <div className={styles.description__content}>{content}</div>
    </div>
  );
}

function Footer({ price, shipping_fee }: FooterProps) {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__price}>
        <p>￥{addComma(price)}</p>
        <span className={styles.shipping_pee}>{shipping_fee}</span>
      </div>
      <div className={styles.footer__buybtn}>購入手続きへ</div>
    </div>
  );
}

export default React.memo(Contents);
