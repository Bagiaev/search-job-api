import { Card } from "@/shared/ui/card";
import { Container } from "@/shared/ui/container";
import { popularItems } from "../model/popular.data";
import styles from "./Popular.module.css";

export function Popular() {
    return <section className={styles.section}>
        <Container>
            <div className={styles.titleRow}>
                <span className={styles.bolt}>⚡</span>
                <h3 className={styles.h3}>Популярное</h3>
            </div>

            <div className={styles.grid}>
                {popularItems.map((it) => (
                    <Card key={it.title} className={styles.card} href="#">
                        <div className={styles.cardTitle}>{it.title}</div>
                        {it.subtitle && <div className={styles.cardSub}>{it.subtitle}</div>}
                        <div className={styles.cardMeta}>{it.meta}</div>
                    </Card>
                ))}
            </div>
        </Container>
    </section>
}
