import { EmptyPageProps } from "./EmptyPage.props";
import styles from "./EmptyPage.module.css"; 
import { Navbar } from "../../modules/Navbar";


const EmptyPage = ({}: EmptyPageProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
        </div>
    )
}

export default EmptyPage; 