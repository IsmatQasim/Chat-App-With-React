import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import './App.css';
const App = () => {
  return (
    <ChatEngine 
        height="100vh"
        projectID=" 2db135e3-a42f-4341-9adf-d6b32c82291a"
        userName="IsmatScripts__"
        userSecret="1234"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

    />
  )
}

export default App