import styles from "./HomePage.module.css";
import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { JobSearch } from "@/widgets/job-search";
import { Popular } from "@/widgets/popular";
import { Footer } from "@/widgets/footer";

export function HomePage() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <Hero />
        <section className={styles.content}>
          <JobSearch />
          <Popular />
        </section>
      </main>

      <Footer />
    </div>
  );
}
