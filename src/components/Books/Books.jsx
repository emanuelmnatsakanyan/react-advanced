import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from "../../store/books/loadBooksIfNotExist"
import { getBooks } from "../../store/books/selectors"
import { getActiveTypeId } from "../../store/types/selectors"
import Book from "../Book/Book"
import styles from './index.module.css'

const Books = () => {
    const dispatch = useDispatch()
    const typeId = useSelector(state => getActiveTypeId(state))
    
    useEffect(() => {
        if (typeId)
            dispatch(fetchBooks(typeId))
    }, [typeId])

    const books = useSelector(state => getBooks(state))

    return (
        <div className={styles.books}>
            {books.map(book => <Book key={book.id} book={book} />)}
        </div>
    )
}

export default Books