import { PhoneLeadForm } from "@/features/phone-lead";
import { Container } from "@/shared/ui/container";
import styles from "./Hero.module.css";

export function Hero() {
    return <section className={styles.hero}>
        <Container>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <div className={styles.badge}>⚡ Быстрый старт</div>

                    <h1 className={styles.title}>
                        Напишите телефон — и работодатели
                        <br />
                        смогут предложить вам работу
                    </h1>

                    <p className={styles.subtitle}>
                        Получайте предложения, откликайтесь в один клик и сохраняйте избранное.
                    </p>

                    <div className={styles.formWrap}>
                        <PhoneLeadForm />
                    </div>

                    <p className={styles.note}>
                        Продолжая, вы принимаете{" "}
                        <a className={styles.a} href="#">
                            соглашение
                        </a>{" "}
                        и{" "}
                        <a className={styles.a} href="#">
                            политику конфиденциальности
                        </a>
                    </p>

                    <div className={styles.linksRow}>
                        <a className={styles.smallLink} href="#">
                            Ищите работу рядом с домом
                        </a>
                        <span className={styles.dot} />
                        <a className={styles.smallLink} href="#">
                            Подборки вакансий
                        </a>
                    </div>
                </div>

                <div className={styles.right} aria-hidden="true">
                    <div className={styles.imageCard}>
                        <img
                            className={styles.image}
                            src="/images/hero-person.jpg"
                            alt=""
                            loading="lazy"
                        />
                        <div className={styles.imageOverlay} />
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>12 540</div>
                                <div className={styles.statLabel}>вакансий сегодня</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>Цхинвал</div>
                                <div className={styles.statLabel}>и рядом</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.glow1} />
                    <div className={styles.glow2} />
                </div>
            </div>
        </Container>
    </section>
}
