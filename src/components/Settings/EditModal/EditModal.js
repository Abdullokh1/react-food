import React, { useState } from 'react'

function EditModal({edit,setEdit,setEditName,setEditPrice,setEditBowl}) {

  // let [editName, setEditName] = useState('')
  // let [editPrice, setEditPrice] = useState('')
  // let [editBowl, setEditBowl] = useState('')


  const editNameHandler = (e) =>{
   setEditName(e.target.value)
  }

  const editPriceHandler = (e) =>{
    setEditPrice(e.target.value)
  }

  const editBowlHandler = (e) =>{
    setEditBowl(e.target.value)
  }

  return (
    <div className={`backdrop-add ${edit ? 'd-block' : 'd-none'}`}>
        <div className={`add-modal p-4 ${edit ? 'd-block' : 'd-none'}`}> 
           <h3 className='mb-4'>Edit</h3>
           <form className='d-flex flex-column'>

             <label className='mb-2'>Food Name</label>
             <input onChange={editNameHandler} className='mb-4' type="text" placeholder='Food Name' />

             <label className='mb-2'>Price</label>
             <input onChange={editPriceHandler} className='mb-4' type="number" placeholder='$' />

             <label className='mb-2'>Bowl Count</label>
             <input onChange={editBowlHandler} className='mb-4' type="number" placeholder='0' />

             <label className='mb-2'>Food Type</label>
             <input type="text" placeholder='Type' />
          </form>

            <div className='d-flex justify-content-center'>
              <div className='add-modal-btns'>
                <button onClick={() => setEdit(!edit)} className='me-3'>Cancel</button>
                <button onClick={() => setEdit(!edit)}>Save</button>
              </div>
            </div>

        </div>
     </div>
  )
}

export default EditModal