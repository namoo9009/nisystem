import styles from "./PageTitle.module.css"

export default function PageTitle({title}) {
    return (
        <h2 className={styles.page_title}>{title}</h2>
    )
}