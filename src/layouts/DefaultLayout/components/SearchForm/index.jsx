// scss
import { useState } from "react";
import styles from "./SearchForm.module.scss";
// icon
import { BsSearch } from "react-icons/bs";
// component
import SearchResult from "@/layouts/DefaultLayout/components/SearchResult";

function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        {<BsSearch className={styles.iconSearch} />}
        <input
          type="search"
          placeholder="Tìm kiếm khóa học, bài viết, video, ..."
          onBlur={() => setIsOpen(false)}
          onFocus={() => setIsOpen(true)}
          className={styles.searchInput}
        />
        {isOpen && <SearchResult />}
      </div>
    </div>
  );
}

export default SearchForm;
