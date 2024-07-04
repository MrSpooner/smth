import { FunctionComponent } from "react";
import ReservationForm from "../components/ReservationForm";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <img className={styles.icon} alt="" src="/@2x.png" />
      <ReservationForm />
      <div className={styles.logoContainer}>
        <h1 className={styles.logotip}>LOGOTIP</h1>
      </div>
    </div>
  );
};

export default Frame;
