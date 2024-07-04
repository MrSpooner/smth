import { FunctionComponent } from "react";
import styles from "./ServicesContent.module.css";

export type ServicesContentType = {
  className?: string;
};

const ServicesContent: FunctionComponent<ServicesContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.servicesContent, className].join(" ")}>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h1>
      </div>
      <div className={styles.parent}>
        <div className={styles.div}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector4.svg"
          />
        </div>
        <div className={styles.div1}>
          <img
            className={styles.vectorIcon1}
            loading="lazy"
            alt=""
            src="/vector5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
