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
  closeTimeoutMS = 200,
  overlayClassName,
  className,
  bodyOpenClassName,
  htmlOpenClassName,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
}) {
  const [isHidden, setIsHidden] = useState(!isOpen);

  const handleRequestClose = () => {
    setIsHidden(true);
    setTimeout(onRequestClose, closeTimeoutMS);
  };

  useEffect(() => {
    if (isOpen) {
      setIsHidden(false); // Đặt isHidden = false khi modal mở
      onAfterOpen?.();
    } else {
      onAfterClose?.();
    }

    return () => {
      onAfterClose?.();
    };
  }, [isOpen, onAfterOpen, onAfterClose]);

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

    return () => {
      document.removeEventListener("keydown", handle);
    };
  }, [isOpen, shouldCloseOnEsc]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(bodyOpenClassName || "modal-open");
      document.documentElement.classList.add(htmlOpenClassName || "modal-open");
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.classList.remove(bodyOpenClassName || "modal-open");
      document.documentElement.classList.remove(
        htmlOpenClassName || "modal-open"
      );
      document.body.style.overflowY = "";
    };
  }, [isOpen, bodyOpenClassName, htmlOpenClassName]);

  if (!isOpen && isHidden) return null;

  return (
    <div className={styles.modal}>
      <div
        className={clsx(
          styles.content,
          className, // Custom className sẽ được apply
          (isHidden || !isOpen) && styles.hiddenModal
        )}
      >
        <Button className={styles.btnClose} onClick={handleRequestClose}>
          <IoCloseOutline className={styles.icon} />
        </Button>

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
          overlayClassName, // Custom overlayClassName sẽ được apply
          (isHidden || !isOpen) && styles.hiddenOverlay
        )}
        onClick={() => {
          if (shouldCloseOnOverlayClick) {
            handleRequestClose();
          }
        }}
      />
    </div>
  );
}

Modal.propTypes = {
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
