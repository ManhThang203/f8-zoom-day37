// scss
import styles from "./SearchResult.module.scss";
// component
import Dropdown from "@/components/Dropdown";
import SearchResultDetail from "./SearchResultDetail";
// icon
import { BsSearch } from "react-icons/bs";
function SearchResult() {
  return (
    <div className={styles.wrapper}>
      <Dropdown>
        {
          <div className={styles.result}>
            <div className={styles.resultHeader}>
              <BsSearch className={styles.iconHeader} />
              <p className={styles.titleHeader}>Kết quả cho 'javascript'</p>
            </div>
            <div className={styles.container}>
              <SearchResultDetail />
            </div>
          </div>
        }
      </Dropdown>
    </div>
  );
}
export default SearchResult;
