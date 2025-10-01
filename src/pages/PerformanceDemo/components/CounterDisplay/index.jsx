// React
import { memo } from "react";
// PropTypes
import PropTypes from "prop-types";
// Scss
import styles from "./CounterDisplay.module.scss";
const CounterDisplay = memo(({ count }) => {
  console.log("Render CounterDisplay");
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Count</h2>
      <p className={styles.value}>{count}</p>
    </div>
  );
});

CounterDisplay.displayName = "CounterDisplay";

export default CounterDisplay;
