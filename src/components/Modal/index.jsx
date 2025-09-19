// React
import PropTypes from "prop-types";
// Component
import Button from "@/components/Button";
// Scss
import styles from "./Modal.module.scss";
// Icon
import { IoCloseOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
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
  bodyOpenClassName,
  htmlOpenClassName,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
}) {
  const [isHidden, setIsHidden] = useState(!isOpen);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRequestClose = () => {
    // bấm nút thì add class hidden luôn
    setIsHidden(true);
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
    if (!shouldCloseOnEsc) return;

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
    };
  }, [isOpen, isHidden, handleRequestClose, shouldCloseOnEsc, className]);
  // xử thêm class open vào body và unmount khỏi body
  useEffect(() => {
    document.body.classList.add(bodyOpenClassName);
    document.documentElement.classList.add(htmlOpenClassName);
    document.body.style.overflowY = "hidden";

    // Clean Up
    return () => {
      document.body.classList.remove(bodyOpenClassName);
      document.documentElement.classList.remove(htmlOpenClassName);
      document.body.style.overflowY = "";
    };
  }, [bodyOpenClassName, htmlOpenClassName]);
  if (!isOpen && isHidden) return null;
  return (
    <div className={styles.modal}>
      <div
        className={clsx(
          styles.content,
          className,
          (isHidden || !isOpen) && styles.hiddenModal
        )}
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
          (isHidden || !isOpen) && styles.hiddenOverlay
        )}
        onClick={() => {
          if (shouldCloseOnOverlayClick) {
            handleRequestClose();
          }
        }}
      ></div>
    </div>
  );
}
Modal.prototype = {
  isOpen: PropTypes.bool,
  shouldCloseOnOverlayClick: PropTypes.bool,
  shouldCloseOnEsc: PropTypes.bool,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  onAfterClose: PropTypes.func,
  overlayClassName: PropTypes.string,
  bodyOpenClassName: PropTypes.string,
  htmlOpenClassName: PropTypes.string,
  className: PropTypes.string,
  closeTimeoutMS: PropTypes.number,
};
export default Modal;
