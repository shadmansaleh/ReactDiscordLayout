import './App.css';
import SideBar from "./components/SideBar";
import ChannelBar from './components/ChannelBar';
import ContentContainer from './components/ContectContainer';
import {useState} from 'react';

function App() {
  const [topicHeader, setTopicHeader] = useState('tailwind-css');
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar setTopicHeader={setTopicHeader}/>
      <ContentContainer heading={topicHeader}/>
    </div>
  );
}

export default App;
