import { NavbarMenuProps } from "./NavbarMenu.props";
import styles from "./NavbarMenu.module.css"; 
import Menu from "../../../../components/Menu/Menu";
import { menuData } from "../../data/menu.data";


const NavbarMenu = ({onItemChange}: NavbarMenuProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Menu items={menuData} onValueChange={onItemChange} />
        </div>
    )
}

export default NavbarMenu; 