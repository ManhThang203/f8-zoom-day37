// Component
import Dropdown from "@/components/Dropdown";
// Scss
import styles from "./MyCourses.module.scss";
// img
import myCourse1 from "@/assets/img/my-course-1.png";
import myCourse2 from "@/assets/img/my-course-2.png";
import myCourse3 from "@/assets/img/my-course-3.png";
import { Link, Links } from "react-router";
function MyCourseResult() {
  const myCourseList = [
    {
      to: "#!",
      lable: "Fullstack Web",
      timeAgo: "2 giờ",
      thumbnail: myCourse1,
      percent: 180,
    },
    {
      to: "#!",
      lable: "Javascipt Pro",
      timeAgo: "3 ngày",
      thumbnail: myCourse2,
      percent: 150,
    },
    {
      to: "#!",
      lable: "Node & ExpressJs",
      timeAgo: "5 giờ",
      thumbnail: myCourse3,
      percent: 90,
    },
  ];
  return (
    <div className={styles.result}>
      <Dropdown>
        <ul className={styles.listResult}>
          <div className={styles.header}>
            <h3 className={styles.titleHeadig}>Khóa học của tôi</h3>
            <Link to={"#!"} className={styles.viewAllBtn}>
              Xem tất cả
            </Link>
          </div>
          {myCourseList &&
            myCourseList.map((item) => (
              <div className={styles.content} key={item.lable}>
                <div className={styles.course}>
                  <Link to={item.to} className={styles.linkThumb}>
                    <img
                      className={styles.courseThumb}
                      src={item.thumbnail}
                      alt=""
                    />
                  </Link>
                </div>
                <div className={styles.courseInfo}>
                  <h4 className={styles.courseTitle}>
                    <Link to={item.to} className={styles.linkTitle}>
                      {item.lable}
                    </Link>
                  </h4>
                  <p className={styles.lastCompleted}>
                    Học cách đây {item.timeAgo} trước
                  </p>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressFill}
                      style={{ width: item.percent }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
        </ul>
      </Dropdown>
    </div>
  );
}
export default MyCourseResult;
