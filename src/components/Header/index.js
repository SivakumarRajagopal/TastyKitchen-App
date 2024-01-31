import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const {history, home} = props

  const activeHome = home === 'home' ? 'home-link' : 'cart-link'
  const activeCart = home === 'cart' ? 'home-link' : 'cart-link'

  const logoutButton = () => {
    // console.log(history)
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-bar">
      <Link to="/" className="logo-link">
        <img
          src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1634114448/Vector_zqonub.jpg"
          alt="website logo"
          className="logo"
        />

        <h1 className="nav-kitchen-name">Tasty Kitchens</h1>
      </Link>

      <div className="menu-container">
        <ul className="menu-list">
          <li>
            <Link to="/" className={activeHome}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/cart" className={activeCart}>
              Cart
            </Link>
          </li>
        </ul>
        <button type="button" onClick={logoutButton} className="logout-btn">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
