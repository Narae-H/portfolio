import { VscError, VscRemote, VscWarning } from 'react-icons/vsc';
import { FaReact } from "react-icons/fa";
import './../styles/StatusBar.css';

function StatusBar(){
  return(
    <>
      <div id='status-wrapper'>
        <div className='left-menu'>
          <p className='menu-icon bg-activity'><VscRemote className='status-icon'/> <span>Narae&apos;s Profile</span></p>
          <p className='menu-icon'><VscError className='status-icon'/><span>0</span> &nbsp; <VscWarning className='status-icon'/><span>0</span></p>
        </div>

        <div className='right-menu'>
          <p className='menu-icon bg-activity'><span>UTF-8</span></p>
          <p className='menu-icon bg-activity'><FaReact /><span>React</span></p>

        </div>
      </div>
    </>
  )
}

export default StatusBar