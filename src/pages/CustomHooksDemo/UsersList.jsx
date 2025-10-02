// Hooks
import { useApi } from "@/hooks";
// Components
import Button from "@/components/Button";
import Loading from "@/components/Loading";
// Scss
import styles from "./CustomHooksDemo.module.scss";
import clsx from "clsx";
function UsersList({ isDark }) {
  const { data, loading, error, fetchData } = useApi(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );

  if (loading) return <Loading className={styles.loadingUserList} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Button
        onClick={fetchData}
        outline
        size="large"
        className={styles.btnUser}
      >
        Refetch Data
      </Button>
      {data?.map((item) => (
        <div
          key={item.id}
          className={clsx(
            styles.item,
            isDark ? styles.paragraph : styles.paragraphChange
          )}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
export default UsersList;
