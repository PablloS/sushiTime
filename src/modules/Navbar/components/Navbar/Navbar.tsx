import { NavbarProps } from "./Navbar.props";
import styles from "./Navbar.module.css";
import CompanyInfo from "../../../../components/CompanyInfo/CompanyInfo";
import NavbarDropdown from "../NavbarDropdown/NavbarDropdown";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const Navbar = ({ }: NavbarProps): JSX.Element => {

    const [currentFilial, setCurrentFilial] = useState<number>(1);
    const navigate = useNavigate();
    const url = useLocation();

    const handleFilialChange = (id: number) => {
        setCurrentFilial(id);
        if (url.pathname.includes("menu")) {
            navigate(`/menu/${id}`)
        }
    }

    const handleMenuItemChange = (value: string) => {
        if (value === "меню") {
            navigate(`/menu/${currentFilial}`)
        } else {
            navigate(`/`)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.company}>
                <CompanyInfo companyName="Лоскутникова В.П." />
            </div>
            <div className={styles.dropdown}>
                <NavbarDropdown onFilialChange={handleFilialChange} />
            </div>
            <div className={styles.menu}>
                <NavbarMenu onItemChange={handleMenuItemChange} />
            </div>
        </div>
    )
}