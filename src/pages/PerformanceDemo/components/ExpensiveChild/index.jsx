// React
import { memo, useMemo } from "react";
// Scss
import style from "./ExpensiveChild.module.scss";

const ExpensiveChild = memo(({ items = [] }) => {
  console.log("Render ExpensiveChild");
  // Tính toán nặng: tìm item có tên dài nhất
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating longest name...");
    let longest = "";
    items.forEach((item) => {
      // Thêm delay giả lập tính toán nặng
      for (let i = 0; i < 100000; i++) {
        if (item.name.length > longest.length) {
          longest = item.name;
        }
      }
    });
    return longest;
  }, [items]);

  return (
    <>
      <h2 className={style.title}>{expensiveCalculation}</h2>
      <p className={style.subtitle}>
        Tổng length:
        <span>{items.length}</span>
      </p>

      <ul className={style.list}>
        <></>
        {items.map((item) => (
          <li key={item.id} className={style.item}>
            <img
              src={`https://ui-avatars.com/api/?name=${item.name}&background=random`}
              alt={item.name}
            />
            <div className={style.content}>
              <h3 className={style.name}>{item.name}</h3>
              <span className={style.email}>{item.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
});
ExpensiveChild.displayName = "ExpensiveChild";
export default ExpensiveChild;
