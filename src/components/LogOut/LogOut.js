import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Right from '../Home/Right/Right'

function LogOut({food,empty,arr,changed,total,deleteHandler}) {
  return (
    <div className="d-flex justify-content-between">
      
      <div>
        <Navbar/>
      </div>

      <div>
        <h2 className='text-white'>LogOut</h2>
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

export default LogOut