import ChatBox from './components/ChatBox';
import FileUpload from './components/FileUpload';

export default function App() {
  return (
    <div>
      <h1>📄 WordDoc Chatbot</h1>
      <FileUpload />
      <ChatBox />
    </div>
  );
}