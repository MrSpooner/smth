import { FunctionComponent } from "react";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import styles from "./Frame3.module.css";

const Frame3: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.wrapper}>
        <div className={styles.div1}>ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС?</div>
      </div>
      <section className={styles.parent}>
        <div className={styles.div2}>
          <GroupComponent
            advantagesCards="/frame-4.svg"
            prop="Современный"
            prop1="ремонт"
          />
          <GroupComponent
            advantagesCards="/frame-4.svg"
            prop="Удобство"
            prop1="парковки"
          />
          <GroupComponent
            advantagesCards="/frame-4.svg"
            prop="Доступные"
            prop1="цены"
          />
          <GroupComponent
            advantagesCards="/frame-4.svg"
            prop="Гарантия"
            prop1="приватности"
          />
        </div>
        <FrameComponent />
      </section>
    </div>
  );
};

export default Frame3;
