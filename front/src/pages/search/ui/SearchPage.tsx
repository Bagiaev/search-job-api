import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./SearchPage.module.css";

import { formatSalary, vacanciesMock } from "@/entities/vacancy";
import { VacancySearchForm } from "@/features/vacancy-search";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Container } from "@/shared/ui/container";
import { Input } from "@/shared/ui/input";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

type Schedule = "remote" | "full" | "part";
type Exp = "no" | "1-3" | "3-6" | "6+";

export function SearchPage() {
    const [params, setParams] = useSearchParams();

    const q = (params.get("q") ?? "").trim().toLowerCase();

    const schedule = useMemo(() => new Set(params.getAll("schedule") as Schedule[]), [params]);
    const exp = useMemo(() => new Set(params.getAll("exp") as Exp[]), [params]);

    const salaryMin = useMemo(() => {
        const raw = params.get("salaryMin");
        const n = raw ? Number(raw) : 0;
        return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
    }, [params]);

    const filtered = useMemo(() => {
        let list = vacanciesMock;

        // search q
        if (q) {
            list = list.filter((v) => {
                const hay = `${v.title} ${v.company} ${v.tags.join(" ")}`.toLowerCase();
                return hay.includes(q);
            });
        }

        // schedule filter
        if (schedule.size > 0) {
            list = list.filter((v) => schedule.has(v.schedule));
        }

        // exp filter
        if (exp.size > 0) {
            list = list.filter((v) => exp.has(v.experience));
        }

        // salaryMin filter (если зп не указана — исключаем)
        if (salaryMin > 0) {
            list = list.filter((v) => {
                const from = v.salaryFrom ?? 0;
                const to = v.salaryTo ?? 0;
                if (!from && !to) return false;
                return Math.max(from, to) >= salaryMin;
            });
        }

        return list;
    }, [q, schedule, exp, salaryMin]);

    function toggleMultiParam(key: string, value: string) {
        const next = new URLSearchParams(params);
        const all = next.getAll(key);

        if (all.includes(value)) {
            // remove only this value
            const rest = all.filter((x) => x !== value);
            next.delete(key);
            rest.forEach((x) => next.append(key, x));
        } else {
            next.append(key, value);
        }

        setParams(next);
    }

    function setSalaryMin(value: string) {
        const next = new URLSearchParams(params);
        const trimmed = value.trim();

        if (!trimmed) {
            next.delete("salaryMin");
        } else {
            const n = Number(trimmed);
            if (!Number.isFinite(n) || n <= 0) next.delete("salaryMin");
            else next.set("salaryMin", String(Math.floor(n)));
        }

        setParams(next);
    }

    function resetFilters() {
        const next = new URLSearchParams();
        const qRaw = params.get("q");
        if (qRaw && qRaw.trim()) next.set("q", qRaw);
        setParams(next);
    }

    return <div className={styles.page}>
        <Header />

        <main className={styles.main}>
            <Container>
                <div className={styles.top}>
                    <h1 className={styles.h1}>Поиск вакансий</h1>
                    <p className={styles.sub}>
                        {q ? (
                            <>
                                Результаты по запросу <span className={styles.q}>“{q}”</span>
                            </>
                        ) : (
                            <>Популярные вакансии в Цхинвале</>
                        )}
                    </p>

                    <div className={styles.searchBar}>
                        <VacancySearchForm />
                    </div>
                </div>

                <div className={styles.layout}>
                    {/* Filters */}
                    <aside className={styles.filters}>
                        <div className={styles.filtersCard}>
                            <div className={styles.filtersTitle}>Фильтры</div>

                            <div className={styles.group}>
                                <div className={styles.groupTitle}>Формат</div>

                                <label className={styles.check}>
                                    <input
                                        type="checkbox"
                                        checked={schedule.has("remote")}
                                        onChange={() => toggleMultiParam("schedule", "remote")}
                                    />
                                    Удалённо
                                </label>

                                <label className={styles.check}>
                                    <input
                                        type="checkbox"
                                        checked={schedule.has("full")}
                                        onChange={() => toggleMultiParam("schedule", "full")}
                                    />
                                    Полный день
                                </label>

                                <label className={styles.check}>
                                    <input
                                        type="checkbox"
                                        checked={schedule.has("part")}
                                        onChange={() => toggleMultiParam("schedule", "part")}
                                    />
                                    Подработка
                                </label>
                            </div>

                            <div className={styles.group}>
                                <div className={styles.groupTitle}>Опыт</div>

                                <label className={styles.check}>
                                    <input
                                        type="checkbox"
                                        checked={exp.has("no")}
                                        onChange={() => toggleMultiParam("exp", "no")}
                                    />
                                    Без опыта
                                </label>

                                <label className={styles.check}>
                                    <input
                                        type="checkbox"
                                        checked={exp.has("1-3")}
                                        onChange={() => toggleMultiParam("exp", "1-3")}
                                    />
                                    1–3 года
                                </label>

                                <label className={styles.check}>
                                    <input
                                        type="checkbox"
                                        checked={exp.has("3-6")}
                                        onChange={() => toggleMultiParam("exp", "3-6")}
                                    />
                                    3–6 лет
                                </label>

                                <label className={styles.check}>
                                    <input
                                        type="checkbox"
                                        checked={exp.has("6+")}
                                        onChange={() => toggleMultiParam("exp", "6+")}
                                    />
                                    6+ лет
                                </label>
                            </div>

                            <div className={styles.group}>
                                <div className={styles.groupTitle}>Зарплата</div>
                                <div className={styles.salaryRow}>
                                    <Input
                                        type="number"
                                        inputMode="numeric"
                                        placeholder="От (₽)"
                                        aria-label="Зарплата от"
                                        value={salaryMin ? String(salaryMin) : ""}
                                        onChange={(e) => setSalaryMin(e.target.value)}
                                    />
                                </div>
                                <div className={styles.salaryHint}>
                                    Покажем вакансии, где указанная зарплата ≥ выбранной.
                                </div>
                            </div>

                            <Button
                                variant="ghost"
                                className={styles.resetBtn}
                                type="button"
                                onClick={resetFilters}
                            >
                                Сбросить фильтры
                            </Button>
                        </div>
                    </aside>

                    {/* Results */}
                    <section className={styles.results}>
                        <div className={styles.resultsHead}>
                            <div className={styles.count}>
                                Найдено: <b>{filtered.length}</b>
                            </div>
                            <div className={styles.sort}>
                                <span className={styles.sortLabel}>Сортировка:</span>
                                <button className={styles.sortBtn} type="button">
                                    по дате ▾
                                </button>
                            </div>
                        </div>

                        <div className={styles.list}>
                            {filtered.map((v) => (
                                <Card key={v.id} className={styles.item}>
                                    <div className={styles.itemTop}>
                                        <div>
                                            <div className={styles.title}>{v.title}</div>
                                            <div className={styles.company}>
                                                {v.company} · {v.city}
                                            </div>
                                        </div>
                                        <div className={styles.salary}>{formatSalary(v)}</div>
                                    </div>

                                    <div className={styles.tags}>
                                        {v.tags.map((t) => (
                                            <span key={t} className={styles.tag}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={styles.metaRow}>
                                        <span className={styles.meta}>Опыт: {expLabel(v.experience)}</span>
                                        <span className={styles.meta}>График: {schLabel(v.schedule)}</span>
                                        <span className={styles.meta}>Дата: {fmtDate(v.postedAt)}</span>
                                    </div>

                                    <div className={styles.actions}>
                                        <Button>Откликнуться</Button>
                                        <Button variant="ghost">В избранное</Button>
                                    </div>
                                </Card>
                            ))}

                            {filtered.length === 0 && (
                                <div className={styles.empty}>
                                    Ничего не найдено. Попробуйте изменить фильтры или запрос.
                                </div>
                            )}
                        </div>

                        <div className={styles.pagination}>
                            <Button variant="ghost" type="button">
                                ← Назад
                            </Button>
                            <span className={styles.pageNum}>1</span>
                            <Button variant="ghost" type="button">
                                Вперёд →
                            </Button>
                        </div>
                    </section>
                </div>
            </Container>
        </main>

        <Footer />
    </div>
}

function expLabel(v: "no" | "1-3" | "3-6" | "6+") {
    switch (v) {
        case "no":
            return "без опыта";
        case "1-3":
            return "1–3 года";
        case "3-6":
            return "3–6 лет";
        case "6+":
            return "6+ лет";
    }
}

function schLabel(v: "full" | "part" | "remote") {
    switch (v) {
        case "full":
            return "полный день";
        case "part":
            return "подработка";
        case "remote":
            return "удалённо";
    }
}

function fmtDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "short" });
}
