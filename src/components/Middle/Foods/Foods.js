import React from 'react'
import './Foods.scss'

function Foods({dataInfo, addFoodHandler}) {


  return (
    <ul className="food-description d-flex justify-content-center flex-wrap">

      {dataInfo.map(item =>{
        return (
          <li onClick={() => addFoodHandler(item)}className='food-prices' key={item.id}>
            <div className="text-center food-content-wrapper">
              <img className="food-images" src={item.img} alt="spicy-food" width={132} height={132} />
              <p className="type-of-food">{item.title}</p>
              <p className="price">$ {item.money}</p>
              <p className="amount-of-food">{item.theRest} Bowls available</p>
            </div>
          </li>
        )
      })}

    </ul>
  )
}

export default Foods