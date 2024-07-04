import { FunctionComponent } from "react";
import styles from "./ImagePlaceholder.module.css";

export type ImagePlaceholderType = {
  className?: string;
};

const ImagePlaceholder: FunctionComponent<ImagePlaceholderType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.imagePlaceholder, className].join(" ")}>
      <div className={styles.placeholderImage}>
        <div className={styles.imageWrapper}>
          <div className={styles.imgContent}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          </div>
        </div>
        <div className={styles.imageWrapper1}>
          <div className={styles.imgContent1}>
            <img
              className={styles.image2Icon}
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
        </div>
        <div className={styles.imageWrapper2}>
          <div className={styles.imgContent2}>
            <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePlaceholder;
