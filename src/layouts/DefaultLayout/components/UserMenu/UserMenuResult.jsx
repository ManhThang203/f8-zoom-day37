// Scss
import styles from "./UserMenu.module.scss";
// img
import avatarJuji from "@/assets/img/avatarJuji.png";
import iconCrown from "@/assets/img/iconCrown.svg";
import Dropdown from "@/components/Dropdown";
import { Link } from "react-router";
function UserMenuResult() {
  const listUser = [
    {
      linkGroup: [
        {
          to: "/profile",
          lable: "Trang cá nhân",
        },
      ],
    },
    {
      linkGroup: [
        {
          to: "/modal-demo",
          lable: "Modal Demo",
        },
        {
          to: "/scroll-demo",
          lable: "Scroll Demo",
        },
        {
          to: "/",
          lable: "Bài viết của tôi",
        },
      ],
    },
    {
      linkGroup: [
        {
          to: "#!",
          lable: "Cài đặt",
        },
        {
          to: "#!",
          lable: "Đăng xuất",
        },
      ],
    },
  ];
  return (
    <div className={styles.result}>
      <Dropdown>
        <div className={styles.header}>
          <div
            className={styles.avatarWrapper}
            style={{ padding: "1px 0 0 0 ", width: "50px", height: "50px" }}
          >
            <img
              src={avatarJuji}
              className={styles.avatar}
              style={{ width: "45px", height: "45px" }}
              alt="Mạnh Thắng"
            />
            <img
              src={iconCrown}
              className={styles.crown}
              style={{ top: "12px", left: "59px", width: "14px" }}
              alt="Mạnh Thắng"
            />
          </div>
          <div className={styles.info}>
            <p className={styles.name}>Mạnh Thắng</p>
            <p className={styles.userName}>@ItadoriYuji01</p>
          </div>
        </div>
        <hr />
        {listUser &&
          listUser.map((item, index) => (
            <div className={styles.content} key={index}>
              <ul className={styles.listUser}>
                {item.linkGroup &&
                  item.linkGroup.map((itemChild) => (
                    <li key={itemChild.lable}>
                      <Link to={itemChild.to} className={styles.linkItem}>
                        {itemChild.lable}
                      </Link>
                    </li>
                  ))}
              </ul>
              <hr />
            </div>
          ))}
      </Dropdown>
    </div>
  );
}
export default UserMenuResult;
