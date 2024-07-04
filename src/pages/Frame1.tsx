import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import ImagePlaceholder from "../components/ImagePlaceholder";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.pageHeader}>
        <h1 className={styles.h1}>НАШИ ЗАЛЫ</h1>
      </div>
      <FrameComponent1 />
      <FrameComponent />
      <section className={styles.imageGallery}>
        <div className={styles.imageRow}>
          <div className={styles.imageColumn}>
            <h1 className={styles.h11}>
              <p className={styles.p}>
                <span className={styles.span}>{`У НАС ЕСТЬ - `}</span>
                <span>ПРИНАДЛЕЖНОСТИ</span>
              </p>
              <p className={styles.p1}>
                <span>ДЛЯ УДОБСТВА</span>
                <span className={styles.span1}> ПОСЕЩЕНИЯ ЗАЛОВ</span>
              </p>
            </h1>
            <div className={styles.div1}>
              <p className={styles.p2}>
                <span>{`У нас есть принадлежности для удобства посещения залов - разовые: `}</span>
                <span className={styles.span2}>тапочки,</span>
              </p>
              <p className={styles.p3}>
                <span className={styles.span3}>
                  чистые полотенца и простыни
                </span>
                <span>. Они не навязываются, вы можете прийти со своим!</span>
              </p>
            </div>
          </div>
          <h1 className={styles.h12}>“</h1>
        </div>
      </section>
      <ImagePlaceholder />
    </div>
  );
};

export default Frame1;
