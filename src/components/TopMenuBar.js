
import './../styles/TopMenuBar.css';


import VscodeImg from './../assets/svg/vscode.svg';
// import { ReactComponent as WindowMinimize} from './../assets/svg/WindowMinimize.svg';
// import WindowRestore from './../assets/svg/WindowRestore.svg';
// import Xmark from './../assets/svg/Xmark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize, faWindowRestore, faXmark } from '@fortawesome/free-solid-svg-icons'

function TopMenuBar (){

  const leftMenus  = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

  return(
    <>
      <div id='top-menu-wrapper'>
        <div className='left-menu'>
          <div className='menu-main-img'>
            <img src={VscodeImg} alt='vscode'/>
          </div>
          {
            leftMenus.map( (item, i) => {
              return (
                <p className='menu-icon' key={i}>{item}</p>
              )
            })
          }
        </div>


        <div className='right-menu'>
          <div className='menu-img'>
            <FontAwesomeIcon icon={faWindowMinimize} />
          </div>
          <div className='menu-img'>
            <FontAwesomeIcon icon={faWindowRestore} />
          </div>
          <div className='menu-img close'>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>

      </div>
    </>
  )
}

export default TopMenuBar;