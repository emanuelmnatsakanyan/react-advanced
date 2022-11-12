import styles from './styles.module.css'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTypes } from "../../store/types/loadTypesIfNotExist"
import { getTypes } from '../../store/types/selectors'
import { toggleTypeActive } from '../../store/types/toggleTypeActive'

const Types = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => getTypes(state))

    useEffect(() => {
        dispatch(fetchTypes())
    }, [])

    const toggleActive = typeId => {
        dispatch(toggleTypeActive(typeId))
    }

    return (
        <div className={styles.types__wrapper}>
            {types.map(type => {
                return <button onClick={() => toggleActive(type.id)} key={type.id} className={type.isActive ? styles.type + ` ${styles.active_type}` : styles.type} href="#">{type.name}</button>
            }
            )}
        </div>
    )
}

export default Types