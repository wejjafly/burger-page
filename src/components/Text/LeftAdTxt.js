import styles from "../styles/Text.module.scss";
import Button from "../Auxiliary/Button";
const LeftAdTxt = () => {
  return (
    <div className={styles.leftAd}>
      <h3>Zestaw dla 3 osób</h3>
      <p>
        Razem smakuje lepiej! Zamów zestawy <br />
        obiadowy dla 3 osób już od <span>39 zł</span>
      </p>
      <Button buttonText={"Zamów online"} />
    </div>
  );
};
export default LeftAdTxt;
