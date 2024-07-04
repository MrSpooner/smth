import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.homeInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <h1 className={styles.h1}>СПОКОЙНАЯ АТМОСФЕРА</h1>
          <div className={styles.wrapper}>
            <h3 className={styles.h3}>
              Для ценителей высокого сервиса и максимального комфорта
            </h3>
          </div>
        </div>
        <div className={styles.bookingButtonsWrapper}>
          <div className={styles.bookingButtons}>
            <div className={styles.button}>
              <b className={styles.b}>ЗАБРОНИРОВАТЬ ЗАЛ</b>
            </div>
            <div className={styles.button1}>
              <div className={styles.div}>ЗАКАЗАТЬ ЗВОНОК</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
