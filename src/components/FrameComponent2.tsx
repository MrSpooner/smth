import { FunctionComponent } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./FrameComponent2.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.wrapper, className].join(" ")}>
      <div className={styles.div}>
        <GroupComponent
          advantagesCards="/frame-8.svg"
          prop="Внимательное"
          prop1="обслуживание"
        />
        <GroupComponent
          advantagesCards="/frame-8.svg"
          prop="Уютная"
          prop1="обстановка"
        />
        <GroupComponent
          advantagesCards="/frame-8.svg"
          prop="Уютная"
          prop1="обстановка"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
