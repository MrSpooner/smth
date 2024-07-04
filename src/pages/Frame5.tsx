import { FunctionComponent } from "react";
import styles from "./Frame5.module.css";

const Frame5: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <header className={styles.frameParent}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>ЖДЕМ ВАС В ГОСТИ!</h1>
        </div>
        <div className={styles.parent}>
          <div className={styles.div1}>Софьи Перовской, 13/5, Уфа</div>
          <div className={styles.container}>
            <a className={styles.a}>Местоположение</a>
          </div>
        </div>
        <div className={styles.scheduleIconParent}>
          <div className={styles.scheduleIcon}>
            <a className={styles.empty}>8 904 739-19-75</a>
          </div>
          <div className={styles.div2}>Круглосуточная работа</div>
        </div>
      </header>
      <img className={styles.mapIcon} alt="" src="/map@2x.png" />
    </div>
  );
};

export default Frame5;
