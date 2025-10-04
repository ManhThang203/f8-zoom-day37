// React
import { useRef, useState } from "react";
// Scss
import styles from "./ModalDemo.module.scss";
// Components
import Button from "@/components/Button";
import Modal from "@/components/Modal";

function ModalDemo() {
  // State
  const [isBasicModal, setBasicModal] = useState(false);
  const [isAnimationModal, setAnimationModal] = useState(false);
  const [isNoClickOverlayModal, setNoClickOverlayModal] = useState(false);
  const [isNoCloseEscModal, setNoCloseEscModal] = useState(false);
  const [isCustomModal, setIsCustomModal] = useState(false);
  const [isCallbackModal, setIsCallbackModal] = useState(false);
  const [isModalRef] = useState(false);

  // Ref
  const modalRef = useRef(null);

  return (
    <>
      <section className={styles.wrapper}>
        <h1 className={styles.titleHeader}>Demo Modal</h1>
        <div className={styles.content}>
          <div className={styles.demoSection}>
            <h2 className={styles.titleText}>Modal Bassic</h2>
            <Button
              size="large"
              outline
              className={styles.btn}
              onClick={() => setBasicModal(true)}
            >
              Open Modal
            </Button>
            {isBasicModal && (
              <Modal
                isOpen={isBasicModal}
                onRequestClose={() => setBasicModal(false)}
              >
                <h2 className={styles.titleModal}>Xin chào 😗</h2>
                <p>
                  Inventore facere repellat unde ab, eveniet nisi, eos
                  cupiditate quibusdam dolores ut dolorem accusamus deserunt,
                  omnis reiciendis pariatur quisquam magni.
                </p>
              </Modal>
            )}
          </div>
          <div className={styles.demoSection}>
            <h2 className={styles.titleText}>Modal Animation</h2>
            <Button
              size="large"
              outline
              className={styles.btn}
              onClick={() => setAnimationModal(true)}
            >
              Open Modal
            </Button>
            {isAnimationModal && (
              <Modal
                isOpen={isAnimationModal}
                onRequestClose={() => setAnimationModal(false)}
                closeTimeoutMS={500}
              >
                <h2 className={styles.titleModal}>Xin chào 😗</h2>
                <p>
                  Inventore facere repellat unde ab, eveniet nisi, eos
                  cupiditate quibusdam dolores ut dolorem accusamus deserunt,
                  omnis reiciendis pariatur quisquam magni.
                </p>
              </Modal>
            )}
          </div>
          <div className={styles.demoSection}>
            <h2 className={styles.titleText}>Modal No Click Overlay</h2>
            <Button
              size="large"
              outline
              className={styles.btn}
              onClick={() => setNoClickOverlayModal(true)}
            >
              Open Modal
            </Button>
            {isNoClickOverlayModal && (
              <Modal
                isOpen={isNoClickOverlayModal}
                onRequestClose={() => setNoClickOverlayModal(false)}
                closeTimeoutMS={500}
                shouldCloseOnOverlayClick={false}
              >
                <h2 className={styles.titleModal}>Xin chào 😗</h2>
                <p>
                  Inventore facere repellat unde ab, eveniet nisi, eos
                  cupiditate quibusdam dolores ut dolorem accusamus deserunt,
                  omnis reiciendis pariatur quisquam magni.
                </p>
              </Modal>
            )}
          </div>
          <div className={styles.demoSection}>
            <h2 className={styles.titleText}>Modal No Click Overlay</h2>
            <Button
              size="large"
              outline
              className={styles.btn}
              onClick={() => setNoCloseEscModal(true)}
            >
              Open Modal
            </Button>
            {isNoCloseEscModal && (
              <Modal
                isOpen={isNoCloseEscModal}
                onRequestClose={() => setNoCloseEscModal(false)}
                closeTimeoutMS={500}
                shouldCloseOnEsc={false}
              >
                <h2 className={styles.titleModal}>Xin chào 😗</h2>
                <p>
                  Inventore facere repellat unde ab, eveniet nisi, eos
                  cupiditate quibusdam dolores ut dolorem accusamus deserunt,
                  omnis reiciendis pariatur quisquam magni.
                </p>
              </Modal>
            )}
          </div>
          <div className={styles.demoSection}>
            <h2 className={styles.titleText}>Modal Custom</h2>
            <Button
              size="large"
              outline
              className={styles.btn}
              onClick={() => setIsCustomModal(true)}
            >
              Open Modal
            </Button>
            {isCustomModal && (
              <Modal
                isOpen={isCustomModal}
                onRequestClose={() => setIsCustomModal(false)}
                closeTimeoutMS={500}
                overlayClassName={styles.customOverlay}
                className={styles.customModalBody}
              >
                <h2 className={styles.titleModal}>Xin chào 😗</h2>
                <p>
                  Inventore facere repellat unde ab, eveniet nisi, eos
                  cupiditate quibusdam dolores ut dolorem accusamus deserunt,
                  omnis reiciendis pariatur quisquam magni.
                </p>
              </Modal>
            )}
          </div>
          <div className={styles.demoSection}>
            <h2 className={styles.titleText}>Modal Callbacks</h2>
            <Button
              size="large"
              outline
              className={styles.btn}
              onClick={() => setIsCallbackModal(true)}
            >
              Open Modal
            </Button>
            {isCallbackModal && (
              <Modal
                isOpen={isCallbackModal}
                onRequestClose={() => setIsCallbackModal(false)}
                closeTimeoutMS={500}
                onAfterOpen={() => console.log("Modal đã mở")}
                onAfterClose={() => console.log("Modal đã đóng")}
                bodyOpenClassName="modal-open"
                htmlOpenClassName="modal-open"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
              >
                <h2 className={styles.titleModal}>Xin chào 😗</h2>
                <p>
                  Inventore facere repellat unde ab, eveniet nisi, eos
                  cupiditate quibusdam dolores ut dolorem accusamus deserunt,
                  omnis reiciendis pariatur quisquam magni.
                </p>
              </Modal>
            )}
          </div>
        </div>
      </section>
      <section className={styles.wrapper}>
        <h1 className={styles.titleHeader}>Demo Ref Modal</h1>
        <div className={styles.btn}>
          <Button
            size="large"
            outline
            className={styles.btn}
            onClick={() => modalRef.current.open()}
          >
            Open Ref Modal
          </Button>
          <Button
            size="large"
            outline
            className={styles.btn}
            onClick={() => modalRef.current.open()}
          >
            Toggle Ref Modal
          </Button>
        </div>

        <Modal
          ref={modalRef}
          isOpen={isModalRef}
          onRequestClose={() => modalRef.current.close()}
          closeTimeoutMS={500}
          onAfterOpen={() => console.log("Modal đã mở")}
          onAfterClose={() => console.log("Modal đã đóng")}
          bodyOpenClassName="modal-open"
          htmlOpenClassName="modal-open"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
        >
          <h2 className={styles.titleModal}>Xin chào 😗</h2>
          <p>
            Inventore facere repellat unde ab, eveniet nisi, eos cupiditate
            quibusdam dolores ut dolorem accusamus deserunt, omnis reiciendis
            pariatur quisquam magni.
          </p>
        </Modal>
      </section>
    </>
  );
}
export default ModalDemo;
