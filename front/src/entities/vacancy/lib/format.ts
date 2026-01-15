import type { Vacancy } from "../model/types";

export function formatSalary(v: Vacancy) {
  const cur = v.currency ?? "₽";
  const from = v.salaryFrom;
  const to = v.salaryTo;

  if (!from && !to) return "З/п не указана";
  if (from && to) return `${num(from)} – ${num(to)} ${cur}`;
  if (from) return `от ${num(from)} ${cur}`;
  return `до ${num(to!)} ${cur}`;
}

function num(n: number) {
  return n.toLocaleString("ru-RU");
}
