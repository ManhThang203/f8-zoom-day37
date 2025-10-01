// React
import { useCallback, useEffect, useState } from "react";
// layouts
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
// components
import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";
// Scss
import styles from "./PerformanceDemo.module.scss";

function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("User A");
  const [items, setItems] = useState([]);

  // xử lý call api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // hàm xử lý tính toán
  const handleCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  // hàm xử lý Reset
  const handleRest = useCallback(() => {
    setCount(0);
  }, []);
  // hàm xử lý change Name
  const handleChangeName = useCallback(() => {
    if (items.length === 0) return;

    let randomIndex;
    let randomName;
    do {
      randomIndex = Math.floor(Math.random() * items.length);
      randomName = items[randomIndex].name;
    } while (randomName === name && items.length > 1);
    setName(randomName);
  }, [items, name]);
  // hàm xử lý khi add Items
  const handleAddItems = useCallback(() => {
    setItems((prevItems) => [
      {
        id: Date.now(),
        name: `User ${prevItems.length + 1}`,
        email: `user ${prevItems.length + 1}@gmail.com`,
      },
      ...prevItems,
    ]);
  }, []);

  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <section className={styles.content}>
            <header className={styles.header}>
              <h1 className={styles.title}>Performance Demo</h1>
              <p className={styles.subtitle}>
                Tối ưu re-render với React.memo & useCallback.
              </p>
            </header>
            <main className={styles.girl}>
              {/* Counter + Change Name */}
              <section className={styles.counter}>
                <CounterDisplay count={count} />
                <div className={styles.user}>
                  <p className={styles.meta}>
                    User:
                    <span>{name}</span>
                  </p>
                </div>
              </section>
              {/* Item */}
              <section className={styles.items}>
                {items && <ExpensiveChild items={items} />}
              </section>
            </main>
            <div className={styles.btn}>
              <ActionButtons
                onIncrement={handleCount}
                onReset={handleRest}
                onChangeName={handleChangeName}
                onAddItem={handleAddItems}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default PerformanceDemo;
