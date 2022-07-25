import styles from "../styles/Text.module.scss";
import Button from "../Auxiliary/Button";
const Slidertxt = () => {
  return (
    <div className={styles.sliderAd}>
      <h3>
        <span>Rabat 10%</span> na pierwsze zamówienie!
      </h3>
      <p>
        Do 20 stycznia złóż zamówienie na stronie <br />i skorzystaj z{" "}
        <b>promocji -10%</b>. Spiesz się, czas trwania <br />
        promocji do końca lutego.
      </p>
      <Button buttonText={"Zamów online"} />
    </div>
  );
};
export default Slidertxt;
