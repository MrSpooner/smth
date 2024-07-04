import { FunctionComponent } from "react";
import styles from "./Frame4.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img className={styles.icon} alt="" src="/@2x.png" />
      <div className={styles.header}>
        <div className={styles.div1}>ЗАБРОНИРУЙТЕ ЗАЛ</div>
      </div>
      <div className={styles.button}>
        <div className={styles.div2}>ВВЕДИТЕ СВОЕ ИМЯ</div>
      </div>
      <div className={styles.button1}>
        <div className={styles.div3}>ВВЕДИТЕ НОМЕР ТЕЛЕФОНА</div>
      </div>
      <div className={styles.button2}>
        <b className={styles.b}>ЗАБРОНИРОВАТЬ</b>
      </div>
      <b className={styles.logotip}>LOGOTIP</b>
    </div>
  );
};

export default Frame;
