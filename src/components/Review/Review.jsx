import styles from './index.module.css'

export const Review = ({review}) => {
  return <div className={styles.review__wrapper}>
        <h2 className={styles.review__author}>{review.author}</h2>
        <p className={styles.review__text}>{review.review}</p>
    </div>
}