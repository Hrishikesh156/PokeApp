import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import {Chip,Button} from "@material-tailwind/react"
function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'><h1>Pokemon Encyclopedia</h1></Link>
      </div>
      <ul>
        {user ? (
          <li>
            {/* <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button> */}
            <Button type='submit' size="lg" variant="gradient" onClick={onLogout} fullWidth>
             Logout
          </Button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                {/* <FaSignInAlt /> Login */}
                <FaSignInAlt color="#4287f5"/> 
                <Chip  variant="filled" value="Login" />
              </Link>
            </li>
            <li>
              <Link to='/register'>
                {/* <FaUser /> Register */}
                <FaUser color="#4287f5" />
                <Chip variant="filled" value="Register" />
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
