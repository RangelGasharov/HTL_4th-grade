import styles from "./List.module.css"

export default function List(props) {
    return (
        <div className={styles.main}>
            <div>{props.item1}</div>
            <div>{props.item2}</div>
            <div>{props.item3}</div>
        </div>
    )
}