import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useState } from "react";
import styles from "./PhoneLeadForm.module.css";

export function PhoneLeadForm() {
    const [phone, setPhone] = useState("");

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        // пока заглушка: позже подключим валидацию + мок-API
        console.log("phone:", phone);
    }

    return <form className={styles.form} onSubmit={onSubmit}>
        <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Номер телефона"
            aria-label="Номер телефона"
        />
        <Button type="submit">Продолжить</Button>
    </form>
}
