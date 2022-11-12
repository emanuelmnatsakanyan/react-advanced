import { useState } from "react"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Book from "../../components/Book/Book"
import { Reviews } from "../../components/Reviews/Reviews"
import styles from './index.module.css'

const BookInfoPage = () => {
    const location = useLocation()
    const { id } = location.state
    const [book, setBook] = useState({})

    useEffect(() => {
        async function fetchBook() {
            const response = await fetch(`http://localhost:3001/books/${id}`)
            const data = await response.json()
            const book = data.data
            setBook(book)
        }
        fetchBook()
    }, [id])

    if (book)
        return (
            <main className={`container ${styles.main}`}>
                <div className={styles.main__block}>
                    <Book counterDown style={{ flex: '1 1 50%' }} book={book} />
                    <div className={styles.annotation__wrapper}>
                        <h1 className={styles.annotation__heading}>Аннотация</h1>
                        <p className={styles.annotation}>{book.annotation}</p>
                    </div>
                </div>
                <Reviews reviews={book.reviews} />
            </main>
        )
    else
        return <p>Loading...</p>
}

export default BookInfoPage