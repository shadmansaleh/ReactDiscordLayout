import TopNavigation from './TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';

const ContentContainer = ({heading}) => {
  return (
    <div className="content-container">
      <TopNavigation heading={heading}/>
    </div>
  )
}
export default ContentContainer;