import styles from "../styles/Ads.module.scss";
import Button from "../Auxiliary/Button";
import LeftAdTxt from "../Text/LeftAdTxt";
import RightAdTxt from "../Text/RightAdTxt";
const Ads = () => {
  return (
    <div className={styles.adscontainer}>
      <div className={styles.leftad}>
        <LeftAdTxt />
      </div>
      <div className={styles.rightad}>
        <RightAdTxt />
      </div>
    </div>
  );
};
export default Ads;
