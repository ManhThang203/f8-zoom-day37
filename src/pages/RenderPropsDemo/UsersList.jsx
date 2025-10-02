// components
import DataFetcher from "@/components/DataFetcher";
import Loading from "@/components/Loading";
// Scss
import styles from "./RenderPropsDemo.module.scss";
function UsersList() {
  return (
    <>
      <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
        {({ data, loading, error }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) return <div>Error: {error}</div>;
          return (
            <div>
              <h3 className={styles.title}>Users</h3>
              {data?.map((user) => (
                <div key={user.id} className={styles.list}>
                  {user.name} - {user.email}
                </div>
              ))}
            </div>
          );
        }}
      </DataFetcher>
    </>
  );
}
export default UsersList;
