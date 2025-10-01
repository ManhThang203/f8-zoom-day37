// React
import { useRef, useImperativeHandle, forwardRef } from "react";
// Scss
import styles from "./CustomInput.module.scss";
const CustomInput = forwardRef(
  ({ label, placeholder, value, onChange }, ref) => {
    // Lấy ra giá trị của thẻ input hiện tại
    const inputRef = useRef(null);
    //  Tùy chỉnh giá trị ref
    useImperativeHandle(
      ref,
      () => ({
        focus() {
          inputRef.current.focus();
        },
        blur() {
          inputRef.current.blur();
        },
        getValue() {
          return inputRef.current.value; // là giá trị thì phải Return
        },
      }),
      []
    );
    return (
      <div className={styles.wrapper}>
        <label className={styles.lable}>
          <span className={styles.text}>{label}</span>
          <input
            type="text"
            ref={inputRef}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={styles.input}
          />
        </label>
      </div>
    );
  }
);
CustomInput.displayName = "CustomInput";
export default CustomInput;
