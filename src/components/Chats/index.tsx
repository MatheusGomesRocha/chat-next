import styles from './styles.module.scss';
import Image from 'next/image';

import { BiMenuAltLeft, BiSearchAlt2 } from 'react-icons/bi';
import { RiMessage2Fill } from 'react-icons/ri';
import { FiPhone, FiFileText } from 'react-icons/fi';
import { TiContacts } from 'react-icons/ti';


let personalMessagesArray = [
    {id: 1, userImg: "/user1.png", userName: 'Gabriel Ferreira', lastMessageTime: '15 min', lastMessageContent: 'Eaí mano, tu fez aquele negócio lá que te pedi ontem?', read: true, notReadMessagesValue: 0, online: false},
    {id: 2, userImg: '/user3.jpg', userName: 'Gabriel Aids', lastMessageTime: '1 hour', lastMessageContent: 'Eaí mano, tu fez aquele negócio lá que te pedi ontem?', read: false, notReadMessagesValue: 4, online: true},
    {id: 3, userImg: '/user2.jpg', userName: 'Toin churrasqueiro', lastMessageTime: 'yesterday', lastMessageContent: 'Eaí mano, tu fez aquele negócio lá que te pedi ontem?', read: true, notReadMessagesValue: 0, online: true},
];

let groupMessagesArray = [
    {
        id: 1, 
        groupName: 'Solitários e comprando fiado', 
        usersOnGroup: ['/user4.png', '/user6.jpg'], 
        lastMessageTime: '7 min', 
        lastMessageContent: 'Eaí mano, tu fez aquele negócio lá que te pedi ontem?', 
        read: true,
        notReadMessagesValue: 0,
        users: 5,
    },
    {
        id: 2, 
        groupName: 'Trabalho', 
        usersOnGroup: ['/user6.jpg', '/user5.jpg'], 
        lastMessageTime: 'yesterday', 
        lastMessageContent: 'Eaí mano, tu fez aquele negócio lá que te pedi ontem?', 
        read: false,
        notReadMessagesValue: 10,
        users: 3,
    },
    {
        id: 3, 
        groupName: 'Comilança solta', 
        usersOnGroup: ['/user1.png', '/user3.jpg'], 
        lastMessageTime: '20 min', 
        lastMessageContent: 'Eaí mano, tu fez aquele negócio lá que te pedi ontem?', 
        read: false,
        notReadMessagesValue: 5,
        users: 2,
    },
    {
        id: 4, 
        groupName: 'Fofoca', 
        usersOnGroup: ['/user5.jpg', '/user2.jpg'], 
        lastMessageTime: '20 min', 
        lastMessageContent: 'Eaí mano, tu fez aquele negócio lá que te pedi ontem?', 
        read: true,
        notReadMessagesValue: 0,
        users: 10,
    },
];

export default function Chats() {
    
    const PersonalMessagesArrayComponent = () => {
        return(
            <section className={styles.messageArea}>
                <span className={styles.title}>Personal Messages</span>

                <div className={styles.messageArray}>
                    {personalMessagesArray.map((message) => {
                        return(
                            <section key={message.id} className={message.id === 2 && styles.messageIsSelected}>
                                <img
                                    width={700}
                                    height={160}
                                    src={message.userImg}
                                    alt={message.userName}
                                />

                                <div className={styles.column}>
                                    <div className={styles.topAreaInfo}>
                                        <span className={styles.userName}>{message.userName}</span>
                                        {message.online && <div className={styles.onlineIndicator} />}
                                        <span className={styles.lastMessageTime}>{message.lastMessageTime}</span>
                                    </div>

                                    <div className={styles.bottomAreaInfo}>
                                        <p className={!message.read && styles.lastMessageContent}>{message.lastMessageContent}</p>
                                        {!message.read && 
                                            <div className={styles.notReadIndicator}>
                                                <span>{message.notReadMessagesValue}</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </section>
                        )
                    })}
                </div>
            </section>
        )
    }

    const GroupMessagesArrayComponent = () => {
        return(
            <section className={styles.messageArea}>
                <span className={styles.title}>Group Messages</span>

                <div className={styles.messageArray}>
                    {groupMessagesArray.map((message) => {
                        return(
                            <section key={message.id} className={message.id === 2 && styles.messageIsSelected}>
                                <div className={styles.imgGroup}>
                                    {message.usersOnGroup.map((item) => {
                                        return(
                                            <img src={item} />
                                        )
                                    })}

                                    {message.users > 2 && 
                                        <div>
                                            <span>{message.users - 2}</span>
                                        </div>
                                    }
                                </div>

                                <div className={styles.column}>
                                    <div className={styles.topAreaInfo}>
                                        <span className={styles.userName}>{message.groupName}</span>
                                        <span className={styles.lastMessageTime}>{message.lastMessageTime}</span>
                                    </div>

                                    <div className={styles.bottomAreaInfo}>
                                        <p className={!message.read && styles.lastMessageContent}>{message.lastMessageContent}</p>
                                        {!message.read && 
                                            <div className={styles.notReadIndicator}>
                                                <span>{message.notReadMessagesValue}</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </section>
                        )
                    })}
                </div>
            </section>
        )
    }

    return(
        <div className={styles.container}>
            <section className={styles.header}>
                <BiMenuAltLeft color="#000" size={30} />

                <h2>Messages</h2>

                <div className={styles.messageNotRead}>
                    <span>6</span>
                </div>
            </section>

            <section className={styles.searchArea}>
                <BiSearchAlt2 color="#B2B2B2" size={20} />
                <input placeholder="Search pepole, groups & messages" />
            </section>

            <section className={styles.filterArea}>
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
            </section>

            <section className={styles.messagesArea}>
                <PersonalMessagesArrayComponent />

                <GroupMessagesArrayComponent />
            </section>
        </div>
    )
}