import { NavLink } from "react-router";
import styles from "./AppLogo.module.scss";
import logoF8 from "@/assets/img/f8-logo.png";
function AppLogo() {
  return (
    <div className={styles.container}>
      <NavLink to={"/"} className={styles.info}>
        <img src={logoF8} alt="LogoF8" />
        <h1 className={styles.title}>Học Lập Trình Để Đi Làm</h1>
      </NavLink>
    </div>
  );
}
export default AppLogo;
