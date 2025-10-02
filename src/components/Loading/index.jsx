// Scss
import clsx from "clsx";
import styles from "./Loading.module.scss";
function Loading({ className }) {
  return (
    <>
      <span className={clsx(styles.loader, className)}></span>
    </>
  );
}
export default Loading;
