import React, { useState } from 'react'
import './AddModal.scss'

function AddModal({modal, setModal, setData, dataInfo}) {

  let [foodName, setFoodName] = useState('')
  let [foodPrice, setFoodPrice] = useState('')
  let [foodBowl, setBowl] = useState('')
  let [typeFood, setType] = useState('')


  const foodNameHandler = (e) =>{
    setFoodName(e.target.value)
  }

  const foodPriceHandler = (e) =>{
    setFoodPrice(e.target.value)
  }  

  const foodBowlHandler = (e) =>{
    setBowl(e.target.value)
  }  

  const foodTypeHandler = (e) =>{
    setType(e.target.value)
  }  
  
  const addFoodHandler = () =>{
    setModal(!modal)
    setData([
      ...dataInfo, {
        img: 'https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg',
        title: foodName,
        money: foodPrice,
        theRest: foodBowl,
        foodType: typeFood,
      }
    ])

  }

  return (
    <>
     <div className={`backdrop-add ${modal ? 'd-block' : 'd-none'}`}>
        <div className={`add-modal p-4 ${modal ? 'd-block' : 'd-none'}`}> 
           <h3 className='mb-4'>Add Food</h3>
           <form className='d-flex flex-column'>

             <label className='mb-2'>Food Name</label>
             <input onChange={foodNameHandler} className='mb-4' type="text" placeholder='Food Name' />

             <label className='mb-2'>Price</label>
             <input onChange={foodPriceHandler} className='mb-4' type="number" placeholder='$' />

             <label className='mb-2'>Bowl Count</label>
             <input onChange={foodBowlHandler} className='mb-4' type="number" placeholder='0' />

             <label className='mb-2'>Food Type</label>
             <input onChange={foodTypeHandler} type="text" placeholder='Type' />
          </form>

            <div className='d-flex justify-content-center'>
              <div className='add-modal-btns'>
                <button onClick={() => setModal(!modal)} className='me-3'>Cancel</button>
                <button onClick={addFoodHandler}>Add</button>
              </div>
            </div>

        </div>
     </div>
    
    </>
  )
}

export default AddModal