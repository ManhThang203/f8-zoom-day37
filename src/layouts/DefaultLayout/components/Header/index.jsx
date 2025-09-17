import AppLogo from "@/layouts/DefaultLayout/components/AppLogo";
import SearchForm from "@/layouts/DefaultLayout/components/SearchForm";
import MyCourses from "@/layouts/DefaultLayout/components/MyCourses";
import Notification from "@/layouts/DefaultLayout/components/Notification";
import UserMenu from "@/layouts/DefaultLayout/components/UserMenu";

import styles from "./Header.module.scss";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <AppLogo />
        <SearchForm />
        <div className={styles.header__actions}>
          <MyCourses />
          <Notification />
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
export default Header;
