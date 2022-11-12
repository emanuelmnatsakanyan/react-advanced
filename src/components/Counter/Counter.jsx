import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, removeCount } from '../../store/utils'
import { selectBookById } from '../../store/books/selectors'
import { addBook} from '../../store/cart'
import { getCountOfBookById } from '../../store/cart/selectors'
import { useLocation } from 'react-router-dom'

const Counter = ({ counterDown, id}) => {
    const book = useSelector(state => selectBookById(state, id))
    const count = useSelector(state => getCountOfBookById(state, id))
    const dispatch = useDispatch()
    const {pathname} = useLocation()

    function increaseCount() {
        dispatch(addCount(id))
        dispatch(addBook({...book, count: book.count + 1}))
    }

    function decreaseCount() {
        dispatch(removeCount(id))
    }

    return (
        <div style={counterDown ? { alignSelf: 'flex-end' } : null} className={styles.counter}>
            <button style={pathname === '/cart' ? {backgroundColor: 'black'} : null} className={styles.decrease} onClick={decreaseCount}>-</button>
            <p className={styles.count}>{count}</p>
            <button className={styles.increase} onClick={increaseCount}>+</button>
        </div>
    )
}

export default Counter