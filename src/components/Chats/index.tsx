import styles from './styles.module.scss';
import { BiMenuAltLeft, BiSearchAlt2 } from 'react-icons/bi';

export default function Chats() {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <BiMenuAltLeft color="#000" size={30} />

                <h2>Messages</h2>

                <div className={styles.messageNotRead}>
                    <span>6</span>
                </div>
            </div>

            <div className={styles.searchArea}>
                <BiSearchAlt2 color="#B2B2B2" size={20} />
                <input placeholder="Search pepole, groups & messages" />
            </div>
        </div>
    )
}