import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.header}>
        <div className={styles.div1}>НАШИ АКЦИИ</div>
      </div>
      <div className={styles.title}>
        <div className={styles.div2}>
          <p className={styles.p}>
            Комфортный отдых в нашей сауне доступнее, чем вам
          </p>
          <p className={styles.p1}>
            кажется. Воспользуйтесь нашими лучшими предложениями
          </p>
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.div3}>
          <div className={styles.div4}>
            <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
            <div className={styles.div5}>
              <p className={styles.p2}>Дарим 10% скидку</p>
              <p className={styles.p3}>в день рождения</p>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.div6}>СКИДКА ИМЕНИННИКАМ</div>
        </div>
      </div>
      <div className={styles.cardContent1}>
        <div className={styles.div7}>
          <div className={styles.div8}>
            <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
            <div className={styles.div9}>
              <p className={styles.p4}>Скидка 10%</p>
              <p className={styles.p5}>с 12:00 до 16:00</p>
            </div>
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.div10}>СЧАСТЛИВЫЕ ЧАСЫ</div>
        </div>
      </div>
      <div className={styles.cardContent2}>
        <div className={styles.div11}>
          <div className={styles.div12}>
            <img className={styles.image12Icon} alt="" src="/image-12@2x.png" />
            <div className={styles.div13}>
              <p className={styles.p6}>При заказе сауны</p>
              <p className={styles.p7}>на 5 часов ( в будние дни )</p>
            </div>
          </div>
        </div>
        <div className={styles.button2}>
          <div className={styles.div14}>ЧАС В ПОДАРОК</div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
