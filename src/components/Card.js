import './../styles/Card.css';

export function Card(props) {
  return (
    <>
      <div id={props.id} className='na-card'>
        {props.children}
        <div className='important-icon-area'>
          <div className='icon'>&#9733;</div>
        </div>
      </div>
    </>
  )
}

function Img({ children, id='', className='', ...props }) {
  return(
    <>
      <div id={props.id} className={`na-card-img ${className}`.trim()}>
        { children }
      </div>
    </>
  )
}

function Body({ children, id='', className='', ...props }) {
  return(
    <>
      <div id={props.id} className={`na-card-body ${className}`.trim()}>
        { children }
      </div>
    </>
  )
}

function Title({ children, id='', className='', ...props }) {
  return(
    <>
      <div id={props.id} className={`na-card-title ${className}`.trim()}>
        { children }
      </div>
    </>
  )
}

function Description({ children, id='', className='', ...props }) {
  return(
    <>
      <div id={props.id} className={`na-card-description ${className}`.trim()}>
        { children }
      </div>
    </>
  )
}

Card.Img = Img;
Card.Body = Body;
Card.Title = Title;
Card.Description = Description;