import React, { useState } from 'react'
import data from '../../Data/Data'
import Foods from './Foods/Foods'
import './Middle.scss'

function Middle({addFoodHandler}) {
  let FilterBtn = ['All', ...new Set(data.map(item => item.foodType))]
  let [dataInfo, setData] = useState(data)
  let [type, setCategory] = useState(FilterBtn)


   const filterItem = (type) =>{
    if(type === 'All'){
      setData(data)
      return
    }

  const newItems = data.filter(item =>{
    return item.foodType === type
  })
  
  setData(newItems)
}

   let arr = []
    const searchHandler = (e) =>{
       {data.forEach(item =>{
         if(item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
           arr.push(item)
         }
       })}
      setData(arr)
       
    }

  return (
    <section className='middle-part'>
      <div className="d-flex align-items-center justify-content-between food-intro mb-4">
        <div className="main-title">
          <h1 className="food-title">Jaegar Resto</h1>
          <p className="food-date">Tuesday, 2 Feb 2021</p>
        </div>
        <div>
          <i className="bx bx-search" />
          <input onChange={searchHandler} className="search-input" type="text" name="search" placeholder="Search for food, coffe, etc.." />
        </div>
      </div>

      <ul className='d-flex middle-part__list'>

      {type.map((item, i) =>{
        return (
          <li key={i} className='food-items'>
            <button onClick={() => filterItem(item)} className='food-links'>{item}</button>
          </li>
        )
      })}

    </ul>

     <div className="d-flex align-items-center justify-content-between dishes-intro">
        <h3 className="dishes-title">Choose Dishes</h3>
        <button className="food-btn d-flex align-items-center">
          <i className='bx text-white fs-4 bx-chevron-down'></i>
          Dine In
        </button>
    </div>

    <Foods
      type={type}
      dataInfo={dataInfo}
      addFoodHandler={addFoodHandler}
    />  



    </section>
  )
}

export default Middle