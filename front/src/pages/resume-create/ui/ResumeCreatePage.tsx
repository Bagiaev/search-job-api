import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Input } from "@/shared/ui/input";
import { Link } from "react-router-dom";
import styles from "./ResumeCreatePage.module.css";

export function ResumeCreatePage() {
    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        alert("Резюме сохранено (пока заглушка)");
    }

    return <div className={styles.page}>
        <Container>
            <div className={styles.shell}>
                <div className={styles.top}>
                    <Link to="/" className={styles.back}>
                        ← На главную
                    </Link>
                </div>

                <div className={styles.grid}>
                    <div className={styles.main}>
                        <h1 className={styles.h1}>Создать резюме</h1>
                        <p className={styles.p}>
                            Заполните базовые поля
                        </p>

                        <form className={styles.form} onSubmit={onSubmit}>
                            <div className={styles.row2}>
                                <Input placeholder="ФИО" aria-label="ФИО" />
                                <Input placeholder="Город" aria-label="Город" defaultValue="Цхинвал" />
                            </div>

                            <Input placeholder="Желаемая должность" aria-label="Желаемая должность" />
                            <div className={styles.row2}>
                                <Input placeholder="Email" aria-label="Email" type="email" />
                                <Input placeholder="Телефон" aria-label="Телефон" />
                            </div>

                            <div className={styles.actions}>
                                <Button type="submit">Сохранить</Button>

                                <Link to="/" className={styles.linkReset}>
                                    <Button type="button" variant="ghost">
                                        Отмена
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>

                    <aside className={styles.aside} aria-hidden="true">
                        <div className={styles.asideCard}>
                            <img
                                className={styles.asideImg}
                                src="/images/resume.jpg"
                                alt=""
                                loading="lazy"
                            />
                            <div className={styles.asideOverlay} />
                            <div className={styles.asideText}>
                                <div className={styles.asideTitle}>Подсказка</div>
                                <div className={styles.asideSub}>
                                    Заполни “Должность” и “Контакты” — этого достаточно, чтобы начать отклики.
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </Container>
    </div>
}
