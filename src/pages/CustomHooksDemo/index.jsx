// React
import PostsList from "./postsList";
import UsersList from "./UsersList";
import clsx from "clsx";

// Hooks
import { useToggle } from "@/hooks";
// Scss
import styles from "./CustomHooksDemo.module.scss";
import Button from "@/components/Button";

// import styles from "./CustomHooksDemo.module.scss";
function CustomHooksDemo() {
  // State
  const [showUserList, toggleUserList] = useToggle(true);
  const [showPostList, togglePostList] = useToggle(true);
  const [isDark, toggleTheme] = useToggle(true);

  return (
    <>
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
                    {showPostList ? "Hidden" : "Show"}
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
                    {showUserList ? "Hidden" : "Show"}
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
