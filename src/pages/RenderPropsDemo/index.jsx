// Other
import PostsList from "./PostsList";
import UsersList from "./UsersList";
// Scss
import styles from "./RenderPropsDemo.module.scss";
function RenderPropsDemo() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.loading}>
            <PostsList />
            <UsersList />
          </div>
        </div>
      </div>
    </>
  );
}
export default RenderPropsDemo;
