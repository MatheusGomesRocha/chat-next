import styles from './styles.module.scss';

import { FiPhone } from 'react-icons/fi';
import { BsCameraVideo } from 'react-icons/bs';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';

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

            <div className={styles.right}>
                <div>
                    <FiPhone color="#9c9c9c" size={25} />
                </div>

                <div>
                    <BsCameraVideo color="#9c9c9c" size={25} />
                </div>

                <div>
                    <IoEllipsisVerticalSharp color="#9c9c9c" size={25} />
                </div>
            </div>
        </div>
    )
}