import { useEffect, useState } from 'react';
import styles from './home.module.scss';

let chatArray = [
  {id: 1, chat: [
    {author: 1, content: 'Eaí mano, eu tava indo viajar esses dias, quer ir também?', time: '10:45'},
    {author: 0, content: 'Lógico cara', time: '10:51'},
    {author: 0, content: 'Quanto vou ter que pagar?', time: '10:51'},
    {author: 1, content: 'Man, só precisa dar 50 pila e já era', time: '10:53'},
    {author: 1, content: 'Man, só precisa dar 50 pila e já era', time: '10:53'},
    {author: 0, content: 'Man, só precisa dar 50 pila e já era', time: '00:53'},
    {author: 0, content: 'Man, só precisa dar 50 pila e já era', time: '00:53'},
    {author: 1, content: 'Man, só precisa dar 50 pila e já era', time: '10:53'},
    {author: 0, content: 'Man, só precisa dar 50 pila e já era', time: '00:53'},
    {author: 0, content: 'Man, só precisa dar 50 pila e já era', time: '00:53'},
    {author: 1, content: 'Man, só precisa dar 50 pila e já era', time: '10:53'},
    {author: 1, content: 'Man, só precisa dar 50 pila e já era', time: '10:53'},
    {author: 1, content: 'Man, só precisa dar 50 pila e já era', time: '10:53'},
    {author: 1, content: 'Man, só precisa dar 50 pila e já era', time: '10:53'},
  ]}
]

export default function Home() {
  const [arraySplit, setArraySplit] = useState([]);

  useEffect(() => {
    chatArray.forEach(chat => {
      setArraySplit(chat.chat);
    });
  }, [])

  return(
    <div className={styles.container}>
      <div className={styles.chatContent}>
        {arraySplit.map((chat, index) => {
          return(
            <div style={{justifyContent: chat.author === 1 ? 'flex-start' : 'flex-end'}} key={index} className={styles.message}>
              {chat.author === 1 ? 
                <img src="/user1.png" />
              : null}

              <div id={chat.author === 1 ? styles.authorOther : undefined} className={styles.messageContent}>
                <span>{chat.content}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}