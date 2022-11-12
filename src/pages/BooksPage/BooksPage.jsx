import { useState } from "react"
import Books from "../../components/Books/Books"
import Types from "../../components/Types/Types"
import styles from './index.module.css'

const BooksPage = ({ setActiveBook }) => {
    return (
        <main className={`container ${styles.main}`}>
            <Types />
            <Books />
        </main>
    )
}

export default BooksPage