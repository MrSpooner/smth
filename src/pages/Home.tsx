import { FunctionComponent } from "react";
import HeaderContainer from "../components/HeaderContainer";
import FrameComponent from "../components/FrameComponent";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <img className={styles.imgContent} alt="" src="/img-content--@2x.png" />
      <HeaderContainer />
      <FrameComponent />
    </div>
  );
};

export default Home;
