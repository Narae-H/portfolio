import './../../styles/pages/Home.css';

import { ListGroup } from 'react-bootstrap';

import { useQuery } from 'react-query';
import { Editor } from '../Editor';
import { Card } from '../Card';
import { Icon } from '../../assets/customIcon/Icon';
import axios from 'axios';
import { transformToLink } from '../../utils/common';
import { Link } from 'react-router-dom';

function Home() {
  // 1. Get menus
  const { data: menus, isSuccess } = useQuery(
                                      ['menuMain'],
                                      () => axios.get('data/menu/menuMain.json'),
                                      {refetchOnWindowFocus: false,
                                      staleTime: Infinity}
                                    );

  return(
    <>
      <Editor>
        <Editor.Header>
          <Editor.HeaderTab title='Welcome' icon={<Icon name='vscode'/>} className='active' />
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
                    isSuccess && menus.data.menus.map( (item, index) => {
                      return(
                        <ListGroup.Item className='na-list-group-item' key={`key_${index}`}>
                          <Link to={`/${transformToLink(item.name)}`}>
                            <Icon name={item.name}/> <span>{item.name}</span>
                          </Link>
                        </ListGroup.Item>
                      )
                    })
                  }
                </ListGroup>
              </div>
              
              <div className='mt-2 mb-4'>
                <Editor.SubSubTitle>Experiences</Editor.SubSubTitle>
                <ListGroup>
                  <ListGroup.Item className='na-list-group-item' >
                    <a href='/experiences/hhlawyers-website' className='na-list-group-item-header'> H &amp; H Lawyers Website </a>
                    <p className='list-group-des'> Developed a new H &amp; H Lawyers website and migrated servers from on-premise to Microsoft Exchange and AWS </p>
                  </ListGroup.Item>
                  <ListGroup.Item className='na-list-group-item' >
                    <a href='/experiences/octm-website' className='na-list-group-item-header'> OCTM Website </a>
                    <p className='list-group-des'> Developed the One Click Trade Mark website to enable clients to easily register their trade marks online </p>
                  </ListGroup.Item>
                  <ListGroup.Item className='na-list-group-item'>
                    <Link to='/experiences'>More...</Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>  
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='mt-2 mb-4'>
                <Editor.SubSubTitle>Skills</Editor.SubSubTitle>
                  <Card className='important'>
                    <Card.Img>
                      <Icon name='java' className='icon-lg'/>
                    </Card.Img>
                    <Card.Body>
                      <Card.Title>Java</Card.Title>
                      <Card.Description>8+ years Java development and familiar with Java platforms such as Spring Framework</Card.Description>
                    </Card.Body>
                  </Card>
                  <Card className='important'>
                    <Card.Img>
                      <Icon name='react' className='icon-lg'/>
                    </Card.Img>
                    <Card.Body>
                      <Card.Title>React</Card.Title>
                      <Card.Description>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</Card.Description>
                    </Card.Body>
                  </Card>
                  <Card className='important'>
                    <Card.Img>
                      <Icon name='aws' className='icon-lg'/>
                    </Card.Img>
                    <Card.Body>
                      <Card.Title>AWS</Card.Title>
                      <Card.Description>8+ years Java development and familiar with Java platforms such as Spring Framework</Card.Description>
                    </Card.Body>
                  </Card>
                <ListGroup>
                  <ListGroup.Item className='na-list-group-item'>
                    <Link to='/skills'>More...</Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>

        </Editor.Body>
      </Editor>
    </>
  )
}

export default Home;