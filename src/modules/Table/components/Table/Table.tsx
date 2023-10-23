import { TableProps } from "./Table.props";
import styles from "./Table.module.css";
import TableFilter from "../TableFilter/TableFilter";
import { useEffect, useState } from "react";
import { getMenu } from "../../api/getMenu";
import { IMenuItem } from "../../interfaces/menu.interface";
import TableDataView from "../TableDataView/TableDataView";
import { IFilters } from "../../interfaces/filters.interface";
import Pagination from "../../../../UI/Pagination/Pagination";


export const Table = ({ }: TableProps): JSX.Element => {

    const [items, setItems] = useState<IMenuItem[]>([]);
    const [maxPage, setMaxPage] = useState<number>(1);
    const [currentFilters, setCurrentFilters] = useState<IFilters>({ name: '', filial: '', tt: '', active: null });

    useEffect(() => {
        getData(1)
    }, []);

    const handlePageChange = (page: number) => {
        getData(page, currentFilters);
    }

    const handleFiltersChange = (filters: IFilters) => {
        setCurrentFilters(filters);
        getData(1, filters);
    }

    const getData = async (page: number, filters?: IFilters) => {
        if (filters) {
            const filtredData = await getMenu({
                filial_id: 1,
                limit: 5,
                name: filters.name,
                filial: filters.filial,
                tt: filters.tt,
                active: filters.active !== null ? filters.active : '',
                page: page
            });
            setItems(filtredData.data || []);
            setMaxPage(filtredData.max_pages);
        } else {
            const data = await getMenu({ filial_id: 1, limit: 5, page: page });
            setItems(data.data || []);
            setMaxPage(data.max_pages);
        }
    }

    return (
        <div className={styles.wrapper}>
            <TableFilter onFiltersChange={handleFiltersChange} />
            <div className={styles.data__view}>
                <TableDataView data={items} />
            </div>
            <Pagination numberOfPages={maxPage} onPageChange={handlePageChange} />
        </div>
    )
}