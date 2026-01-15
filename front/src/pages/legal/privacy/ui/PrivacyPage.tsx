import styles from "./PrivacyPage.module.css";
import { Container } from "@/shared/ui/container";
import { Link } from "react-router-dom";

export function PrivacyPage() {
  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <Link to="/" className={styles.back}>
          ← На главную
        </Link>

        <h1 className={styles.h1}>Политика конфиденциальности</h1>

        <div className={styles.text}>
          <p>
            Мы уважаем вашу конфиденциальность и обязуемся защищать персональные
            данные пользователей.
          </p>

          <h2>1. Какие данные мы собираем</h2>
          <p>
            Мы можем собирать имя, контактные данные, информацию о резюме и
            действиях на сайте.
          </p>

          <h2>2. Как используются данные</h2>
          <p>
            Данные используются исключительно для работы сервиса, улучшения
            качества услуг и связи с пользователями.
          </p>

          <h2>3. Передача третьим лицам</h2>
          <p>
            Мы не передаём персональные данные третьим лицам без согласия
            пользователя, за исключением случаев, предусмотренных законом.
          </p>
        </div>
      </Container>
    </div>
  );
}
