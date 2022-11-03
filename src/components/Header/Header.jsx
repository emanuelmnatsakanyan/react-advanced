import styles from './styles.module.css'
import cart from '../../images/Frame.png'

const Header = () => {
    return (
        <header className={styles.header}> 
            <div className={`container ${styles.header__container}`}>
                <a className={styles.logo} href="#">Магазин</a>
                <a href="#" className='cart'>
                    <img src={cart} alt="Cart" />
                </a>
            </div>
        </header>
    )
}
export default Header