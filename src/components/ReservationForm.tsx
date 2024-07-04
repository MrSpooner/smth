import { FunctionComponent } from "react";
import styles from "./ReservationForm.module.css";

export type ReservationFormType = {
  className?: string;
};

const ReservationForm: FunctionComponent<ReservationFormType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.reservationForm, className].join(" ")}>
      <div className={styles.reservationTitle}>
        <h1 className={styles.h1}>ЗАБРОНИРУЙТЕ ЗАЛ</h1>
      </div>
      <div className={styles.inputFields}>
        <div className={styles.button}>
          <div className={styles.div}>ВВЕДИТЕ СВОЕ ИМЯ</div>
        </div>
        <div className={styles.phoneInput}>
          <div className={styles.button1}>
            <div className={styles.div1}>ВВЕДИТЕ НОМЕР ТЕЛЕФОНА</div>
          </div>
        </div>
        <div className={styles.button2}>
          <b className={styles.b}>ЗАБРОНИРОВАТЬ</b>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
