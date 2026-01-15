import styles from "./JobSearch.module.css";
import { Container } from "@/shared/ui/container";
import { VacancySearchForm } from "@/features/vacancy-search";

export function JobSearch() {
  return (
    <section>
      <Container>
        <h2 className={styles.h2}>Поиск работы в Москве</h2>
        <VacancySearchForm />
        <a className={styles.link} href="#">
          Я ищу сотрудника
        </a>
      </Container>
    </section>
  );
}
