import { Link } from "react-router-dom"
import Counter from "../Counter/Counter"
import styles from './index.module.css'

const Book = ({ book, style, counterDown }) => {
    const authors = book.authors
    return (
        <div style={style} className={styles.book__wrapper}>
            <div className={styles.book__info}>
                {!counterDown && <Link to={`/books/${book.id}`} state={{ id: book.id }} className={styles.book__title}>{book.name}</Link>}
                {counterDown && <p className={styles.book__title}>{book.name}</p>}
                
                <div>
                    <p className={styles.book__author}>{authors?.join(', ')}</p>
                    <p className={styles.book__type}>{book.subgenre}</p>
                </div>
                <p className={styles.book__price}>{book.price} ₽</p>
            </div>
            <Counter counterDown id={book.id} count={book.count}/>
        </div>
    )
}

export default Book