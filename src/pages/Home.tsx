import { FunctionComponent } from "react";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <img className={styles.imgContent} alt="" src="/img-content--@2x.png" />
      <div className={styles.logo}>
        <b className={styles.logotip}>LOGOTIP</b>
      </div>
      <div className={styles.div}>
        <div className={styles.div1}>8 904 739-19-75</div>
        <div className={styles.div2}>Круглосуточная работа</div>
      </div>
      <div className={styles.div3}>
        <div className={styles.div4}>Софьи Перовской, 13/5, Уфа</div>
        <div className={styles.div5}>Наше местоположение</div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.div6}>СПОКОЙНАЯ АТМОСФЕРА</div>
        </div>
        <div className={styles.title}>
          <div className={styles.div7}>
            Для ценителей высокого сервиса и максимального комфорта
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.button1}>
            <b className={styles.b}>ЗАБРОНИРОВАТЬ ЗАЛ</b>
          </div>
          <div className={styles.button2}>
            <div className={styles.div8}>ЗАКАЗАТЬ ЗВОНОК</div>
          </div>
        </div>
      </div>
      <div className={styles.div9}>
        <div className={styles.onlineContainer}>
          <p className={styles.online}>
            <span className={styles.online1}>
              <span className={styles.online2}>Online,</span>
            </span>
            <span>
              <span className={styles.span}>{` `}</span>
              <span>пишите</span>
            </span>
          </p>
          <p className={styles.p}>
            <span>
              <span>ответим сразу</span>
            </span>
          </p>
        </div>
        <div className={styles.tg}>
          <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
        </div>
        <div className={styles.wa}>
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        </div>
      </div>
      <div className={styles.category}>
        <div className={styles.div10}>ГЛАВНАЯ</div>
        <div className={styles.div11}>О САУНЕ</div>
        <div className={styles.div12}>АКЦИИ</div>
        <div className={styles.div13}>КОНТАКТЫ</div>
        <div className={styles.div14}>БРОНЬ САУН</div>
        <div className={styles.categoryChild} />
        <div className={styles.categoryItem} />
        <div className={styles.categoryInner} />
        <div className={styles.lineDiv} />
      </div>
    </div>
  );
};

export default Home;
