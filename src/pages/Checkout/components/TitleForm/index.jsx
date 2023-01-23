import styles from './styles.module.css';

export function TitleForm(props) {
    return (
        <div className={styles.rowSubTitle}>
            <div>
                {props.icon}
            </div>
            <div className={styles.iconTitle}>
                <h2 className={styles.addresTitle}>{props.title}</h2>
                <span className={styles.addresSubTitle}>{props.subtitle}</span>
            </div>
        </div>
    )
}