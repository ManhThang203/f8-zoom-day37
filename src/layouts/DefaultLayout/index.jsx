import { Outlet } from "react-router";
import styles from "./DefaultLayout.module.scss";
function DefaultLayout() {
  return (
    <div className={styles.conatiner}>
      <Outlet />
    </div>
  );
}
export default DefaultLayout;
