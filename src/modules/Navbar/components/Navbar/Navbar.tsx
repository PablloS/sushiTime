import { NavbarProps } from "./Navbar.props";
import styles from "./Navbar.module.css";
import CompanyInfo from "../../../../components/CompanyInfo/CompanyInfo";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";
import NavbarMenu from "../NavbarMenu/NavbarMenu";


export const Navbar = ({ }: NavbarProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.company}>
                <CompanyInfo companyName="Лоскутникова В.П." />
            </div>
            <div className={styles.dropdown}>
                <NavbarDropdown />
            </div>
            <div className={styles.menu}>
                <NavbarMenu />
            </div>
        </div>
    )
}