// Component
import Header from "@/layouts/DefaultLayout/components/Header";
import Navigation from "@/layouts/DefaultLayout/components/Navigation";
// Scss
import styles from "./ModalDemo.module.scss";
import Button from "@/components/Button";
import { useState } from "react";
import Modal from "@/components/Modal";
function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
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
          ratione cumque corrupti possimus quidem molestias commodi libero
          eveniet accusantium. Eos. Assumenda, quis corrupti! Totam culpa
          deleniti doloribus itaque error eligendi exercitationem. Nulla
          explicabo, dolore cum omnis maxime nemo blanditiis rem deleniti
          voluptatum sit asperiores exercitationem quisquam alias atque eveniet
          totam. Magni ipsum adipisci reprehenderit, quae exercitationem quam,
          autem aut sit necessitatibus, earum accusamus eligendi eos non
          repellendus iusto delectus quibusdam rerum deserunt. Non ducimus culpa
          labore obcaecati atque repellendus natus! Voluptatum harum nisi
          quaerat iste sunt libero temporibus ad molestias suscipit reiciendis.
          Delectus vero nemo accusamus sunt reiciendis voluptate nulla in
          dignissimos esse ea beatae minima blanditiis, aperiam fugit possimus.
          Voluptate quos aspernatur nesciunt aperiam quaerat vitae perspiciatis
          quae! Veritatis fugit earum quos voluptate officia nostrum distinctio
          sint. Commodi vel deserunt quaerat libero obcaecati quam beatae
          similique deleniti reprehenderit fugiat? Similique, eaque harum? Non,
          beatae possimus molestias culpa ipsa eum rerum vel. Officiis quis,
          perspiciatis voluptatibus iste, maxime maiores modi quae doloremque
          sequi quia veritatis nisi, omnis sint. Quisquam, hic? Aliquam tempore
          iure ea placeat similique possimus, officia veniam aspernatur.
          Inventore facere repellat unde ab, eveniet nisi, eos cupiditate
          quibusdam dolores ut dolorem accusamus deserunt, omnis reiciendis
          pariatur quisquam magni. Eius ducimus, impedit quae minima debitis
          beatae fugit sit dolore maxime doloremque laborum. Modi accusamus
          cumque, voluptate obcaecati tempore aperiam incidunt voluptates porro
          temporibus adipisci ab totam, soluta laborum nemo. Inventore ipsum
          veniam expedita, beatae sed voluptatem cum ea officiis, incidunt dolor
          libero natus, molestiae magni amet repellendus iste mollitia sunt
          consectetur minus repudiandae impedit earum cumque. Praesentium,
          numquam maxime? Esse eveniet eligendi laborum voluptates harum
          doloremque eaque architecto repellendus illum ratione, veniam
          laudantium atque sed possimus nesciunt maxime ut exercitationem,
          labore enim magni quod iste quasi nostrum maiores? Qui? Assumenda,
          est. Facilis doloremque eos eveniet voluptatum ea! Voluptates
          assumenda commodi ex ea quaerat soluta labore rem. Veniam vel numquam
          excepturi? Placeat at iusto mollitia dolores nobis. Molestiae, animi
          quia. Enim cupiditate, atque, obcaecati eius dolores laudantium
          maiores culpa architecto dolorem veritatis cum. Quam obcaecati iste
          totam sapiente similique officiis molestiae omnis odit dolorem
          eligendi alias, quaerat, nulla quasi magnam? Eos magnam rerum
          aspernatur adipisci quas saepe maxime delectus, error, sequi
          recusandae laborum? Quasi aperiam aut asperiores beatae corporis,
          nulla voluptates quo quidem, et quod quae molestias hic velit illum.
          Voluptates perspiciatis unde optio totam quasi, beatae sed quam
          nostrum laborum quo sit dolores distinctio ex velit earum enim
          quibusdam. Impedit commodi omnis corrupti harum repudiandae quaerat
          expedita iure sequi! Deleniti sapiente sit voluptatum facere veritatis
          eligendi beatae sed, soluta, suscipit voluptates voluptatibus. Labore
          veniam corrupti maxime minima numquam officiis animi! Odio aperiam
          eaque quaerat animi dolores minus accusantium necessitatibus.
        </p>
      </div>
    </>
  );
}
export default ModalDemo;
