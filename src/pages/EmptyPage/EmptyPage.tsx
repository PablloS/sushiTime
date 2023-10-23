import { EmptyPageProps } from "./EmptyPage.props";
import styles from "./EmptyPage.module.css"; 


const EmptyPage = ({}: EmptyPageProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
        </div>
    )
}

export default EmptyPage; 