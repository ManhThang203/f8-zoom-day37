// scss
import { useState } from "react";
import styles from "./SearchForm.module.scss";
// icon
import { BsSearch } from "react-icons/bs";

function SearchForm() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
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
      </div>
    </div>
  );
}

export default SearchForm;
