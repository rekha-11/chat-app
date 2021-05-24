import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './Components/ChatFeed'
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height='100vh'
        projectID="c01701da-0abd-405b-8e68-6c91570db404"
        userName="rekha_bhandari"
        userSecret="Rekha..."
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
      />
    </div>
  );
}

export default App;
