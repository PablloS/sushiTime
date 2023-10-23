import { TableItemProps } from "./TableItem.props";
import styles from "./TableItem.module.css";
import StatsButton from "./stats.svg?react";
import EditButton from "./edit.svg?react";
import DeleteButton from "./delete.svg?react";


const TableItem = ({ data }: TableItemProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            {data.map((item, index) => (
                <p className={styles.data__item} key={index}>{item}</p>
            ))}
            <div className={styles.buttons__wrapper}>
                <StatsButton />
                <EditButton />
                <DeleteButton />
            </div>
        </div>
    )
}

export default TableItem;