import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>

     <div className={styles.container}>
      <section className={styles.sectionOne}>
        <h1>Professional Auto Detailing</h1>
        <h3 className={styles.sectionOneText}>Servicing the Inland Empire and San Bernardino County</h3>
      </section>

        <section className={styles.sectionTwo}>
          <h1>Second Page</h1>
        </section>

        <section className={styles.sectionThree}>
          <h1>Third Page</h1>
        </section>
    
        <section className={styles.sectionFour}>
          <h1>Fourth Page</h1>
        </section>
     </div>

    </main>
  );
}