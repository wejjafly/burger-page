import styles from "../styles/Auxiliary.module.scss";
const Button = ({ buttonText, children, onClick, id }) => (
  <button onClick={onClick} className={styles.btn} id={id}>
    {buttonText || children}
  </button>
);

export default Button;
