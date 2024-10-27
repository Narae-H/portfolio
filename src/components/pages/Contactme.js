import './../../styles/pages/Skills.css'

import { Editor } from '../Editor';
import { Icon } from '../../assets/customIcon/Icon';

function Skills () {
  
  return (
    <>
      <Editor>
        <Editor.Header>
          <Editor.HeaderTab title='Welcome' icon={<Icon name='contactme' />} />
        </Editor.Header>

        <Editor.Body id='editor-area-body'>
          <div className='row'>
            <Editor.SubTitle className='text-secondary'>
              <span>
              If you'd like to get in touch, <br /> 
              please don’t hesitate to contact me by <a href="mailto:naraehyeon@gmail.com">email</a>.
              </span>
            </Editor.SubTitle>
          </div>

        </Editor.Body>

      </Editor>
    </>
  )
}

export default Skills;