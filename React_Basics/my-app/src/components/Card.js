import styles from "./Card.module.css"

export default function Card(props) {
    return (
        <div className={styles.main}>
            <div className={styles.img}><img src={props.imgSrc} alt="avatar" /></div>
            <div className={styles.textContainer}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.textBody}>{props.textBody}</div>
            </div>
        </div>
    )
}
