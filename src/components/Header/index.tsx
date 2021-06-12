import styles from './styles.module.scss';

export default function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <img src="/user1.png" />

                <div className={styles.leftColumn}>
                    <span className={styles.userName}>Gabriel Aids</span>

                    <div className={styles.isOnline}>
                        <div className={styles.onlineIndicator} />
                        <span>Active Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}