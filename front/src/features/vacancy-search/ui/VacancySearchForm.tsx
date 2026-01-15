import { useEffect, useState } from "react";
import styles from "./VacancySearchForm.module.css";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";

export function VacancySearchForm() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [q, setQ] = useState("");

  useEffect(() => {
    const fromUrl = params.get("q") ?? "";
    setQ(fromUrl);
  }, [params]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // сохраняем текущие фильтры и меняем только q
    const next = new URLSearchParams(params);
    const query = q.trim();

    if (query) next.set("q", query);
    else next.delete("q");

    navigate(`/search?${next.toString()}`);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Профессия, должность или компания"
        aria-label="Поиск вакансий"
      />
      <Button type="submit">Найти</Button>
    </form>
  );
}
