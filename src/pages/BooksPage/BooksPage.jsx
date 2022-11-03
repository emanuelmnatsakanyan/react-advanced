import { useState } from "react"
import Books from "../../components/Books/Books"
import Types from "../../components/Types/Types"
import { books } from "../../constants/mock"
import styles from './index.module.css'

const BooksPage = ({setActiveBook}) => {
    const [activeType, setActiveType] = useState('Type 1')
    const booksList = books.filter(book => book.type === activeType)

    return (
        <main className={`container ${styles.main}`}>
            <Types active={activeType} setActive={setActiveType}/>
            <Books setActiveBook={setActiveBook} books={booksList} />
        </main>
    )
}

export default BooksPage