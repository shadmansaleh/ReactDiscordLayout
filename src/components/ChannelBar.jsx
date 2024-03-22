import {useState} from 'react';
import {BsHash} from 'react-icons/bs';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const topics = ['tailwind-css', 'react', 'next-js', 'node-js', 'express', 'mongodb', 'javascript', 'html', 'css', 'git', 'github', 'vscode', 'interview-questions'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode', 'responsive-design', 'utility-first'];
const random = ['varients', 'custom', 'plugins', 'config', 'extend', 'colors'];

let done = false;
const ChannelBar = ({setTopicHeader}) => {
  if (!done) {
    // setTopicHeader('css');
    done = true
  }
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock />
      <div className="channel-list">
        <Dropdown header='Topics' selections={topics} setTopicHeader={setTopicHeader}/>
        <Dropdown header='Questions' selections={questions} setTopicHeader={setTopicHeader}/>
        <Dropdown header='Random' selections={random} setTopicHeader={setTopicHeader}/>
      </div>
    </div>
  )
};

const Dropdown = ({header, selections, setTopicHeader}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown">
      <div onClick={()=>setExpanded(!expanded)} className='dropdown-header'>
        <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
          {header}
        </h5>

        <ChevronIcon expanded={expanded} />
      </div>
      {expanded && 
        selections &&
        selections.map((selection) => <TopicSelection selection={selection} setTopicHeader={setTopicHeader}/>)}
    </div>
  )
}

const ChevronIcon = ({expanded}) => {
  const chevClass = 'text-accent text-opacity-80 my-auto ml-auto mr-2';
  return expanded ? (
    <FaChevronDown size='14' className={chevClass} />
  ) : (
    <FaChevronRight size='14' className={chevClass} />
  );
}

const TopicSelection = ({selection, setTopicHeader}) => (
  <div className="dropdown-selection">
    <BsHash size='24' className='text-gray-400' />
    <h5 className="dropdown-selection-text" onClick={()=>{setTopicHeader(selection
      )}}>{selection}</h5>
  </div>
)


const ChannelBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Channels</h5>
  </div>
)

export default ChannelBar;