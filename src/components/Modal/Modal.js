import { faCashRegister, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Modal.scss'

function Modal() {
  return (
    <div className="offcanvas text-white offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header d-block">
        <h3 className='mb-2 fs-4'>Payment</h3>
        <p className='payment-type '>3 payment method available</p>
      </div>
      <div className="offcanvas-body">
        <h4 className='mt-2 payment-method-title'>Payment Method</h4>
        <ul className='d-flex mt-3'>
          <li className='payment-types'>
            <FontAwesomeIcon className='payment-icon' icon={faCreditCard}/>
            <p className='mt-2'>Credit Card</p>
          </li>

          <li className='payment-types'>
            <i className='bx payment-icon bxl-paypal'></i>
            <p className='mt-2'>Paypal</p>
          </li>

          <li className='payment-types'>
             <i className='bx payment-icon bx-wallet' ></i>
            <p className='mt-2'>Cash</p>
          </li>
        </ul>

        <form className='d-flex payment-form flex-column mt-3'>
            <label className='mb-2'>Cardholder Name</label>
            <input type="text" name='UserName' placeholder='Name' />

            <label className='mb-2'>Card Number</label>
            <input type="number" name='Card Number' placeholder='2564 1421 0897 1244' />

            <div className='d-flex payment-date justify-content-between'>
              <div className='d-flex flex-column w-50 me-3'>
                <label className='mb-2'>Expiration Date</label>
                <input type="date" placeholder='02/2022' />
              </div>
              <div className='d-flex flex-column w-50'>
                <label className='mb-2'>CVV</label>
                <input type="password" placeholder='---' />
              </div>
            </div>

            <div className='d-flex payment-date justify-content-between'>
              <div className='d-flex flex-column w-50 me-3'>
                <label className='mb-2'>Order Type</label>
                 <select className='payment-select'>
                   <option value='dine'>Dine in</option>
                   <option value='dine'>To Go</option>
                   <option value='dine'>Delivery</option>

                 </select>
              </div>
              <div className='d-flex flex-column w-50'>
                <label className='mb-2'>Table no.</label>
                <input type="number" placeholder='0' />
              </div>
            </div>

        </form>
            <div className='d-flex'>
              <button data-bs-dismiss="offcanvas" aria-label="Close" className='w-50 bg-transparent payment-type-btn me-2'>
                Cancel
              </button>
              <button className='w-50 bg-transparent payment-type-btn'>Confirm Payment</button>
            </div>
      </div>
    </div>
  )
}

export default Modal