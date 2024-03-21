import {useState} from 'react';
import {BsHash} from 'react-icons/bs';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['varients', 'custom', 'plugins'];

const ChannelBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock />
      <Dropdown header='Topics' selections={topics} />
      <Dropdown header='Questions' selections={questions} />
      <Dropdown header='Random' selections={random} />
    </div>
  )
};

const Dropdown = ({header, selections}) => {
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
        selections.map((selection) => <TopicSelection selection={selection} />)}
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

const TopicSelection = ({selection}) => (
  <div className="dropdown-selection">
    <BsHash size='24' className='text-gray-400' />
    <h5 className="dropdown-selection-text">{selection}</h5>
  </div>
)


const ChannelBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Channels</h5>
  </div>
)

export default ChannelBar;