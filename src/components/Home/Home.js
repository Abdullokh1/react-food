import React from 'react'
import Navbar from './Navbar/Navbar'
import Right from '../Home/Right/Right'
import Middle from '../Home/Middle/Middle'

function Home({
  addFoodHandler,
  food,
  empty,
  arr,
  changed,
  total,
  deleteHandler,
  dataInfo,
  setData
}) {
  return (
    <div className="d-flex justify-content-between">
      
    <div>
      <Navbar/>
    </div>

    <div className="w-100">
      <Middle
      addFoodHandler={addFoodHandler}
      dataInfo={dataInfo}
      setData={setData}
      food={food}
      />
    </div>

    <div>
      <Right
      food={food}
      empty={empty}
      arr={arr}
      changed={changed}
      total={total}
      deleteHandler={deleteHandler}
      />
    </div>

    </div>
  )
}

export default Home