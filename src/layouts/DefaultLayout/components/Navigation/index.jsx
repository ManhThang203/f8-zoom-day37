// react
import { NavLink } from "react-router";
// Scss
import styles from "./Navigation.module.scss";
// icon
import { GoHome } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { SiModal } from "react-icons/si";
import { PiScroll } from "react-icons/pi";

function Navigation() {
  const navItem = [
    {
      to: "/",
      lable: "Home",
      icon: <GoHome />,
    },
    {
      to: "/profile",
      lable: "Profile",
      icon: <RxAvatar />,
    },
    {
      to: "/modal-demo",
      lable: "Modal Demo",
      icon: <SiModal />,
    },
    {
      to: "/scroll-demo",
      lable: "Scroll Demo",
      icon: <PiScroll />,
    },
  ];
  return (
    <nav className={styles.navItem}>
      {navItem.map((item) => (
        <li key={item.lable} className={styles.item}>
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.title}>{item.lable}</span>
          </NavLink>
        </li>
      ))}
    </nav>
  );
}
export default Navigation;
