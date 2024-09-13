import { VscError, VscRemote, VscWarning } from 'react-icons/vsc';
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
          <p className='menu-icon'><span>UTF-8</span></p>

        </div>
      </div>
    </>
  )
}

export default StatusBar