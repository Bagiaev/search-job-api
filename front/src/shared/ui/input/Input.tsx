import { cn } from "@/shared/lib/cn/cn";
import styles from "./Input.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
    return <input className={cn(styles.input, className)} {...props} />;
}
