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
                                      () => axios.get(`${process.env.PUBLIC_URL}/data/menu/menuMain.json`),
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
                    <Link to={`/experiences/h-h-lawyers-website-and-server-migration`} className='na-list-group-item-header'> H &amp; H Lawyers Website </Link>
                    <p className='list-group-des'> Developed a new H &amp; H Lawyers website and migrated servers from on-premise to Microsoft Exchange and AWS </p>
                  </ListGroup.Item>
                  <ListGroup.Item className='na-list-group-item' >
                    <Link to={`/experiences/one-click-trade-mark-website`} className='na-list-group-item-header'> OCTM Website </Link>
                    <p className='list-group-des'> Developed the One Click Trade Mark website to enable clients to easily register their trade marks online </p>
                  </ListGroup.Item>
                  <ListGroup.Item className='na-list-group-item'>
                    <Link to={`/experiences`}>More...</Link>
                  </ListGroup.Item>
                </ListGroup>
              </div>  
            </div>
            <div className='col-lg-6 col-md-12'>
              <div className='mt-2 mb-4'>
                <Editor.SubSubTitle>Skills</Editor.SubSubTitle>
                  <Link to='/skills/java'>
                    <Card className='important'>
                      <Card.Img>
                        <Icon name='java' className='icon-lg'/>
                      </Card.Img>
                      <Card.Body>
                        <Card.Title>Java</Card.Title>
                        <Card.Description>I have extensive experience with Java, enabling me to build robust, scalable, and efficient back-end systems. I apply object-oriented programming principles in multi-tiered architectures and integrating complex third-party APIs. Whether working on full-stack development projects or Product Lifecycle Management (PLM) systems, I have ensured high performance, troubleshooting issues and optimising codebases for long-term maintainability in enterprise-level applications.</Card.Description>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to='/skills/react'>
                  <Card className='important'>
                      <Card.Img>
                        <Icon name='react' className='icon-lg'/>
                      </Card.Img>
                      <Card.Body>
                        <Card.Title>React</Card.Title>
                        <Card.Description>I have experience in React for building responsive single-page applications (SPAs) with seamless user experiences.</Card.Description>
                      </Card.Body>
                    </Card>
                  </Link>
                  <Link to='/skills/aws'>
                    <Card className='important'>
                      <Card.Img>
                        <Icon name='aws' className='icon-lg'/>
                      </Card.Img>
                      <Card.Body>
                        <Card.Title>AWS</Card.Title>
                        <Card.Description>I have an understanding of AWS services, including EC2, S3, RDS, and Elastic Beanstalk, which I use to manage, deploy, and scale applications.</Card.Description>
                      </Card.Body>
                    </Card>
                  </Link>
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