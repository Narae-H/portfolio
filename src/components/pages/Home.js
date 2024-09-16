import { Card, ListGroup, Nav } from 'react-bootstrap';
import './../../styles/pages/Home.css';
import { VscClose, VscVariableGroup, VscVscode } from 'react-icons/vsc';

import { useSelector } from 'react-redux';
import CapitalizedComponent from '../../utils/common';
import { Editor } from '../Editor';

function Home() {
  // 1. Menus
  let mainMenu = useSelector( (state) => state.mainMenu );

  return(
    <>
      <Editor>
        <Editor.Header>
          <Editor.HeaderTab>
            <Editor.HeaderTabIcon> <VscVscode className='vscode-item' /> </Editor.HeaderTabIcon>
            <Editor.HeaderTabTitle> Welcome </Editor.HeaderTabTitle>
          </Editor.HeaderTab>
          <Editor.HeaderTab>
            <Editor.HeaderTabIcon><VscVscode/> </Editor.HeaderTabIcon> 
            <Editor.HeaderTabTitle> Test </Editor.HeaderTabTitle>
          </Editor.HeaderTab>
        </Editor.Header>

        <Editor.Body id='editor-area-body'>
          <div className='row'>
            <h2>Narae Hyeon</h2>
            <Card.Title className='text-secondary'>Full Stack Java Developer</Card.Title>
          </div>

        </Editor.Body>
      </Editor>
      
      <Card className='na-card'>
        <Card.Header className='na-card-header'>
          <Nav variant="tabs" defaultActiveKey="#first" className='na-card-header-tabs'>
            <Nav.Item>
              <Nav.Link href="#first" className='na-nav-link na-active'>
                <VscVscode className='na-nav-link-icon icon-lg'/> 
                Welcome &nbsp;
                <VscClose className='na-nav-link-icon icon-sm text-secondary'/>
                </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body id='editor-area-body' className='na-card-body'>
          <div className='row'>
            <h2>Narae Hyeon</h2>
            <Card.Title className='text-secondary'>Full Stack Java Developer</Card.Title>
          </div>
          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='mt-2 mb-2'>
                <Card.Subtitle>Contents</Card.Subtitle>
                <ListGroup variant="flush" className='na-list-group'>
                  {
                    mainMenu.map( (item) => {
                      return(
                        <ListGroup.Item action href={`/${item.name}`} className='na-list-group-item'>
                          <CapitalizedComponent type={item.iconName}/><span>{item.name}</span>
                        </ListGroup.Item>
                      )
                    })
                  }
                </ListGroup>
              </div>
              
              <div className='mt-2 mb-2'>
                <Card.Subtitle>Experiences</Card.Subtitle>
                <ListGroup variant="flush" className='na-list-group'>
                  <ListGroup.Item className='na-list-group-item'>
                    <a href='#home'>Exp1</a>
                    <p className='list-group-des'>Here is a description section Here is a description section Here is a description section</p>
                  </ListGroup.Item>
                </ListGroup>
              </div>  
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='mt-2 mb-2'>
                <Card.Subtitle>Skills</Card.Subtitle>
                <Card className='na-card card-horizontal'>
                  <VscVariableGroup className='na-card-icon icon-xl'/>
                  <Card.Body className='na-card-body'>
                    <p className=''>Card Title</p>
                    <Card.Text>
                      Some quick example text to build
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>

          </div>
            
        </Card.Body>
      </Card>
    </>
  )
}

export default Home;