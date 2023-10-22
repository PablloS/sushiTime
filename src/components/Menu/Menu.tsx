import { MenuProps } from "./Menu.props";
import styles from "./Menu.module.css"; 
import { useState } from "react";


const Menu = ({items, onValueChange}: MenuProps): JSX.Element => {

    const [selectedItem, setSelectedItem] = useState<number>(-1);

    const handleClick = (value: string, index: number) => {
        setSelectedItem(index); 
        onValueChange(value); 
    }

    return (
        <nav className={styles.items__wrapper}>
            {items.map((item, index) => (
                <p className={`${styles.item} ${index === selectedItem ? styles.active : ''}`}
                 key={index} onClick={() => handleClick(item, index)}>
                    - {item}
                </p>
            ))}
        </nav>
    )
}

export default Menu; 