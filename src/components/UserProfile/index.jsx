// Hoc
import withLoading from "@/hoc/withLoading";
// Scss
import styles from "./UserProfile.module.scss";
const UserProfile = withLoading(() => {
  return (
    <div className={styles.wrapper}>
      <h3>User Profile</h3>
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
    </div>
  );
});
export default UserProfile;
