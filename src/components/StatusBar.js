import { VscRemote } from 'react-icons/vsc';
import './../styles/StatusBar.css';
import { ImGithub, ImLinkedin } from "react-icons/im";

function StatusBar(){
  return(
    <>
      <div id='status-wrapper'>
        <div className='left-menu'>
          <p className='menu-icon bg-activity'><VscRemote className='status-icon'/> <span>Narae&apos;s Profile</span></p>
          <a href='https://github.com/Narae-H?tab=repositories' target='_blank' rel='noopener noreferrer'><p className='menu-icon link'><ImGithub /><span>GitHub</span></p></a>
          <a href='https://www.linkedin.com/in/narae-hyeon'target='_blank' rel='noopener noreferrer'><p className='menu-icon link'><ImLinkedin /><span>LinkedIn</span></p></a>
        </div>

        <div className='right-menu'>
          <p className='menu-icon'><span>UTF-8</span></p>

        </div>
      </div>
    </>
  )
}

export default StatusBar