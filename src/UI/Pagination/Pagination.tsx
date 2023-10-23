import { PaginationProps } from "./Pagination.props";
import styles from "./Pagination.module.css";
import { useState } from "react";
import ChangeIcon from "./changePageIcon.svg?react";


const Pagination = ({ numberOfPages, onPageChange }: PaginationProps): JSX.Element => {

    const [currentPage, setCurrentPage] = useState<number>(1);

    const nextPage = () => {
        if (currentPage < numberOfPages) {
            setCurrentPage(currentPage + 1);
            onPageChange(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            onPageChange(currentPage - 1);
        }
    }

    const handlePageClick = (value: string) => {
        if (!!Number(value)) {
            setCurrentPage(Number(value));
            onPageChange(Number(value));
        }
    }

    const renderPagintion = (): JSX.Element => {
        let renderArray: string[] = [];

        if (currentPage >= 1 && currentPage <= 3) {
            renderArray = ['2', '3', '...']
        } else if (currentPage <= numberOfPages && currentPage >= numberOfPages - 2) {
            renderArray = ['...', String(numberOfPages - 2), String(numberOfPages - 1)]
        } else {
            renderArray = ['...', String(currentPage), '...']
        }

        return (
            <div className={styles.page__container}>
                <div className={styles.page__container}>
                    {renderArray.map((item, index) => (
                        <div
                            className={`${styles.page__button} ${currentPage === Number(item) ? styles.active : ''}`}
                            key={index}
                            onClick={() => handlePageClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        )

    }

    return (
        <div className={styles.wrapper}>
            <ChangeIcon className={styles.back__button} onClick={prevPage} />
            {numberOfPages < 6 ?
                <div className={styles.page__container}>
                    {Array.from({ length: numberOfPages }).map((_, index) => (
                        <div
                            className={`${styles.page__button} ${currentPage === index + 1 ? styles.active : ''}`}
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div> :
                <div className={styles.page__container}>
                    <div className={`${styles.page__button} ${currentPage === 1 ? styles.active : ''}`}
                        onClick={() => handlePageClick('1')}>
                        1
                    </div>
                    {renderPagintion()}
                    <div className={`${styles.page__button} ${currentPage === numberOfPages ? styles.active : ''}`}
                        onClick={() => handlePageClick(String(numberOfPages))}>
                        {numberOfPages}
                    </div>
                </div>
            }
            <ChangeIcon className={styles.next__button} onClick={nextPage} />
        </div>
    )
}

export default Pagination; 