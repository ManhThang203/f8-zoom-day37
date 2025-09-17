// React
import PropTypes from "prop-types";
// Component
import Button from "@/components/Button";
// Scss
import styles from "./Modal.module.scss";
// Icon
import { IoCloseOutline } from "react-icons/io5";
import { useEffect } from "react";
import clsx from "clsx";
function Modal({
  isOpen,
  children,
  onRequestClose,
  onAfterOpen,
  onAfterClose,
  closeTimeoutMS = 0,
  overlayClassName,
  className,
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRequestClose = () => {
    setTimeout(onRequestClose, closeTimeoutMS);
  };
  useEffect(() => {
    if (isOpen) {
      onAfterOpen();
    } else {
      onAfterClose();
    }
    // Clean Up
    return () => {
      onAfterClose();
    };
  }, [isOpen, onAfterOpen, onRequestClose, onAfterClose]);
  // xử lý đóng modal khi
  useEffect(() => {
    const handle = (e) => {
      if (e.code === "Escape") {
        handleRequestClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handle);
    }
    // Clean Up
    return () => {
      document.removeEventListener("keydown", handle);
      // console.log(document.querySelector(`.${className}`));
      console.log(document.querySelector(className));
    };
  }, [isOpen, handleRequestClose, className]);
  // if (!isOpen) return null;
  return (
    <div className={styles.modal}>
      <div
        className={clsx(styles.content, className, !isOpen && styles.hidden)}
      >
        {/* btn close */}
        <Button className={styles.btnClose} onClick={handleRequestClose}>
          <IoCloseOutline className={styles.icon} />
        </Button>
        {/* Body */}
        <div className={styles.body}>{children}</div>
        <div className={styles.btn}>
          <Button size="large" outline onClick={handleRequestClose}>
            Cancel
          </Button>
          <Button size="large" outline onClick={handleRequestClose}>
            Submit
          </Button>
        </div>
      </div>
      <div
        className={clsx(
          styles.overlay,
          overlayClassName,
          !isOpen && styles.hidden
        )}
        onClick={handleRequestClose}
      ></div>
    </div>
  );
}
Modal.prototype = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,
  closeTimeoutMS: PropTypes.number,
  overlayClassName: PropTypes.string,
  className: PropTypes.string,
};
export default Modal;
