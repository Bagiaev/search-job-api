import styles from "./Footer.module.css";
import { Container } from "@/shared/ui/container";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.title}>Сервис</div>
            <a href="#" className={styles.link}>Вакансии</a>
            <a href="#" className={styles.link}>Создать резюме</a>
            <a href="#" className={styles.link}>О проекте</a>
          </div>

          <div className={styles.col}>
            <div className={styles.title}>Соискателям</div>
            <a href="#" className={styles.link}>Поиск работы</a>
            <a href="#" className={styles.link}>Рекомендации</a>
            <a href="#" className={styles.link}>Помощь</a>
          </div>

          <div className={styles.col}>
            <div className={styles.title}>Связь</div>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className={styles.contact}
            >
              <span className={styles.icon}>✈️</span>
              Telegram
            </a>

            <a href="mailto:support@example.com" className={styles.contact}>
              <span className={styles.icon}>✉️</span>
              support@example.com
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Работа в Цхинвале</span>

          <div className={styles.bottomLinks}>
            <Link to="/legal/terms" className={styles.bottomLink}>
              Пользовательское соглашение
            </Link>
            <span className={styles.sep}>•</span>
            <Link to="/legal/privacy" className={styles.bottomLink}>
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
