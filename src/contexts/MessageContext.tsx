import { createContext, ReactNode, useState } from 'react'

type MessageContextData = {
    userMessage: string;
}

type MessageContextProps = {
    children: ReactNode;
}

export const PlayerContext = createContext({} as MessageContextData);

export function MessageContextProvider({ children }: MessageContextProps) {
    const [userMessage, setUserMessage] = useState('');

    return(
        <PlayerContext.Provider
            value={{
                userMessage
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}