import { useState } from "react"
import styles from './index.module.css'

const Book = ({ book, style, setActiveBook, counterDown }) => {
    const [count, setCount] = useState(0)

    const { title, author, type, annotation, price } = book
    function increaseCount() {
        setCount(count + 1)
    }
    function decreaseCount() {
        console.log('fsad')
        if (count) {
            setCount(count - 1)
        }
    }
    return (
        <div style={style} className={styles.book__wrapper}>
            <div className={styles.book__info}>
                <p onClick={() => setActiveBook(book)} className={styles.book__title}>{title}</p>
                <div>
                    <p className={styles.book__author}>{author}</p>
                    <p className={styles.book__type}>{type}</p>
                </div>
                <p className={styles.book__price}>{price} ₽</p>
            </div>
            <div style={counterDown ? { alignSelf: 'flex-end' } : null } className={styles.counter}>
                <button className={styles.decrease} onClick={decreaseCount}>-</button>
                <p className={styles.count}>{count}</p>
                <button className={styles.increase} onClick={increaseCount}>+</button>
            </div>
        </div>
    )
}

export default Book