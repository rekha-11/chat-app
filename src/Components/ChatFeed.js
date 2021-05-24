import React from 'react'
import MessageForm from './MessageForm'
import TheirMessage from './TheirMessage'
import MyMessage from './MyMessage'


export default function ChatFeed(props) {

    const {chats, activechats, userName, messages} = props;

    const chat = chats && chats[activechats]

    const renderMessages =() => {
        const keys = Object.keys(messages);
        
        return keys.map((key, index) =>{
            const message = messages[key];
            const lastMessageKey = index ===0? null: keys[index-1];
            const isMyMessage = userName ===message.sender.userName
            return(
                <div key = {`msg_${index}`} style ={{width: '100%'}}>
                    <div className= 'message-block'>
                        {
                            isMyMessage ? 
                            <MyMessage message={message}/> : 
                            <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className = 'read-receipts' style = {{marginRight: isMyMessage? '18px': '0px',
                    marginLeft : isMyMessage ? '18px': '68px'
                    }}>
                    </div>
                </div>
            )
        })
    }

    if(!chat) return 'Loading...';

    return (
        <div className='chat-feed'>
            <div className = 'chat-title-container'>
                <div className = 'chat-title'>{chat.itle}</div>
                <div className = 'chat-subtitle'>
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style ={{height:'100px'}} />
            <div className='message-form-container'>
                <MessageForm {...props} chatID = {activechats}/>
            </div>
            
        </div>
    )
}
