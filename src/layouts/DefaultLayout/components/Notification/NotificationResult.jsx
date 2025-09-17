import { Link } from "react-router";
// Scss
import styles from "./Notification.module.scss";
// img
import avatarD from "@/assets/img/avatarD.png";
import tim from "@/assets/img/tim.svg";
import share from "@/assets/img/share.svg";
import f8Logo from "@/assets/img/f8-logo.png";
import Dropdown from "@/components/Dropdown";

function NotificationResult() {
  const notificationList = [
    {
      to: "#!",
      lable: "Vũ Quốc Dũng",
      thumbnail: avatarD,
      icon: tim,
      timeAgo: "7 giờ trước",
      lecturer: true,
      action: false,
    },
    {
      to: "#!",
      lable: "Vũ Quốc Dũng",
      thumbnail: avatarD,
      icon: share,
      timeAgo: "16 giờ trước",
      lecturer: true,
      action: false,
    },
    {
      to: "#!",
      lable: "Tìm hiểu về Closure",
      thumbnail: f8Logo,
      timeAgo: "5 ngày trước",
      action: true,
    },
    {
      to: "#!",
      lable: "Tìm hiểu về Garbage Collection",
      thumbnail: f8Logo,
      timeAgo: "5 ngày trước",
      action: true,
    },
    {
      to: "#!",
      lable: "Tìm hiểu Set và WeakSet",
      thumbnail: f8Logo,
      timeAgo: "5 ngày trước",
      action: true,
    },
    {
      to: "#!",
      lable: "Tìm hiểu Map và WeakMap",
      thumbnail: f8Logo,
      timeAgo: "5 ngày trước",
      action: true,
    },
  ];
  return (
    <div className={styles.result}>
      <Dropdown>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h4 className={styles.titleHeader}>Thông báo</h4>
            <Link to={"#!"} className={styles.linkTick}>
              Đánh dấu đã đọc
            </Link>
          </div>
          {notificationList &&
            notificationList.map((item, index) => (
              <div className={item.action ? styles.active : ""} key={index}>
                <div className={styles.content} key={index}>
                  <div className={styles.avatar}>
                    <img
                      src={item.thumbnail}
                      alt=""
                      className={styles.thumbnail}
                    />
                    {item.lecturer ? (
                      <>
                        <img src={item.icon} alt="" className={styles.icon} />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className={styles.messageWrapper}>
                    <p className={styles.titleMessage}>
                      {item.lecturer ? (
                        <>
                          <strong>{item.lable}</strong>{" "}
                          {item.icon === tim
                            ? "đã bày tỏ cảm xúc về bình luận của bạn."
                            : "đã nhắc tới bạn trong một bình luận."}
                        </>
                      ) : (
                        <>
                          Bài học <strong>{item.lable}</strong> mới được thêm
                          vào.
                        </>
                      )}
                    </p>
                    <p className={styles.createdTime}>{item.timeAgo}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Dropdown>
    </div>
  );
}
export default NotificationResult;
