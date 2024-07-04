import { FunctionComponent } from "react";
import ServicesContent from "../components/ServicesContent";
import styles from "./Frame2.module.css";

const Frame2: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img className={styles.ellipseIcon} alt="" src="/ellipse.svg" />
      <ServicesContent />
      <div className={styles.gallery}>
        <div className={styles.galleryImages}>
          <img
            className={styles.image5Icon}
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
          <div className={styles.div1}>Легкое парение</div>
        </div>
        <div className={styles.galleryImages1}>
          <img
            className={styles.image4Icon}
            loading="lazy"
            alt=""
            src="/image-4@2x.png"
          />
          <div className={styles.div2}>Парение по-полной</div>
          <div className={styles.button}>
            <div className={styles.div3}>УЗНАТЬ ПОДРОБНЕЕ</div>
          </div>
        </div>
        <div className={styles.galleryImages2}>
          <img
            className={styles.image8Icon}
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
          <div className={styles.div4}>Классическое парение</div>
        </div>
        <div className={styles.galleryImages3}>
          <img
            className={styles.ecoFriendlyCleaningProductsIcon}
            loading="lazy"
            alt=""
            src="/ecofriendlycleaningproductssetbasketwithbrushes-1@2x.png"
          />
          <div className={styles.div5}>Банные принадлежности</div>
        </div>
        <div className={styles.galleryImages4}>
          <img
            className={styles.closeUpWomanRelaxingSaunaIcon}
            loading="lazy"
            alt=""
            src="/closeupwomanrelaxingsauna-1-1@2x.png"
          />
          <div className={styles.div6}>Массаж</div>
        </div>
        <div className={styles.galleryImages5}>
          <img
            className={styles.assortmentDifferentDeliciousIcon}
            loading="lazy"
            alt=""
            src="/assortmentdifferentdeliciousingredients-1@2x.png"
          />
          <div className={styles.div7}>Кухня</div>
        </div>
        <div className={styles.galleryImages6}>
          <img
            className={styles.wellnessConceptWithWomanWiIcon}
            loading="lazy"
            alt=""
            src="/wellnessconceptwithwomanwithcremeface-1@2x.png"
          />
          <div className={styles.div8}>Пилинг</div>
        </div>
        <div className={styles.galleryImages7}>
          <img
            className={styles.image9Icon}
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
          <div className={styles.div9}>Бар</div>
        </div>
      </div>
    </div>
  );
};

export default Frame2;
