import styles from './styles.module.scss';
import { BiMenuAltLeft, BiSearchAlt2 } from 'react-icons/bi';
import { RiMessage2Fill } from 'react-icons/ri';
import { FiPhone, FiFileText } from 'react-icons/fi';
import { TiContacts } from 'react-icons/ti';

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

            <div className={styles.filterArea}>
                <div>
                    <RiMessage2Fill color="#3b00ff" size={25} />
                    <span style={{color: '#3b00ff'}}>All Messages</span>
                </div>
                
                <div>
                    <FiPhone color="#9c9c9c" size={25} />
                    <span>Calls</span>
                </div>

                <div>
                    <TiContacts color="#9c9c9c" size={25} />
                    <span>Contacts</span>
                </div>

                <div>
                    <FiFileText color="#9c9c9c" size={25} />
                    <span>Archived</span>
                </div>
            </div>
        </div>
    )
}