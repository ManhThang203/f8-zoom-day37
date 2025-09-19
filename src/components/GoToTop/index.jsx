import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styles from "./GoToTop.module.scss";
// Icon
import { GoMoveToTop } from "react-icons/go";
// Component
import Button from "@/components/Button";
import clsx from "clsx";
// import styles from "./GoToTop.module.scss";
function GoToTop() {
  const location = useLocation();
  const [isBtnshow, setIsBtnShow] = useState(false);
  // xử lý khi đổi pathname
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // xử lý khi cuốn
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsBtnShow(true);
      } else {
        setIsBtnShow(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    // Clean Up
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isBtnshow]);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Button
      size="large"
      outline
      onClick={handleScrollTop}
      className={clsx(styles.btnShow, !isBtnshow && styles.hiddenBtn)}
    >
      <GoMoveToTop className={styles.icon} />
    </Button>
  );
}
export default GoToTop;
