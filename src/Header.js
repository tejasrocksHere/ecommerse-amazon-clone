import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasketRounded } from '@mui/icons-material';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
    
  }

  const [{basket,user}] = useStateValue();
  console.log(basket);
  return (
    <nav className='header'>
      <Link to='/home'>
        <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__seachIcon'/>
      </div>
      <div className="header__nav">
        <Link to={!user && '/'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello, <b className='header__optionLineTwo'>  {!user ? 'Guest' : user.email} </b> </span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
       

        </Link>
        <Link to='/' className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne' >Return </span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        <Link to='checkout' className='header__link'>
          <div className="header_optionBasket">
            <ShoppingBasketRounded header__optionLineOne/>
            <span className='header__basketCount'>{basket ? basket.length : 0}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;
