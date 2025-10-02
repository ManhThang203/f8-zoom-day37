// Hoc
import withLoading from "@/hoc/withLoading";
// Scss
import styles from "./ProductList.module.scss";
const ProductList = withLoading(() => {
  const products = ["iPhone", "Samsung", "Xiaomi"];

  return (
    <div className={styles.wrapper}>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product}>{product}</div>
      ))}
    </div>
  );
});
export default ProductList;
