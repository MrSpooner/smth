import { FunctionComponent } from "react";
import styles from "./Frame2.module.css";

const Frame2: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img className={styles.ellipseIcon} alt="" src="/ellipse.svg" />
      <div className={styles.header}>
        <div className={styles.div1}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</div>
      </div>
      <div className={styles.contentCard}>
        <div className={styles.div2}>
          <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
          <div className={styles.div3}>Легкое парение</div>
        </div>
        <div className={styles.div4}>
          <img
            className={styles.closeUpWomanRelaxingSaunaIcon}
            alt=""
            src="/closeupwomanrelaxingsauna-1-1@2x.png"
          />
          <div className={styles.div5}>Массаж</div>
        </div>
        <div className={styles.div6}>
          <img
            className={styles.wellnessConceptWithWomanWiIcon}
            alt=""
            src="/wellnessconceptwithwomanwithcremeface-1@2x.png"
          />
          <div className={styles.div7}>Пилинг</div>
        </div>
        <div className={styles.div8}>
          <img
            className={styles.assortmentDifferentDeliciousIcon}
            alt=""
            src="/assortmentdifferentdeliciousingredients-1@2x.png"
          />
          <div className={styles.div9}>Кухня</div>
        </div>
        <div className={styles.div10}>
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
          <div className={styles.button}>
            <div className={styles.div11}>УЗНАТЬ ПОДРОБНЕЕ</div>
          </div>
          <div className={styles.div12}>Парение по-полной</div>
        </div>
        <div className={styles.div13}>
          <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          <div className={styles.div14}>Классическое парение</div>
        </div>
        <div className={styles.div15}>
          <img
            className={styles.ecoFriendlyCleaningProductsIcon}
            alt=""
            src="/ecofriendlycleaningproductssetbasketwithbrushes-1@2x.png"
          />
          <div className={styles.div16}>Банные принадлежности</div>
        </div>
        <div className={styles.div17}>
          <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
          <div className={styles.div18}>Бар</div>
        </div>
      </div>
      <div className={styles.div19}>
        <div className={styles.div20}>
          <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
        </div>
        <div className={styles.div21}>
          <img className={styles.vectorIcon1} alt="" src="/vector5.svg" />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
