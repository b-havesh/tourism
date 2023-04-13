import closeIco from './Images/close.png'

export const Sidebar = (props) => {
  return (
    <div className="sidebar-container">
        <ul className={`sidebar-items flex${props.classMenu}`}>

                    <li><a href="#">Home</a></li>

                    <li><a href="#">Surfing</a></li>

                    <li><a href="#">Hula</a></li>

                    <li><a href="#">Vulcano</a></li>
                    
        <button id="sidebar-book-btn">Book a trip</button>
        <button className='close-btn' onClick={props.handleClick}><img src={closeIco} alt="" /></button>
            </ul>
    </div>
  )
}
