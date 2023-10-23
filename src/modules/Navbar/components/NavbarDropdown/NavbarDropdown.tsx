import { NavbarDropdownProps } from "./NavbarDropdown.props";
import styles from "./NavbarDropdown.module.css";
import Dropdown from "../../../../UI/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { getFilials } from "../../api/getFilials";
import { IFilial } from "../../interfaces/filial.interface";


const NavbarDropdown = ({ }: NavbarDropdownProps): JSX.Element => {

    const [filials, setFilials] = useState<IFilial[]>([]);

    useEffect(() => {
        getData(); 
    }, [])

    const getData = async () => {
        const filialsData = await getFilials();
        setFilials(filialsData)
    }

    return (
        <div className={styles.wrapper}>
            <Dropdown title="Филиалы" onValueChange={() => {}} defaultValue="" items={filials} />
        </div>
    )
}

export default NavbarDropdown;