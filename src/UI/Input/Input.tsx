import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import { useState } from "react";


const Input = ({ onValueChange, placeholder }: InputProps): JSX.Element => {

    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue: string = e.currentTarget.value;
        setValue(newValue);
        onValueChange(newValue);
    }

    return (
        <div className={styles.wrapper}>
            <input type="text"
                name={placeholder}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                className={styles.input}
            />
        </div>
    )
}

export default Input; 