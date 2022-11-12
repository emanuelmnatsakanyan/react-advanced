import styles from './index.module.css'

export const Review = ({ review }) => {
  return (
    <div className={styles.review__wrapper}>
      <h2 className={styles.review__author}>{review.user.name}</h2>
      <p className={styles.review__text}>{review.text}</p>
    </div>
  )
}