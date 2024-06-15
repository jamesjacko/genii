import License from "@/componenta/License";
import styles from "./page.module.css";
import Logo from "@/componenta/Logo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo size="large" className={styles.logo} />
      <p>Genii is an application which allows for the creation of visualisations using a path based, gene defined model. This website is intended to showcase and signpost the various constituent parts of the application as well as the application itself. Genii and its constituent parts are free and open source under the <License /> license.</p>
      
    </main>
  );
}
