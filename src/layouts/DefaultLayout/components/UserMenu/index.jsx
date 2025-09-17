// Scss
import styles from "./UserMenu.module.scss";
// img
import avatarJuji from "@/assets/img/avatarJuji.png";
import iconCrown from "@/assets/img/iconCrown.svg";
// Reatc
import { useEffect, useState } from "react";
// Component
import UserMenuResult from "./UserMenuResult";
function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (e.target.closest(`.${styles.Wrapper}`)) return;
      setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutSide);
    }
    // CleanUp
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [isOpen]);
  return (
    <div className={styles.Wrapper}>
      <div
        className={styles.avatarWrapper}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img src={avatarJuji} className={styles.avatar} alt="Mạnh Thắng" />
        <img src={iconCrown} className={styles.crown} alt="" />
      </div>
      {isOpen && <UserMenuResult />}
    </div>
  );
}
export default UserMenu;
