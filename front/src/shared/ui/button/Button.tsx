import { cn } from "@/shared/lib/cn/cn";
import styles from "./Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
    return (
        <button
            className={cn(styles.btn, styles[variant], className)}
            {...props}
        />
    );
}
