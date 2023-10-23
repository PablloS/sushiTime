import { TableProps } from "./Table.props";
import styles from "./Table.module.css";
import TableFilter from "../TableFilter/TableFilter";
import { useEffect, useState } from "react";
import { getMenu } from "../../api/getMenu";
import { IMenuItem } from "../../interfaces/menu.interface";
import TableDataView from "../TableDataView/TableDataView";
import { IFilters } from "../../interfaces/filters.interface";
import Pagination from "../../../../UI/Pagination/Pagination";
import { useParams } from "react-router-dom";
import { LIMIT } from "../../constants/menu.constants";


export const Table = ({ }: TableProps): JSX.Element => {

    const [items, setItems] = useState<IMenuItem[]>([]);
    const [maxPage, setMaxPage] = useState<number>(1);
    const [currentFilters, setCurrentFilters] = useState<IFilters>({ name: '', filial: '', tt: '', active: null });
    const { cityid } = useParams<{ cityid?: string }>();

    useEffect(() => {
        getData(1);
    }, [cityid]);

    const handlePageChange = (page: number) => {
        getData(page, currentFilters);
    }

    const handleFiltersChange = (filters: IFilters) => {
        setCurrentFilters(filters);
        getData(1, filters);
    }

    const getData = async (page: number, filters?: IFilters) => {
        let maxPage = 1;
        if (filters) {
            const filtredData = await getMenu({
                filial_id: Number(cityid),
                limit: LIMIT,
                name: filters.name,
                filial: filters.filial,
                tt: filters.tt,
                active: filters.active !== null ? filters.active : '',
                page: page
            });
            setItems(filtredData.data || []);
            if (filtredData.max_pages) {
                maxPage = filtredData.max_pages;
            }
        } else {
            const data = await getMenu({ filial_id: Number(cityid), limit: LIMIT, page: page });
            setItems(data.data || []);
            if (data.max_pages) {
                maxPage = data.max_pages;
            }
        }
        setMaxPage(maxPage); 
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