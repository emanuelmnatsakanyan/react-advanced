import { useSelector } from "react-redux"
import Book from "../../components/Book/Book"
import { getCartBooks } from "../../store/cart/selectors"
import styles from './index.module.css'


const CartPage = () => {
    const books = useSelector(state => getCartBooks(state))

    return (
        <main className={`container ${styles.main}`}>
            <div className={styles.cart}>
                <h1 className={styles.heading}>Ваш заказ:</h1>
                <div className={styles.books__wrapper}>
                    {
                        books?.map(book => <div key={book?.id} className={styles.book}>
                            <p className={styles.name}>{book?.count + ' * ' + book?.name}</p>
                            <p className={styles.price}>{book?.count * book?.price + ' ₽'}</p>
                        </div>)
                    }
                </div>

                <div className={styles.total__wrapper}>
                    <p className={styles.total}>Итого: {books?.reduce((pv, cv) => {
                        return pv + cv.price * cv.count 
                    }, 0)} ₽</p>
                    <button className={styles.buy}>Купить</button>
                </div>
            </div>
            <div className={styles.books}>
                {books?.map(book => {
                    return <Book key={book.id} style={{width: '100%'}} book={book} />
                })}
            </div>
        </main>
    )
}

export default CartPage