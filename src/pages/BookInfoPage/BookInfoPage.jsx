import Book from "../../components/Book/Book"
import { Reviews } from "../../components/Reviews/Reviews"
import styles from './index.module.css'

const BookInfoPage = ({book}) => {
    const annotation = book.annotation

    return (
        <main className={`container ${styles.main}`}>
            <div className={styles.main__block}>
                <Book counterDown style={{flex: '1 1 50%'}} book={book} />
                <div className={styles.annotation__wrapper}>
                    <h1 className={styles.annotation__heading}>Аннотация</h1>
                    <p className={styles.annotation}>{annotation}</p>
                </div>
            </div>
            <Reviews reviews={book.reviews} />
        </main>
    )
}

export default BookInfoPage