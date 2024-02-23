import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Diogo Blanco",
};

export default function HomePage() {
  return (
    <>
      <div className={styles.navbar}>
        <Navbar></Navbar>
      </div>
      <section className={styles.main_content}>
        <h1 className={styles.main_title}>Contratos</h1>
      </section>
    </>
  );
}
