import { FunctionComponent } from "react";
import styles from "./Frame6.module.css";

const Frame6: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.navigation}>
        <div className={styles.header}>
          <div className={styles.logotipParent}>
            <a className={styles.logotip}>LOGOTIP</a>
            <div className={styles.homeLink}>
              <a className={styles.a}>Главная</a>
            </div>
          </div>
          <div className={styles.div1}>Политика конфиденциальности</div>
        </div>
        <div className={styles.menuLinks}>
          <a className={styles.a1}>О сауне</a>
        </div>
        <div className={styles.menuLinks1}>
          <a className={styles.a2}>Акции</a>
        </div>
        <div className={styles.menuLinks2}>
          <a className={styles.a3}>Контакты</a>
        </div>
        <div className={styles.menuLinks3}>
          <div className={styles.div2}>Бронь саун</div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.button}>
          <b className={styles.b}>ЗАБРОНИРОВАТЬ</b>
        </div>
        <div className={styles.footerButtons}>
          <div className={styles.div3}>Сайт разработан в Маркетинг102</div>
        </div>
      </div>
      <div className={styles.child} />
    </div>
  );
};

export default Frame6;
