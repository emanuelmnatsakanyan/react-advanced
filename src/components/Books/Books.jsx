import Book from "../Book/Book"
import styles from './index.module.css'

const Books = ({ books, setActiveBook }) => {
    return (
        <div className={styles.books}>
            {books.map(book => <Book setActiveBook={setActiveBook} key={book.id} book={book} />)}
        </div>
    )
}

export default Books