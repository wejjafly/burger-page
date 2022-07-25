import styles from "../styles/Text.module.scss";
import Button from "../Auxiliary/Button";

const RightAdTxt = () => {
  return (
    <div className={styles.rightAd}>
      <h3>UberEats</h3>
      <p>
        Zamawiaj w aplikacji <span>10% taniej</span>. <br />
        Pobierz aplikację UberEats już dziś.
      </p>
      <Button buttonText={"Zamów online"} />
    </div>
  );
};
export default RightAdTxt;
