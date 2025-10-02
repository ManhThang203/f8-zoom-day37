// components
import DataFetcher from "@/components/DataFetcher";
import Loading from "@/components/Loading";
// Scss
import styles from "./RenderPropsDemo.module.scss";
function PostsList() {
  return (
    <>
      <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
        {({ data, loading, error }) => {
          if (loading) {
            return <Loading />;
          }

          if (error) return <div>Error: {error}</div>;
          return (
            <div>
              <h3 className={styles.title}>Posts</h3>
              {data?.map((post) => (
                <div key={post.id} className={styles.list}>
                  {post.title}
                </div>
              ))}
            </div>
          );
        }}
      </DataFetcher>
    </>
  );
}
export default PostsList;
