import NavBarLinks from "../NavBarElements/NavBarLinks";
import Logo from "../NavBarElements/Logo";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <NavBarLinks />
    </div>
  );
};

export default Navbar;
