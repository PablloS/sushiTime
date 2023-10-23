import { TablePageProps } from "./TablePage.props";
import styles from "./TablePage.module.css";
import { Navbar } from "../../modules/Navbar";
import { Table } from "../../modules/Table";


const TablePage = ({ }: TablePageProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.table}>
                <Table />
            </div>
        </div>
    )
}

export default TablePage; 