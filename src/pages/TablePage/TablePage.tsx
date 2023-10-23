import { TablePageProps } from "./TablePage.props";
import styles from "./TablePage.module.css";
import { Table } from "../../modules/Table";


const TablePage = ({ }: TablePageProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.table}>
                <Table />
            </div>
        </div>
    )
}

export default TablePage; 