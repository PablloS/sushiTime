import { CompanyInfoProps } from "./CompanyInfo.props";
import styles from "./CompanyInfo.module.css";
import CompanyLogo from "./companyLogo.svg?react";
import AccountingLogo from "./accoutingLogo.svg?react"; 


const CompanyInfo = ({ companyName }: CompanyInfoProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.company__info}>
                <CompanyLogo />
                <div className={styles.company__name}>
                    <h1 className={styles.title}>Название фирмы</h1>
                    <h2 className={styles.name}>{companyName}</h2>
                </div>
            </div>
            <div className={styles.accounting}>
                <AccountingLogo />
                <h1 className={styles.title}>Складской учёт</h1>
            </div>
        </div>
    )
}

export default CompanyInfo; 