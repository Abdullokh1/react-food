import React, { useState } from 'react'

function EditModal({edit, setEdit,setEditName,setEditPrice,setEditBowl, saveHandler,saveEmpty}) {



  const editNameHandler = (e) =>{
   setEditName(e.target.value)
  }

  const editPriceHandler = (e) =>{
    setEditPrice(e.target.value)
  }

  const editBowlHandler = (e) =>{
    setEditBowl(e.target.value)
  }

  const editSubmitHandler = (e) =>{
   e.preventDefault()
   e.target.reset()
  } 

  return (
   saveEmpty.map(item =>{
     return (
     <div className={`backdrop-add ${edit ? 'd-block' : 'd-none'}`}>
        <div className={`add-modal p-4 ${edit ? 'd-block' : 'd-none'}`}> 
           <h3 className='mb-4'>Edit</h3>
           <form onSubmit={editSubmitHandler} className='d-flex flex-column'>

             <label className='mb-2'>Food Name</label>
             <input defaultValue={item.title} onChange={editNameHandler} className='mb-4' type="text" placeholder='Food Name' />

             <label className='mb-2'>Price</label>
             <input defaultValue={item.money} onChange={editPriceHandler} className='mb-4' type="number" placeholder='$' />

             <label className='mb-2'>Bowl Count</label>
             <input defaultValue={item.theRest} onChange={editBowlHandler} className='mb-4' type="number" placeholder='0' />

            <div className='d-flex justify-content-center'>
              <div className='add-modal-btns'>
                <button onClick={() => setEdit(!edit)} className='me-3'>Cancel</button>
                <button onClick={() => saveHandler(item)}>Save</button>
              </div>
            </div>
          </form>


        </div>
     </div>

     )

   })
  )
}

export default EditModal