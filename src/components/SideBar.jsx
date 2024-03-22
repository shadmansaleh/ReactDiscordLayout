import { BsPlus, BsFillLightningFill, BsGearFill  } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const SideBar = () => {
  return (
    <div className="sidebar-container ">
      <SideBarIcon icon={<FaFire size="28"/>} text={"Fire"} />
      <SideBarIcon icon={<BsPlus size="32"/>} text={"Plus"} />
      <SideBarIcon icon={<BsFillLightningFill size="20"/>} text={"Bolt"} />
      <SideBarIcon icon={<FaPoo size="20"/>} text={"Boo"} />
      <hr className="sidebar-hr" />
      <SideBarIcon icon={<BsGearFill size="20"/>} text={"Settings"} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => ( 
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
 );


export default SideBar;
