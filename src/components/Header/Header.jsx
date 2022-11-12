import styles from './styles.module.css'
import cart from '../../images/Frame.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.header}> 
            <div className={`container ${styles.header__container}`}>
                <Link to={'/'} className={styles.logo} href="#">Магазин</Link>
                <Link to={'/cart'} href="#" className='cart'>
                    <img src={cart} alt="Cart" />
                </Link>
            </div>
        </header>
    )
}
export default Header