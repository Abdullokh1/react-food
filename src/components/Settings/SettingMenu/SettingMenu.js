import { faBell, faBuilding, faDashboard, faHeart, faLock, faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SettingMenu.scss'

function SettingMenu() {
 
  return (
    <div className='setting-menu setting'>

      <ul>

        <li className='setting__item d-flex'>
          <i className='bx setting__icon bx-heart'></i>
          <div className='ms-3'>
            <h4>Appereance</h4>
            <p>Dark and Light mode, Font size</p>
          </div>
        </li>

        <li className='setting__item d-flex'>
          <FontAwesomeIcon className='setting__icon' icon={faBuilding }/>
          <div className='ms-3'>
            <h4>Your Restaurant</h4>
            <p>Dark and Light mode, Font size</p>
          </div>
        </li>

        <li className='setting__item d-flex'>
          <FontAwesomeIcon className='setting__icon' icon={faDashboard }/>
          <div className='ms-3'>
            <h4>Products Management</h4>
            <p>Manage your product, pricing, etc</p>
          </div>
        </li>

        <li className='setting__item d-flex'>
          <FontAwesomeIcon className='setting__icon' icon={faBell }/>
          <div className='ms-3'>
            <h4>Notifications</h4>
            <p>Customize your notifications</p>
          </div>
        </li>

        <li className='setting__item d-flex'>
          <FontAwesomeIcon className='setting__icon' icon={faLock }/>
          <div className='ms-3'>
            <h4>Security</h4>
            <p>Configure Password, PIN, etc</p>
          </div>
        </li>

        <li className='setting__item d-flex'>
          <FontAwesomeIcon className='setting__icon' icon={faWarning }/>
          <div className='ms-3'>
            <h4>About Us</h4>
            <p>Find out more about Posly</p>
          </div>
        </li>
      </ul>

    </div>
  )
}

export default SettingMenu