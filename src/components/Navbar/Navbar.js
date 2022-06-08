import React from 'react'
import './Navbar.scss'
import mainLogo from '../../assets/imgs/main-logo.svg'
import discount from '../../assets/imgs/discount.svg'
import graph from '../../assets/imgs/graph.svg'
import messege from '../../assets/imgs/messege.svg'
import bell from '../../assets/imgs/bell.svg'
import setting from '../../assets/imgs/setting.svg'
import logout from '../../assets/imgs/logout.svg'


import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <nav className='navbar'>
      
      <Link to='/'>
        <img className='mb-4' src={mainLogo} alt="siteLogo" />
      </Link>


      <ul>
        
          <li className='navbar__item '>
           <NavLink to=''>
            <div className='navbar__link '>
              <FontAwesomeIcon className='navbar__icon' icon={faHome}/>
            </div>
           </NavLink>
          </li>

          <li className='navbar__item '>
            <NavLink to=''>
              <div className='navbar__link '>
                <img className='navbar__icon' src={discount} alt="discount" />
              </div>
            </NavLink>
          </li>

          <li className='navbar__item '>
            <NavLink to=''>
              <div className='navbar__link '>
                <img className='navbar__icon' src={graph} alt="graph" />
              </div>
            </NavLink>
          </li>

          <li className='navbar__item '>
            <NavLink to=''>
              <div className='navbar__link '>
                <img className='navbar__icon' src={messege} alt="messege" />
              </div>
            </NavLink>
          </li>

          <li className='navbar__item '>
            <NavLink to=''>
              <div className='navbar__link '>
                <img className='navbar__icon' src={bell} alt="bell" />
              </div>
            </NavLink>
          </li>

          <li className='navbar__item '>
            <NavLink to=''>
              <div className='navbar__link '>
                <img className='navbar__icon' src={setting} alt="setting" />
              </div>
            </NavLink>
          </li>

          <li className='navbar__item '>
            <NavLink to=''>
              <div className='navbar__link '>
                <img className='navbar__icon' src={logout} alt="logout" />
              </div>
            </NavLink>
          </li>

     
      </ul>


    </nav>
  )
}

export default Navbar