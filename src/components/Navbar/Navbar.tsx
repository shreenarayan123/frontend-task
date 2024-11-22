
import './Navbar.css'
import Logo from '../../assets/logo.svg'
import User from '../../assets/user.jpg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='Logo'>
         <img src={Logo} alt="logo" />
      </div>
      <div className='options'>
         <div className='option'>
         <i className="fa-solid fa-house-chimney"></i>
         </div>
         <div className='option'>
         <i className="fa-solid fa-screwdriver-wrench"></i>
         </div>
         <div className='option'>
         <i className="fa-solid fa-bell"></i>
         </div>
         <div className='profile'>
            <img src={User} alt="profile" />
         </div>
         <div className='more'>
         <i className="fa-solid fa-ellipsis-vertical"></i>
         </div>
      </div>
    </div>
  )
}

export default Navbar