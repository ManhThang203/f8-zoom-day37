// React
import { useState } from "react";
// Components
import ProductList from "@/components/ProductList";
import UserProfile from "@/components/UserProfile";
import Button from "@/components/Button";
// Layouts
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
// Scss
import styles from "./HOCDemo.module.scss";

function HOCDemo() {
  // State
  const [userLoading, setUserLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>HOC Pattern - withLoading</h1>
          <div className={styles.loading}>
            <UserProfile isLoading={userLoading} />
            <ProductList isLoading={productLoading} />
          </div>
          <div className={styles.btn}>
            <Button
              outline
              onClick={() => setUserLoading((prev) => !prev)}
              size="large"
            >
              Toggle UserLoading
            </Button>
            <Button
              outline
              onClick={() => setProductLoading((prev) => !prev)}
              size="large"
            >
              Toggle ProductLoading
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default HOCDemo;
