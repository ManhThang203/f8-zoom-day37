import Button from "@/components/Button";
import styles from "./MyCourses.module.scss";
import { useEffect, useState } from "react";
import MyCourseResult from "./MyCourseResult";
function MyCourses() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (e.target.closest(`.${styles.wrapper}`)) return;
      setOpen(false);
    };
    if (open) {
      document.addEventListener("click", handleClickOutSide);
    }
    // cleanUp
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [open]);
  return (
    <div className={styles.wrapper}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        size="large"
        className={styles.coursesBtn}
      >
        Khóa học của bạn
      </Button>
      {open && <MyCourseResult />}
    </div>
  );
}
export default MyCourses;
