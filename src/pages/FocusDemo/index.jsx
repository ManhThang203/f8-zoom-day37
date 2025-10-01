// React
import { useRef, useState } from "react";
// Components
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
// Layouts
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
// Scss
import styles from "./FocusDemo.module.scss";
function FocusDemo() {
  // State
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  // UseRef
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const countRef = useRef(0);

  // Hàm xử lý Clear value các input
  const handleClearInput = () => {
    setValue1("");
    setValue2("");
  };

  // Hàm xử lý lấy ra giá trị Input
  const handleValueInput = () => {
    const value1 = inputRef1.current.getValue();
    const value2 = inputRef1.current.getValue();
    if (value1 === "" && value2 === "") return;
    alert(`
        Giá trị input 1: ${value1}\n 
        Giá trị input 2: ${value2}
        `);
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.contaier}>
          <CustomInput
            ref={inputRef1}
            label={"Input 1"}
            placeholder={"Nhập nội dung input 1..."}
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <CustomInput
            ref={inputRef2}
            label={"Input 2"}
            placeholder={"Nhập nội dung input 2..."}
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
          <div className={styles.btn}>
            <Button
              onClick={() => inputRef1.current.focus()}
              outline
              size="large"
            >
              Focus Input 1
            </Button>
            <Button
              onClick={() => inputRef2.current.focus()}
              outline
              size="large"
            >
              Focus Input 2
            </Button>
            <Button onClick={handleClearInput} outline size="large">
              Clear
            </Button>
            <Button onClick={handleValueInput} outline size="large">
              Get Value
            </Button>
          </div>
          <div className={styles.countRender}>
            <div className={styles.container}>
              <p className={styles.title}>Render Count</p>
              <p className={styles.value}>{++countRef.current}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FocusDemo;
