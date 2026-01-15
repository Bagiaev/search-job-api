export type Vacancy = {
  id: string;
  title: string;
  company: string;
  city: string;
  salaryFrom?: number;
  salaryTo?: number;
  currency?: "₽" | "₾" | "₽";
  experience: "no" | "1-3" | "3-6" | "6+";
  schedule: "full" | "part" | "remote";
  tags: string[];
  postedAt: string; // ISO date
};
