// React
import { useEffect, useState } from "react";
// Scss
import styles from "./Profile.module.scss";
// img
import avatarJuji from "@/assets/img/avatarJuji.png";
import iconCrown from "@/assets/img/iconCrown.svg";

function Profile() {
  const [previewUrl, setPreviewUrl] = useState(null);
  useEffect(() => {
    // Clean Up
    return () => {
      URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);
  const handleChangeImg = (e) => {
    const img = e.target.files[0];
    //  createObjectURL chuyển file ảnh thành 1 đường dẫn tạm thời trỏ đến dữ liệu nhị phân (Blob / File)
    const previewUrl = URL.createObjectURL(img);
    console.log(previewUrl);
    setPreviewUrl(previewUrl);
  };
  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.info}>
          <label className={styles.avatarWrapper}>
            {/* có thẻ sử dụng  multiple để lấy nhiều ảnh */}
            <input type="file" hidden onChange={handleChangeImg} />
            <img
              src={previewUrl || avatarJuji}
              className={styles.avatar}
              alt="Mạnh Thắng"
            />
            <img src={iconCrown} className={styles.crown} alt="" />
          </label>
        </div>
      </div>
    </>
  );
}
export default Profile;
