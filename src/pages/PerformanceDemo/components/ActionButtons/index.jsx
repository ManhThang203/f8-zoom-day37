// React
import { memo } from "react";
// components
import Button from "@/components/Button";
// Scss
import styles from "./ActionButtons.module.scss";
const ActionButtons = memo(
  ({ onIncrement, onReset, onChangeName, onAddItem }) => {
    console.log("render ActionButtons");
    return (
      <div className={styles.btn}>
        <Button onClick={onReset} outline size="large">
          Reset Count
        </Button>
        <Button onClick={onIncrement} outline size="large">
          Increment Count
        </Button>
        <Button onClick={onChangeName} outline size="large">
          Change Name
        </Button>
        <Button onClick={onAddItem} outline size="large">
          Add Items
        </Button>
      </div>
    );
  }
);

ActionButtons.displayName = "ActionButtons";

export default ActionButtons;
