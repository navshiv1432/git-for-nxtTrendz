// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-list">
    <div className="nav-list-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />

      <div className="list-cont">
        <ul className="un-list">
          <Link to="/">
            <li className="list-item">Home</li>
          </Link>

          <li className="Products">Products</li>

          <li className="Cart">Cart</li>
        </ul>

        <button className="btn" type="button">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header
