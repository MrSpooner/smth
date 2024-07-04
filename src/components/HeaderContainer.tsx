import { FunctionComponent } from "react";
import styles from "./HeaderContainer.module.css";

export type HeaderContainerType = {
  className?: string;
};

const HeaderContainer: FunctionComponent<HeaderContainerType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.headerContainer, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.logotipWrapper}>
          <a className={styles.logotip}>LOGOTIP</a>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.waParent}>
            <div className={styles.wa}>
              <img
                className={styles.whatsappIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className={styles.telegramLink}>
              <div className={styles.tg}>
                <img
                  className={styles.telegramLogoIcon}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <a className={styles.onlineContainer}>
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
            </a>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>Софьи Перовской, 13/5, Уфа</div>
            <div className={styles.locationLabel}>
              <a className={styles.a}>Наше местоположение</a>
            </div>
          </div>
          <div className={styles.emptySpaceParent}>
            <div className={styles.emptySpace}>
              <a className={styles.a1}>8 904 739-19-75</a>
            </div>
            <a className={styles.a2}>Круглосуточная работа</a>
          </div>
        </div>
      </div>
      <div className={styles.menuContainerWrapper}>
        <div className={styles.menuContainer}>
          <div className={styles.menuList}>
            <a className={styles.a3}>ГЛАВНАЯ</a>
          </div>
          <div className={styles.menuList1} />
          <div className={styles.menuList2}>
            <a className={styles.a4}>О САУНЕ</a>
          </div>
          <div className={styles.menuList3} />
          <div className={styles.menuList4}>
            <a className={styles.a5}>АКЦИИ</a>
          </div>
          <div className={styles.menuList5} />
          <div className={styles.menuList6}>
            <a className={styles.a6}>КОНТАКТЫ</a>
          </div>
          <div className={styles.menuList7} />
          <div className={styles.menuList8}>
            <a className={styles.a7}>БРОНЬ САУН</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderContainer;
