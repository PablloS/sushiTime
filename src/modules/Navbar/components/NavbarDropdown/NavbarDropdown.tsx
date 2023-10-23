import { NavbarDropdownProps } from "./NavbarDropdown.props";
import styles from "./NavbarDropdown.module.css";
import Dropdown from "../../../../UI/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { getFilials } from "../../api/getFilials";
import { IFilial } from "../../interfaces/filial.interface";


const NavbarDropdown = ({ onFilialChange}: NavbarDropdownProps): JSX.Element => {

    const [filials, setFilials] = useState<IFilial[]>([]);

    useEffect(() => {
        getData(); 
    }, [])

    const handleFilialChange = (id: number, _: string) => {
        onFilialChange(id); 
    }

    const getData = async () => {
        const filialsData = await getFilials();
        if (filialsData.length) {
            setFilials(filialsData);
        }
    }

    return (
        <div className={styles.wrapper}>
            <Dropdown title="Филиалы" onValueChange={handleFilialChange} defaultValue={"Выбор филиала"} items={filials} />
        </div>
    )
}

export default NavbarDropdown;