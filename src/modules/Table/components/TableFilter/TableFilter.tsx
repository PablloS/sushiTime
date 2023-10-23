import { TableFilterProps } from "./TableFilter.props";
import styles from "./TableFilter.module.css";
import Input from "../../../../UI/Input/Input";
import Dropdown from "../../../../UI/Dropdown/Dropdown";
import { useState } from "react";
import { IFilters } from "../../interfaces/filters.interface";


const TableFilter = ({onFiltersChange}: TableFilterProps): JSX.Element => {

    const [filters, setFilters] = useState<IFilters>({name: '', filial: '', tt: '', active: null});

    const handleFilterChange = (value: string, type: string) => { 
        let newFilters: IFilters = filters;
        switch(type) {
            case "name": 
                newFilters.name = value;
                break; 
            case "filial": 
                newFilters.filial = value;
                break; 
            case "tt": 
                newFilters.tt = value; 
        }
        setFilters(newFilters);  
        onFiltersChange(newFilters); 
    }

    const handleActiveChange = (_: number, value: string) => { 
        let newFilters: IFilters = filters;
        switch(value) {
            case "Все": 
                newFilters.active = null;
                break; 
            case "Активно": 
                newFilters.active = "active"; 
                break; 
            case "Не активно": 
                newFilters.active = "no_active"; 
        }
        setFilters(newFilters);  
        onFiltersChange(newFilters); 
    }

    return (
        <div className={styles.wrapper}>
            <Input placeholder="Название меню" onValueChange={(value) => handleFilterChange(value, "name")} />
            <Input placeholder="Филиал" onValueChange={(value) => handleFilterChange(value, "filial")} />
            <Input placeholder="Торговая точка" onValueChange={(value) => handleFilterChange(value, "tt")} />
            <div className={styles.dropdown__container}>
                <Dropdown defaultValue="Все"
                    items={[{ id: 1, name: "Активно" }, { id: 0, name: "Не активно" }, { id: 2, name: "Все" }]}
                    onValueChange={handleActiveChange}
                    className={styles.dropdown}
                />
            </div>

            <p className={styles.export}>экспорт</p>
        </div>
    )
}

export default TableFilter; 