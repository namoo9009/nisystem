import styles from "./PageHeader.module.css"

export default function PageHeader({title, destription}) {
    return (
        <section className={styles.page_header}>
             <div className="inner">
                <h1>{title}</h1>
                <p>{destription}</p>
             </div>
        </section>
    )
}