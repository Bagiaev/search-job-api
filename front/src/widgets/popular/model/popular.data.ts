export type PopularItem = {
  title: string;
  subtitle?: string;
  meta: string;
};

export const popularItems: PopularItem[] = [
  { title: "Вакансии дня", subtitle: "до 100000 ₽", meta: "14 вакансий" },
  { title: "Компании дня", meta: "3675 вакансий" },
  { title: "Работа из дома", meta: "42009 вакансий" },
  { title: "Подработка", subtitle: "до 340000 ₽", meta: "17260 вакансий" },
  { title: "Курьер", subtitle: "до 330000 ₽", meta: "6103 вакансии" },
  { title: "Водитель", subtitle: "20000 – 360000 ₽", meta: "6004 вакансии" },
  { title: "Продавец", subtitle: "20000 – 250000 ₽", meta: "13752 вакансии" },
  { title: "Кассир", subtitle: "20000 – 155000 ₽", meta: "9962 вакансии" },
];
