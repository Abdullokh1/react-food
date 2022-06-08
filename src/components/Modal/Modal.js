import React from 'react'
import './Modal.scss'

function Modal({isOpened}) {
  return (
    <div className="offcanvas text-white offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header d-block">
        <h3 className='mb-3'>Payment</h3>
        <p className='payment-type'>3 payment method available</p>
        {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" /> */}
      </div>
      <div className="offcanvas-body">
        <h4>Payment Method</h4>
      </div>
    </div>
  )
}

export default Modal