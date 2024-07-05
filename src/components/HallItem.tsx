import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HallItem.module.css";

export type HallItemType = {
  className?: string;

  /** Style props */
  bulletPointMarginLeft?: CSSProperties["marginLeft"];
};

const HallItem: FunctionComponent<HallItemType> = ({
  className = "",
  bulletPointMarginLeft,
}) => {
  const hallItemStyle: CSSProperties = useMemo(() => {
    return {
      marginLeft: bulletPointMarginLeft,
    };
  }, [bulletPointMarginLeft]);

  return (
    <div
      className={[styles.hallItem, className].join(" ")}
      style={hallItemStyle}
    >
      <div className={styles.hallDetails}>
        <h3 className={styles.h3}>Наименование зала</h3>
        <div className={styles.hallFeatures}>
          <div className={styles.bulletPoint}>
            <div className={styles.bulletIcon}>4,97</div>
          </div>
          <div className={styles.ratingIcon}>
            <img
              className={styles.svgStarsIcon}
              loading="lazy"
              alt=""
              src="/svg-stars.svg"
            />
          </div>
          <div className={styles.reviewCount}>
            <div className={styles.div}>124 отзыва</div>
          </div>
        </div>
      </div>
      <div className={styles.div1}>
        <p className={styles.p}>Самый большой зал с большим бассейном,</p>
        <p className={styles.p1}>бильярдным залом, для большой компании</p>
      </div>
      <div className={styles.hallPricing}>
        <div className={styles.personIconParent}>
          <img
            className={styles.personIcon}
            loading="lazy"
            alt=""
            src="/vector1.svg"
          />
          <div className={styles.maxCapacity}>
            <div className={styles.div2}>До 10 человек</div>
          </div>
        </div>
        <div className={styles.priceIcon}>
          <img
            className={styles.hourlyRateIcon}
            loading="lazy"
            alt=""
            src="/vector11.svg"
          />
          <div className={styles.bookingButton}>
            <div className={styles.div3}>3 500 ₽ - час</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.div4}>ЗАБРОНИРОВАТЬ</div>
      </div>
    </div>
  );
};

export default HallItem;
