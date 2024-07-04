import { FunctionComponent } from "react";
import styles from "./Frame5.module.css";

const Frame5: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img className={styles.mapIcon} alt="" src="/map@2x.png" />
      <div className={styles.header}>
        <div className={styles.div1}>ЖДЕМ ВАС В ГОСТИ!</div>
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>Софьи Перовской, 13/5, Уфа</div>
        <div className={styles.div4}>Местоположение</div>
      </div>
      <div className={styles.div5}>
        <div className={styles.div6}>Круглосуточная работа</div>
        <div className={styles.div7}>8 904 739-19-75</div>
      </div>
    </div>
  );
};

export default Frame5;
