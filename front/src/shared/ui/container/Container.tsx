import styles from "./Container.module.css";
import { cn } from "@/shared/lib/cn/cn";

export function Container({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn(styles.container, className)}>{children}</div>;
}
