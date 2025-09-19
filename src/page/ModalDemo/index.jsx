// Component
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
// Scss
import styles from "./ModalDemo.module.scss";
import Button from "@/components/Button";
import { useState } from "react";
import Modal from "@/components/Modal";
import GoToTop from "@/components/GoToTop";
function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  function handeleOpenModal() {
    setIsOpen(true);
  }
  function handeleClosekModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.wrapper}>
        <p className={styles.textFirst}>
          <strong>L</strong>orem ipsum dolor, sit amet consectetur adipisicing
          elit. A maxime tempore at autem totam quidem molestiae rem aliquid
          asperiores dolorum quia eos veritatis, esse dicta quisquam deleniti
          enim quas vel. Ipsam neque magni accusamus vero voluptate accusantium?
          Nemo voluptates fugit adipisci non quae blanditiis maiores iusto amet
          perferendis quidem deleniti, cupiditate repudiandae. Quos ducimus
          totam, soluta ipsam accusamus consectetur quod. Ratione amet voluptas
          maiores accusantium. Deleniti eius ullam unde placeat repellat
          consequatur accusamus ipsa voluptatem cupiditate laudantium quisquam
          distinctio nostrum dolores illo tempora sapiente excepturi quasi ab,
          dolorum porro! Inventore? Quos minus ea, officiis facere eius possimus
          voluptates facilis autem maiores consequatur earum omnis ut molestias.
        </p>
        <div className={styles.wrapperbtn}>
          <Button
            size="large"
            outline
            className={styles.btn}
            onClick={() => handeleOpenModal()}
          >
            Open Modal
          </Button>
          {isOpen && (
            <Modal
              isOpen={isOpen}
              onRequestClose={handeleClosekModal}
              onAfterOpen={() => console.log("Modal đã mở")}
              onAfterClose={() => console.log("Modal đã đóng")}
              closeTimeoutMS={400}
              overlayClassName={styles[`custom-overlay`]}
              className={styles[`custom-modal`]}
              bodyOpenClassName={"modal-open"}
              htmlOpenClassName={styles["modal-open"]}
              shouldCloseOnOverlayClick={true}
              shouldCloseOnEsc={false}
            >
              <h2 className={styles.titleModal}>Xin chào 😗</h2>
              <p>
                Inventore facere repellat unde ab, eveniet nisi, eos cupiditate
                quibusdam dolores ut dolorem accusamus deserunt, omnis
                reiciendis pariatur quisquam magni.
              </p>
            </Modal>
          )}
          <Button
            size="large"
            outline
            className={styles.btn}
            onClick={() => handeleClosekModal()}
          >
            Open Modal
          </Button>
        </div>
        <p className={styles.textLast}>
          <strong>L</strong>orem ipsum dolor, sit amet consectetur adipisicing
          elit. A maxime tempore at autem totam quidem molestiae rem aliquid
          asperiores dolorum quia eos veritatis, esse dicta quisquam deleniti
          enim quas vel. Ipsam neque magni accusamus vero voluptate accusantium?
          Nemo voluptates fugit adipisci non quae blanditiis maiores iusto amet
          perferendis quidem deleniti, cupiditate repudiandae. Quos ducimus
          totam, soluta ipsam accusamus consectetur quod. Ratione amet voluptas
          maiores accusantium. Deleniti eius ullam unde placeat repellat
          consequatur accusamus ipsa voluptatem cupiditate laudantium quisquam
          distinctio nostrum dolores illo tempora sapiente excepturi quasi ab,
          dolorum porro! Inventore? Quos minus ea, officiis facere eius possimus
          voluptates facilis autem maiores consequatur earum omnis ut molestias
          repellat quas tempore dolores odio temporibus nemo voluptas fuga.
          Recusandae dolores cumque temporibus quasi! Quae nobis adipisci non
          rerum ex dignissimos voluptate exercitationem eveniet, distinctio
          illum porro alias, perspiciatis inventore molestias, obcaecati fugiat
          quod debitis voluptas unde quibusdam laborum eius? Quidem labore qui
          iste. Excepturi id magni illo amet et voluptates nulla voluptatem
          deserunt esse placeat nam, facilis aliquid, officiis neque, quis nobis
          ratione cumque corrupti possimus quidem molestias commodi libero A
          maxime tempore at autem totam quidem molestiae rem aliquid asperiores
          dolorum quia eos veritatis, esse dicta quisquam deleniti enim quas
          vel. Ipsam neque magni accusamus vero voluptate accusantium? Nemo
          voluptates fugit adipisci non quae blanditiis maiores iusto amet
          perferendis quidem deleniti, cupiditate repudiandae. Quos ducimus
          totam, soluta ipsam accusamus consectetur quod. Ratione amet voluptas
          maiores accusantium. Deleniti eius ullam unde placeat repellat
          consequatur accusamus ipsa voluptatem cupiditate laudantium quisquam
          distinctio nostrum dolores illo tempora sapiente excepturi quasi ab,
          dolorum porro! Inventore? Quos minus ea, officiis facere eius possimus
          voluptates facilis autem maiores consequatur earum omnis ut molestias
          repellat quas tempore dolores odio temporibus nemo voluptas fuga.
          Recusandae dolores cumque temporibus quasi! Quae nobis adipisci non
          rerum ex dignissimos voluptate exercitationem eveniet, distinctio
          illum porro alias, perspiciatis inventore molestias, obcaecati fugiat
          quod debitis voluptas unde quibusdam laborum eius? Quidem labore qui
          iste. Excepturi id magni illo amet et voluptates nulla voluptatem
          deserunt esse placeat nam, facilis aliquid, officiis neque, quis nobis
          ratione cumque corrupti possimus quidem molestias commodi libero A
          maxime tempore at autem totam quidem molestiae rem aliquid asperiores
          dolorum quia eos veritatis, esse dicta quisquam deleniti enim quas
          vel. Ipsam neque magni accusamus vero voluptate accusantium? Nemo
          voluptates fugit adipisci non quae blanditiis maiores iusto amet
          perferendis quidem deleniti, cupiditate repudiandae. Quos ducimus
          totam, soluta ipsam accusamus consectetur quod. Ratione amet voluptas
          maiores accusantium. Deleniti eius ullam unde placeat repellat
          consequatur accusamus ipsa voluptatem cupiditate laudantium quisquam
          distinctio nostrum dolores illo tempora sapiente excepturi quasi ab,
          dolorum porro! Inventore? Quos minus ea, officiis facere eius possimus
          voluptates facilis autem maiores consequatur earum omnis ut molestias
          repellat quas tempore dolores odio temporibus nemo voluptas fuga.
          Recusandae dolores cumque temporibus quasi! Quae nobis adipisci non
          rerum ex dignissimos voluptate exercitationem eveniet, distinctio
          illum porro alias, perspiciatis inventore molestias, obcaecati fugiat
          quod debitis voluptas unde quibusdam laborum eius? Quidem labore qui
          iste. Excepturi id magni illo amet et voluptates nulla voluptatem
          deserunt esse placeat nam, facilis aliquid, officiis neque, quis nobis
          ratione cumque corrupti possimus quidem molestias commodi libero A
          maxime tempore at autem totam quidem molestiae rem aliquid asperiores
          dolorum quia eos veritatis, esse dicta quisquam deleniti enim quas
          vel. Ipsam neque magni accusamus vero voluptate accusantium? Nemo
          voluptates fugit adipisci non quae blanditiis maiores iusto amet
          perferendis quidem deleniti, cupiditate repudiandae. Quos ducimus
          totam, soluta ipsam accusamus consectetur quod. Ratione amet voluptas
          maiores accusantium. Deleniti eius ullam unde placeat repellat
          consequatur accusamus ipsa voluptatem cupiditate laudantium quisquam
          distinctio nostrum dolores illo tempora sapiente excepturi quasi ab,
          dolorum porro! Inventore? Quos minus ea, officiis facere eius possimus
          voluptates facilis autem maiores consequatur earum omnis ut molestias
          repellat quas tempore dolores odio temporibus nemo voluptas fuga.
          Recusandae dolores cumque temporibus quasi! Quae nobis adipisci non
          rerum ex dignissimos voluptate exercitationem eveniet, distinctio
          illum porro alias, perspiciatis inventore molestias, obcaecati fugiat
          quod debitis voluptas unde quibusdam laborum eius? Quidem labore qui
          iste. Excepturi id magni illo amet et voluptates nulla voluptatem
          deserunt esse placeat nam, facilis aliquid, officiis neque, quis nobis
          ratione cumque corrupti possimus quidem molestias commodi libero
        </p>
        <p className={styles.textLast}>
          <strong>L</strong>orem ipsum dolor, sit amet consectetur adipisicing
          elit. A maxime tempore at autem totam quidem molestiae rem aliquid
          asperiores dolorum quia eos veritatis, esse dicta quisquam deleniti
          enim quas vel. Ipsam neque magni accusamus vero voluptate accusantium?
          Nemo voluptates fugit adipisci non quae blanditiis maiores iusto amet
          perferendis quidem deleniti, cupiditate repudiandae. Quos ducimus
          totam, soluta ipsam accusamus consectetur quod. Ratione amet voluptas
          maiores accusantium. Deleniti eius ullam unde placeat repellat
          consequatur accusamus ipsa voluptatem cupiditate laudantium quisquam
          distinctio nostrum dolores illo tempora sapiente excepturi quasi ab,
          dolorum porro! Inventore? Quos minus ea, officiis facere eius possimus
          voluptates facilis autem maiores consequatur earum omnis ut molestias
          repellat quas tempore dolores odio temporibus nemo voluptas fuga.
          Recusandae dolores cumque temporibus quasi! Quae nobis adipisci non
          rerum ex dignissimos voluptate exercitationem eveniet, distinctio
          illum porro alias, perspiciatis inventore molestias, obcaecati fugiat
          quod debitis voluptas unde quibusdam laborum eius? Quidem labore qui
          iste. Excepturi id magni illo amet et voluptates nulla voluptatem
          deserunt esse placeat nam, facilis aliquid, officiis neque, quis nobis
          ratione cumque corrupti possimus quidem molestias commodi libero A
          maxime tempore at autem totam quidem molestiae rem aliquid asperiores
          dolorum quia eos veritatis, esse dicta quisquam deleniti enim quas
          vel. Ipsam neque magni accusamus vero voluptate accusantium? Nemo
          voluptates fugit adipisci non quae blanditiis maiores iusto amet
          perferendis quidem deleniti, cupiditate repudiandae. Quos ducimus
          totam, soluta ipsam accusamus consectetur quod. Ratione amet voluptas
          maiores accusantium. Deleniti eius ullam unde placeat repellat
          consequatur accusamus ipsa voluptatem cupiditate laudantium quisquam
          distinctio nostrum dolores illo tempora sapiente excepturi quasi ab,
          dolorum porro! Inventore? Quos minus ea, officiis facere eius possimus
          voluptates facilis autem maiores consequatur earum omnis ut molestias
          repellat quas tempore dolores odio temporibus nemo voluptas fuga.
          Recusandae dolores cumque temporibus quasi! Quae nobis adipisci non
          rerum ex dignissimos voluptate exercitationem eveniet, distinctio
          illum porro alias, perspiciatis inventore molestias, obcaecati fugiat
          quod debitis voluptas unde quibusdam laborum eius? Quidem labore qui
          iste. Excepturi id magni illo amet et voluptates nulla voluptatem
          deserunt esse placeat nam, facilis aliquid, officiis neque, quis nobis
          ratione cumque corrupti possimus quidem molestias commodi libero A
          maxime tempore at autem totam quidem molestiae rem aliquid asperiores
          dolorum quia eos veritatis, esse dicta quisquam deleniti enim quas
          vel. Ipsam neque magni accusamus vero voluptate accusantium? Nemo
          voluptates fugit adipisci non quae blanditiis maiores iusto amet
          perferendis quidem deleniti, cupiditate repudiandae. Quos ducimus
          totam, soluta ipsam accusamus consectetur quod. Ratione amet voluptas
          maiores accusantium. Deleniti eius ullam unde placeat repellat
          consequatur accusamus ipsa voluptatem cupiditate laudantium quisquam
          distinctio nostrum dolores illo tempora sapiente excepturi quasi ab,
          dolorum porro! Inventore? Quos minus ea, officiis facere eius possimus
          voluptates facilis autem maiores consequatur earum omnis ut molestias
          repellat quas tempore dolores odio temporibus nemo voluptas fuga.
          Recusandae dolores cumque temporibus quasi! Quae nobis adipisci non
          rerum ex dignissimos voluptate exercitationem eveniet, distinctio
          illum porro alias, perspiciatis inventore molestias, obcaecati fugiat
          quod debitis voluptas unde quibusdam laborum eius? Quidem labore qui
          iste. Excepturi id magni illo amet et voluptates nulla voluptatem
          deserunt esse placeat nam, facilis aliquid, officiis neque, quis nobis
          ratione cumque corrupti possimus quidem molestias commodi libero A
          maxime tempore at autem totam quidem molestiae rem aliquid asperiores
          dolorum quia eos veritatis, esse dicta quisquam deleniti enim quas
          vel. Ipsam neque magni accusamus vero voluptate accusantium? Nemo
          voluptates fugit adipisci non quae blanditiis maiores iusto amet
          perferendis quidem deleniti, cupiditate repudiandae. Quos ducimus
          totam, soluta ipsam accusamus consectetur quod. Ratione amet voluptas
          maiores accusantium. Deleniti eius ullam unde placeat repellat
          consequatur accusamus ipsa voluptatem cupiditate laudantium quisquam
          distinctio nostrum dolores illo tempora sapiente excepturi quasi ab,
          dolorum porro! Inventore? Quos minus ea, officiis facere eius possimus
          voluptates facilis autem maiores consequatur earum omnis ut molestias
          repellat quas tempore dolores odio temporibus nemo voluptas fuga.
          Recusandae dolores cumque temporibus quasi! Quae nobis adipisci non
          rerum ex dignissimos voluptate exercitationem eveniet, distinctio
          illum porro alias, perspiciatis inventore molestias, obcaecati fugiat
          quod debitis voluptas unde quibusdam laborum eius? Quidem labore qui
          iste. Excepturi id magni illo amet et voluptates nulla voluptatem
          deserunt esse placeat nam, facilis aliquid, officiis neque, quis nobis
          ratione cumque corrupti possimus quidem molestias commodi libero
        </p>
      </div>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
}
export default ModalDemo;
