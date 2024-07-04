import { FunctionComponent } from "react";
import styles from "./Frame6.module.css";

const Frame6: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <b className={styles.logotip}>LOGOTIP</b>
        </div>
        <div className={styles.button}>
          <b className={styles.b}>ЗАБРОНИРОВАТЬ</b>
        </div>
        <div className={styles.category}>
          <div className={styles.div1}>Главная</div>
          <div className={styles.div2}>О сауне</div>
          <div className={styles.div3}>Акции</div>
          <div className={styles.div4}>Контакты</div>
          <div className={styles.div5}>Бронь саун</div>
        </div>
      </div>
      <div className={styles.content02}>
        <div className={styles.div6}>Политика конфиденциальности</div>
        <div className={styles.div7}>Сайт разработан в Маркетинг102</div>
      </div>
      <div className={styles.child} />
    </div>
  );
};

export default Frame6;
