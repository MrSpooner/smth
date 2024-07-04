import { FunctionComponent } from "react";
import styles from "./Frame3.module.css";

const Frame3: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.header}>
        <div className={styles.div1}>ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС?</div>
      </div>
      <div className={styles.div2}>
        <div className={styles.frameParent}>
          <img className={styles.groupChild} alt="" src="/frame-8.svg" />
          <div className={styles.div3}>
            <p className={styles.p}>Внимательное</p>
            <p className={styles.p1}>обслуживание</p>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <img className={styles.groupItem} alt="" src="/frame-8.svg" />
          <div className={styles.div4}>
            <p className={styles.p2}>Уютная</p>
            <p className={styles.p3}>обстановка</p>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <img className={styles.groupInner} alt="" src="/frame-8.svg" />
          <div className={styles.div5}>
            <p className={styles.p4}>Уютная</p>
            <p className={styles.p5}>обстановка</p>
          </div>
        </div>
      </div>
      <div className={styles.div6}>
        <div className={styles.groupDiv}>
          <img className={styles.frameIcon} alt="" src="/frame-4.svg" />
          <div className={styles.div7}>
            <p className={styles.p6}>Современный</p>
            <p className={styles.p7}>ремонт</p>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <img className={styles.groupChild1} alt="" src="/frame-4.svg" />
          <div className={styles.div8}>
            <p className={styles.p8}>Удобство</p>
            <p className={styles.p9}>парковки</p>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <img className={styles.groupChild2} alt="" src="/frame-4.svg" />
          <div className={styles.div9}>
            <p className={styles.p10}>Доступные</p>
            <p className={styles.p11}>цены</p>
          </div>
        </div>
        <div className={styles.frameParent3}>
          <img className={styles.groupChild3} alt="" src="/frame-4.svg" />
          <div className={styles.div10}>
            <p className={styles.p12}>Гарантия</p>
            <p className={styles.p13}>приватности</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
