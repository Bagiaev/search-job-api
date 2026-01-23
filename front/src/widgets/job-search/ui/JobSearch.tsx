import { VacancySearchForm } from "@/features/vacancy-search";
import { Container } from "@/shared/ui/container";
import styles from "./JobSearch.module.css";

export function JobSearch() {
    return <section>
        <Container>
            <h2 className={styles.h2}>Поиск работы в Москве</h2>
            <VacancySearchForm />
            <a className={styles.link} href="#">
                Я ищу сотрудника
            </a>
        </Container>
    </section>
}
