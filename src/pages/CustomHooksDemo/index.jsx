// React
import PostsList from "./postsList";
import UsersList from "./UsersList";
import clsx from "clsx";
// Layouts
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
// Hooks
import { useToggle } from "@/hooks";
// Scss
import styles from "./CustomHooksDemo.module.scss";
import Button from "@/components/Button";

// import styles from "./CustomHooksDemo.module.scss";
function CustomHooksDemo() {
  const [showUserList, toggleUserList] = useToggle(true);
  const [showPostList, togglePostList] = useToggle(true);
  const [isDark, toggleTheme] = useToggle(true);
  console.log(isDark);

  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.wrapper}>
        <div
          className={clsx(
            styles.container,
            isDark ? styles.bgbright : styles.bgDark
          )}
        >
          <header className={styles.header}>
            <h1 className={styles.title}>Custom Hooks Demo</h1>
            <Button outline size="large" onClick={toggleTheme}>
              {isDark ? "☀️ Light" : "🌙 Dark"} Theme
            </Button>
          </header>
          <main className={styles.main}>
            <div className={styles.cart}>
              <div
                className={clsx(
                  styles.info,
                  isDark ? styles.bgbright : styles.bgDark
                )}
              >
                <div className={styles.header}>
                  <h2 className={styles.title}>Post</h2>
                  <Button
                    outline
                    size="large"
                    onClick={togglePostList}
                    className={styles.btn}
                  >
                    {showPostList ? "Show" : "Hidden"}
                  </Button>
                </div>
                {showPostList && <PostsList isDark={isDark} />}
              </div>
            </div>
            <div className={styles.cart}>
              <div
                className={clsx(
                  styles.info,
                  isDark ? styles.bgbright : styles.bgDark
                )}
              >
                <div className={styles.header}>
                  <h2 className={styles.title}>User</h2>
                  <Button
                    outline
                    size="large"
                    onClick={toggleUserList}
                    className={styles.btn}
                  >
                    {showPostList ? "Show" : "Hidden"}
                  </Button>
                </div>
                {showUserList && <UsersList isDark={isDark} />}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default CustomHooksDemo;
