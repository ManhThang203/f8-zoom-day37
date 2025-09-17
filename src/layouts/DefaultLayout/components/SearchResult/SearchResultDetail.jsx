import styles from "./SearchResult.module.scss";
// img
import coursephoto1 from "@/assets/img/coursephoto1.png";
import coursephoto2 from "@/assets/img/coursephoto2.png";
import coursephoto3 from "@/assets/img/coursephoto3.png";
import photoarticle1 from "@/assets/img/photoarticle1.png";
import photoarticle2 from "@/assets/img/photoarticle2.png";
import photoarticle3 from "@/assets/img/photoarticle3.png";
import photovideo1 from "@/assets/img/photovideo1.png";
import photovideo2 from "@/assets/img/photovideo2.png";
import photovideo3 from "@/assets/img/photovideo3.png";
import { Link } from "react-router";

function SearchResultDetail() {
  const detailedResultsList = [
    {
      label: "KHÓA HỌC",
      linkMore: "#!",
      infoItem: [
        {
          imgCourse: coursephoto1,
          nameCourse: "Lập Trình JavaScript Cơ Bản",
        },
        {
          imgCourse: coursephoto2,
          nameCourse: "Lập Trình JavaScript Nâng Cao",
        },
        {
          imgCourse: coursephoto3,
          nameCourse: "JavaScript Pro",
        },
      ],
    },
    {
      label: "BÀI VIẾT",
      linkMore: "#!",
      infoItem: [
        {
          imgCourse: photoarticle1,
          nameCourse: "Không Nên Học Javascript, Liệu Có Đúng Như Vậy?",
        },
        {
          imgCourse: photoarticle2,
          nameCourse: "Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1",
        },
        {
          imgCourse: photoarticle3,
          nameCourse:
            "Chuyện  cũ xưa: Nên dùng === hay == để so sánh trong Javascript?",
        },
      ],
    },
    {
      label: "VIDEO",
      linkMore: "#!",
      infoItem: [
        {
          imgCourse: photovideo1,
          nameCourse: 'Giải thích các trường hợp "phi lý" trong JavaScript?',
        },
        {
          imgCourse: photovideo2,
          nameCourse: '"Học Xong" Javascript Có Giải Được "Code Thiếu Nhi"?',
        },
        {
          imgCourse: photovideo3,
          nameCourse: "Fn.apply() method trong Javascript?",
        },
      ],
    },
  ];
  return (
    <>
      {detailedResultsList &&
        detailedResultsList.map((item) => (
          <div className={styles.listResults} key={item.label}>
            <div className={styles.listResults__header}>
              <h3 className={styles.listResults__title}>{item.label}</h3>
              <Link to={item.linkMore} className={styles.listResults__linkMore}>
                Xem thêm
              </Link>
            </div>
            <ul className={styles.listResults__items}>
              {item.infoItem &&
                item.infoItem.map((itemChild) => (
                  <div
                    className={styles.listResults__item}
                    key={itemChild.nameCourse}
                  >
                    <img
                      src={itemChild.imgCourse}
                      alt="ảnh khóa học"
                      className={styles.listResults__thumb}
                    />
                    <span className={styles.listResults__nameCourse}>
                      {itemChild.nameCourse}
                    </span>
                  </div>
                ))}
            </ul>
          </div>
        ))}
    </>
  );
}
export default SearchResultDetail;
