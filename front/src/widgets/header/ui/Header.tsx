import { AuthActions } from "@/features/auth";
import { BrandLogo } from "@/shared/ui/brand-logo";
import { Container } from "@/shared/ui/container";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
    return <header className={styles.header}>
        <Container>
            <div className={styles.row}>
                <div className={styles.left}>
                    <Link to="/" className={styles.brand} aria-label="На главную">
                        <span className={styles.logoBox}>
                            <BrandLogo />
                        </span>
                        <span className={styles.help}>Поиск работы</span>
                    </Link>

                    <nav className={styles.nav} aria-label="Навигация">
                        <span className={styles.city}>Цхинвал</span>
                    </nav>
                </div>

                <div className={styles.right}>
                    <a className={styles.link} href="#">
                        Готовое резюме
                    </a>

                    <a className={styles.link} href="#">
                        Все сервисы ▾
                    </a>

                    <AuthActions />
                </div>
            </div>
        </Container>
    </header>
}
