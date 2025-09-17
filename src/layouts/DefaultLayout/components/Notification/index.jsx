// React
import { useEffect, useState } from "react";
// Scss
import styles from "./Notification.module.scss";
// Icon
import { FaBell } from "react-icons/fa";
import { Link } from "react-router";
// component
import NotificationResult from "./NotificationResult";

function Notification() {
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (e.target.closest(`.${styles.wrapper}`)) return;
      setisOpen(false);
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
    <div className={styles.wrapper}>
      <Link to={"#!"} onClick={() => setisOpen((prev) => !prev)}>
        <FaBell className={styles.iconBell} />
      </Link>
      {isOpen && <NotificationResult />}
    </div>
  );
}
export default Notification;
