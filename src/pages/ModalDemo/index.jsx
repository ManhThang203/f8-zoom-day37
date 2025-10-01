// Component
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
// Scss
import styles from "./ModalDemo.module.scss";
import Button from "@/components/Button";
import { useRef, useState } from "react";
import Modal from "@/components/Modal";
import GoToTop from "@/components/GoToTop";

function ModalDemo() {
  // State
  const [isModalBassic, setModalBassic] = useState(false);
  const [isModalAnimation, setModalAnimation] = useState(false);
  const [isModalNoClickOverlay, setModalNoClickOverlay] = useState(false);
  const [isModalNoCloseEsc, setModalNoCloseEsc] = useState(false);
  const [isModalCustom, setModalCustom] = useState(false);
  const [isModalCallbacks, setModalCallbacks] = useState(false);
  const [isModalRef, setisModalRef] = useState(false);

  // Ref
  const modalRef = useRef(null);

  return (
    <>
      <Header />
      <Navigation />
      <section className={styles.wrapper}>
        <h1 className={styles.titleHeader}>Demo Modal</h1>
        <div className={styles.content}>
          <div className={styles.demoSection}>
            <h2 className={styles.titleText}>Modal Bassic</h2>
            <Button
              size="large"
              outline
              className={styles.btn}
              onClick={() => setModalBassic(true)}
            >
              Open Modal
            </Button>
            {isModalBassic && (
              <Modal
                isOpen={isModalBassic}
                onRequestClose={() => setModalBassic(false)}
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
              onClick={() => setModalAnimation(true)}
            >
              Open Modal
            </Button>
            {isModalAnimation && (
              <Modal
                isOpen={isModalAnimation}
                onRequestClose={() => setModalAnimation(false)}
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
              onClick={() => setModalNoClickOverlay(true)}
            >
              Open Modal
            </Button>
            {isModalNoClickOverlay && (
              <Modal
                isOpen={isModalNoClickOverlay}
                onRequestClose={() => setModalNoClickOverlay(false)}
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
              onClick={() => setModalNoCloseEsc(true)}
            >
              Open Modal
            </Button>
            {isModalNoCloseEsc && (
              <Modal
                isOpen={isModalNoCloseEsc}
                onRequestClose={() => setModalNoCloseEsc(false)}
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
              onClick={() => setModalCustom(true)}
            >
              Open Modal
            </Button>
            {isModalCustom && (
              <Modal
                isOpen={isModalCustom}
                onRequestClose={() => setModalCustom(false)}
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
              onClick={() => setModalCallbacks(true)}
            >
              Open Modal
            </Button>
            {isModalCallbacks && (
              <Modal
                isOpen={isModalCallbacks}
                onRequestClose={() => setModalCallbacks(false)}
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
        <h1 className={styles.titleHeader}>Demo Modal</h1>
        <div className={styles.btn}>
          <Button
            size="large"
            outline
            className={styles.btn}
            onClick={() => setisModalRef(true)}
          >
            Open Modal
          </Button>
        </div>
        <Modal
          ref={modalRef}
          isOpen={isModalRef}
          onRequestClose={() => setisModalRef(false)}
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
