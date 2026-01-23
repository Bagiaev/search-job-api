import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";
import styles from "./AuthActions.module.css";

export function AuthActions() {
    return <div className={styles.wrap}>
        <Link to="/resume/create" className={styles.linkReset}>
            <Button variant="ghost">Создать резюме</Button>
        </Link>

        <Link to="/auth" className={styles.linkReset}>
            <Button variant="ghost">Войти</Button>
        </Link>
    </div>
}
