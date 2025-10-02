// Hooks
import { useApi } from "@/hooks";
// Components
import Button from "@/components/Button";
import Loading from "@/components/Loading";
// Scss
import styles from "./CustomHooksDemo.module.scss";

function PostsList({ isDark }) {
  const { data, loading, error, fetchData } = useApi(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (loading) return <Loading className={styles.loadingPost} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Button
        onClick={fetchData}
        outline
        size="large"
        className={styles.btnPost}
      >
        Refetch Data
      </Button>
      {data?.map((item) => (
        <div
          key={item.id}
          className={isDark ? styles.paragraph : styles.paragraphChange}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
export default PostsList;
