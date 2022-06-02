import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className="logo">
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
        
      </ul>
    </div>
  )
}

export default Header