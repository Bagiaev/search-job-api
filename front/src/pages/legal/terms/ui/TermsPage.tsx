import { Container } from "@/shared/ui/container";
import { Link } from "react-router-dom";
import styles from "./TermsPage.module.css";

export function TermsPage() {
    return <div className={styles.page}>
        <Container className={styles.container}>
            <Link to="/" className={styles.back}>
                ← На главную
            </Link>

            <h1 className={styles.h1}>Пользовательское соглашение</h1>

            <div className={styles.text}>
                <p>
                    Настоящее Пользовательское соглашение регулирует порядок использования
                    сервиса поиска работы и размещения резюме.
                </p>

                <h2>1. Общие положения</h2>
                <p>
                    Используя сервис, вы подтверждаете, что ознакомились с условиями
                    настоящего соглашения и принимаете их в полном объёме.
                </p>

                <h2>2. Ответственность</h2>
                <p>
                    Сервис не несёт ответственности за содержание вакансий и резюме,
                    размещённых пользователями.
                </p>

                <h2>3. Заключительные положения</h2>
                <p>
                    Администрация сервиса вправе изменять условия соглашения без
                    предварительного уведомления.
                </p>
            </div>
        </Container>
    </div>
}
