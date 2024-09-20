import './../styles/Card.css';

export function Card(props) {
  console.log(props);
  return (
    <>
      <div id={props.id} className={`na-card ${props.className}`}>
        {props.children}
        <div className='important-icon-area'>
          <div className='icon'>&#9733;</div>
        </div>
      </div>
    </>
  )
}

function Img({ children, id, className, ...props }) {
  return(
    <>
      <div id={props.id} className={`na-card-img ${props.className}`}>
        { children }
      </div>
    </>
  )
}

function Body({ children, id, className, ...props }) {
  return(
    <>
      <div id={props.id} className={`na-card-body ${props.className}`}>
        { children }
      </div>
    </>
  )
}

function Title({ children, id, className, ...props }) {
  return(
    <>
      <div id={props.id} className={`na-card-title ${props.className}`}>
        { children }
      </div>
    </>
  )
}

function Description({ children, id, className, ...props }) {
  return(
    <>
      <div id={props.id} className={`na-card-description ${props.className}`}>
        { children }
      </div>
    </>
  )
}

Card.Img = Img;
Card.Body = Body;
Card.Title = Title;
Card.Description = Description;