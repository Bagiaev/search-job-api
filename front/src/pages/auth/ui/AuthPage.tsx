import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { Input } from "@/shared/ui/input";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AuthPage.module.css";

type Mode = "login" | "register";

export function AuthPage() {
    const [mode, setMode] = useState<Mode>("login");

    const title = useMemo(() => {
        return mode === "login" ? "Вход" : "Регистрация";
    }, [mode]);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        alert(mode === "login" ? "Вход (пока заглушка)" : "Регистрация (пока заглушка)");
    }

    return <div className={styles.page}>
        <Container>
            <div className={styles.shell}>
                <div className={styles.topRow}>
                    <Link to="/" className={styles.back}>
                        ← На главную
                    </Link>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.tabs}>
                            <button
                                className={`${styles.tab} ${mode === "login" ? styles.active : ""}`}
                                onClick={() => setMode("login")}
                                type="button"
                            >
                                Войти
                            </button>
                            <button
                                className={`${styles.tab} ${mode === "register" ? styles.active : ""}`}
                                onClick={() => setMode("register")}
                                type="button"
                            >
                                Регистрация
                            </button>
                        </div>

                        <h1 className={styles.h1}>{title}</h1>
                        <p className={styles.sub}>
                            Введите данные — это займёт меньше минуты.
                        </p>

                        <form className={styles.form} onSubmit={onSubmit}>
                            {mode === "register" && (
                                <Input placeholder="Имя" aria-label="Имя" autoComplete="name" />
                            )}

                            <Input
                                placeholder="Email"
                                aria-label="Email"
                                autoComplete="email"
                                type="email"
                                required
                            />

                            <Input
                                placeholder="Пароль"
                                aria-label="Пароль"
                                autoComplete={mode === "login" ? "current-password" : "new-password"}
                                type="password"
                                required
                            />

                            {mode === "register" && (
                                <Input
                                    placeholder="Повторите пароль"
                                    aria-label="Повторите пароль"
                                    type="password"
                                    required
                                />
                            )}

                            <Button type="submit">
                                {mode === "login" ? "Войти" : "Создать аккаунт"}
                            </Button>

                            {mode === "login" && (
                                <button className={styles.textBtn} type="button">
                                    Забыли пароль?
                                </button>
                            )}

                            <p className={styles.hint}>
                                Нажимая кнопку, вы соглашаетесь с правилами сервиса.
                            </p>
                        </form>
                    </div>

                    <aside className={styles.aside} aria-hidden="true">
                        <div className={styles.asideCard}>
                            <img
                                className={styles.asideImg}
                                src="/images/auth.jpg"
                                alt=""
                                loading="lazy"
                            />
                            <div className={styles.asideOverlay} />
                            <div className={styles.asideText}>
                                <div className={styles.asideTitle}>Быстрый доступ</div>
                                <ul className={styles.list}>
                                    <li>Сохранение откликов</li>
                                    <li>Избранные вакансии</li>
                                    <li>Уведомления</li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </Container>
    </div>
}
