import styles from "./Card.module.css";
import { cn } from "@/shared/lib/cn/cn";

export function Card({
  className,
  children,
  href,
}: React.PropsWithChildren<{ className?: string; href?: string }>) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp className={cn(styles.card, className)} href={href}>
      {children}
    </Comp>
  );
}
