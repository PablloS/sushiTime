import { DropdownProps } from "./Dropdown.props";
import styles from "./Dropdown.module.css";
import { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";


const Dropdown = ({ title, items, defaultValue, onValueChange }: DropdownProps): JSX.Element => {

    const [isOpen, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>(defaultValue);

    const dropdownRef = useClickOutside(() => {
        setOpen(false);
    });

    const handleValueChange = (id: number, name: string) => {
        setValue(name);
        setOpen(false);
        onValueChange(id, name);
    }

    return (
        <div className={styles.wrapper}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.layout} >
                <p className={styles.value}>{value}</p>
                <div className={styles.button} onClick={() => setOpen(!isOpen)} ref={dropdownRef}>
                    <p className={`${isOpen ? styles.button__active : ''}`}>v</p>
                </div>
            </div>
            <div className={`${styles.items__wrapper} ${isOpen ? styles.active : ""}`} >
                <ul className={styles.items}>
                    {items.map((item) => (
                        <li className={styles.item} key={item.id} onClick={() => handleValueChange(item.id, item.name)}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown; 