import { FunctionComponent } from "react";
import BirthdayDiscount from "../components/BirthdayDiscount";
import styles from "./Frame.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.header}>
        <h1 className={styles.h1}>НАШИ АКЦИИ</h1>
        <div className={styles.div1}>
          <p className={styles.p}>
            Комфортный отдых в нашей сауне доступнее, чем вам
          </p>
          <p className={styles.p1}>
            кажется. Воспользуйтесь нашими лучшими предложениями
          </p>
        </div>
      </div>
      <section className={styles.birthdayDiscountParent}>
        <BirthdayDiscount
          image10="/image-10@2x.png"
          prop="Дарим 10% скидку"
          prop1="в день рождения"
          prop2="СКИДКА ИМЕНИННИКАМ"
        />
        <BirthdayDiscount
          image10="/image-11@2x.png"
          prop="Скидка 10%"
          prop1="с 12:00 до 16:00"
          prop2="СЧАСТЛИВЫЕ ЧАСЫ"
        />
        <BirthdayDiscount
          image10="/image-12@2x.png"
          prop="При заказе сауны"
          prop1="на 5 часов ( в будние дни )"
          prop2="ЧАС В ПОДАРОК"
        />
      </section>
    </div>
  );
};

export default Frame1;