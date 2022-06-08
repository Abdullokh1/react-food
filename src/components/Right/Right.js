import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import './Right.scss'

function Right({changed, total, deleteHandler}) {
  
  
  return (
    <section className='right-part'>
      <div className='p-4'>
        <h4 className="order-number">Orders #34562</h4>
        <ul className="d-flex order-lists">
          <li className="order-items">
            <button className="order-dine-in-btn">Dine In</button>
          </li>
          <li className="order-items">
            <button className="order-dine-in-btn">To Go</button>
          </li>
          <li className="order-items">
            <button className="order-dine-in-btn">Delivery</button>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center justify-content-between orders-intro">
        <p className="item-order">Item</p>
        <div className='d-flex'>
          <p className="item-order me-5">Qty</p>
          <p className="item-order">Price</p>
        </div>
      </div>

      <ul className='order-list-main'>
        {changed.map(item =>{
          return (
           <li key={item.id} className='order-li-item'>
            <div>
              <div className="d-flex justify-content-between align-items-center main-order-wrapper">
                <div className="d-flex order-wrapper-inner">
                  <img className="order-img me-2" src={item.img} alt="food-order" width={40} height={40} />
                  <div>
                    <p className="order-sub-title">{item.title}</p>
                    <p className="order-price">$ {item.money}</p>
                  </div>
                </div>
                <span className="qty-item">{item.num}</span>
                <p className="order-main-price">${item.money}</p>
              </div>
              <div className="d-flex align-items-center justify-content-between comment-order-inner">
                <input className="comment-input w-100" type="text" name="comment" placeholder="Please, just a little bit spicy only." />
                <div>
                  <button  onClick={() => deleteHandler(item.id)} className="delete-btn">
                  <i className='bx bx-trash-alt'></i>
                  </button>
                </div>
              </div>
            </div>
           </li>
          )
        })}
      </ul>
    
    <div className='d-flex flex-column p-3'>
      <div className='d-flex text-white justify-content-between mb-4'>
        <p>Sub Total</p>
        <p>${total.toFixed(2)}</p>
      </div>

      <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className='payment-btn'>
        Continue to Payment
      </button>
    </div>

     <Modal/>

    </section>
  )
}

export default Right