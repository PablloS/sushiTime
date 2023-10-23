import { TableDataViewProps } from "./TableDataView.props";
import styles from "./TableDataView.module.css"; 
import TableItem from "../../../../components/TableItem/TableItem";
import { convertMenuItemToCorrectForm } from "../../helpers/menu.helpers";


const TableDataView = ({data}: TableDataViewProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            {data.map((item) => (
                <TableItem data={convertMenuItemToCorrectForm(item)} key={item.id} />
            ))}
        </div>
    )
}

export default TableDataView; 