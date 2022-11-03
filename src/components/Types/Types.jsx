import { types } from "../../constants/mock"
import styles from './styles.module.css'

const Types = ({ active, setActive }) => {
    const changeActive = type => {
        setActive(type)
    }
    return (
        <div className={styles.types__wrapper}>
            {types.map(type =>
                <button onClick={changeActive.bind(this, type)} key={type} className={(type === active) ? styles.type + ` ${styles.active_type}` : styles.type} href="#">{type}</button>
            )}
        </div>
    )
}

export default Types