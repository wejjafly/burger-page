import styles from "../styles/Navbar.module.scss";
const NavBarLinks = () => {
  return (
    <div className={styles.navbarLinks}>
      <>
        <ul className={styles.left}>
          <li>
            <a href="#">Steaks</a>
          </li>
          <li>
            <a href="#">Burgers</a>
          </li>
          <li>
            <a href="#"> French fries</a>
          </li>
          <li>
            <a href="#"> drinks</a>
          </li>
          <li>
            <a href="#"> Gdzie dowozimy</a>
          </li>
          <li>
            <a href="#"> Kontakt</a>
          </li>
        </ul>
        <ul className={styles.right}>
          <li>
            <i class="fa-solid fa-user"></i>
            <a href="#"> Moje Konto</a>
          </li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
            <a href="#">Koszyk</a>
          </li>
          <li>
            <i class="fa-solid fa-burger"></i>
            <a href="#">Zamów</a>
          </li>
        </ul>
      </>
    </div>
  );
};

export default NavBarLinks;
