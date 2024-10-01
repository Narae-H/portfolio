import { ListGroup } from 'react-bootstrap';
import './../../styles/pages/Home.css';
import {VscVariableGroup, VscVscode } from 'react-icons/vsc';

import { useSelector } from 'react-redux';
import { Editor } from '../Editor';
import { Card } from '../Card';
import { Icon } from '../../assets/customIcon/Icon';

function Home() {
  // 1. Menus
  let mainMenu = useSelector( (state) => state.mainMenu );

  return(
    <>
      <Editor>
        <Editor.Header>
          <Editor.HeaderTab title='Welcome' icon={<Icon name='vscode'/>} className='active' />
          <Editor.HeaderTab title='Test' icon={<Icon name='vscode'/>} />
        </Editor.Header>

        <Editor.Body id='editor-area-body'>
          <div className='row mb-4'>
            <Editor.Title>Narae Hyeon</Editor.Title>
            <Editor.SubTitle className='text-secondary'>Full Stack Java Developer</Editor.SubTitle>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='mt-2 mb-4'>
                <Editor.SubSubTitle>Contents</Editor.SubSubTitle>
                <ListGroup variant="flush" className='na-list-group'>
                  {
                    mainMenu.map( (item) => {
                      return(
                        <ListGroup.Item action href={`/${item.name}`} className='na-list-group-item' key={item.name}>
                          <Icon name={item.name}/> <span>{item.name}</span>
                        </ListGroup.Item>
                      )
                    })
                  }
                </ListGroup>
              </div>
              
              <div className='mt-2 mb-4'>
                <Editor.SubSubTitle>Experiences</Editor.SubSubTitle>
                <ListGroup variant="flush" className='na-list-group'>
                  <ListGroup.Item className='na-list-group-item'>
                    <a href='#home'>Exp1</a>
                    <p className='list-group-des'>Here is a description section Here is a description section Here is a description section</p>
                  </ListGroup.Item>
                  <ListGroup.Item className='na-list-group-item'>
                    <a href='#home'>More...</a>
                  </ListGroup.Item>
                </ListGroup>
              </div>  
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='mt-2 mb-4'>
                <Editor.SubSubTitle>Skills</Editor.SubSubTitle>
                <Card className='important'>
                  <Card.Img>
                  <VscVariableGroup className='icon-lg'/>
                  </Card.Img>
                  <Card.Body>
                    <Card.Title>Back-end developing</Card.Title>
                    <Card.Description>This is description</Card.Description>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img>
                  <VscVariableGroup className='icon-lg'/>
                  </Card.Img>
                  <Card.Body>
                    <Card.Title>Fornt-end developing</Card.Title>
                    <Card.Description>This is description</Card.Description>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

        </Editor.Body>
      </Editor>
    </>
  )
}

export default Home;