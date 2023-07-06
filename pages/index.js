import Head from "next/head";
import Layout from "../components/layout/layout";
import styles from "../styles.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Emory Juice Ultimate</title>
      </Head>
      <section>
        <p className={styles.displayXL}>EMORY JUICE</p>
        <p>Club Ultimate Frisbee</p>
      </section>
    </Layout>
  );
}
