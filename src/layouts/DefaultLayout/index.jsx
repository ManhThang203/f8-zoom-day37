import { Outlet } from "react-router";
import styles from "./DefaultLayout.module.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
function DefaultLayout() {
  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.conatiner}>
        <Outlet />
      </div>
    </>
  );
}
export default DefaultLayout;
