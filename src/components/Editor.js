function Editor () {
  return(
    <>
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
        </Card.Body>
      </Card>
    </>
  )
}

export default Editor;