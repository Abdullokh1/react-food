import { faBarsProgress, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import data from '../../../Data/Data'
import AddModal from '../AddModal/AddModal'
import EditModal from '../EditModal/EditModal'
import './ProductManage.scss'

function ProductManage({dataInfo,setData}) {
  let FilterBtn = ['All', ...new Set(data.map(item => item.foodType))]
  let [type, setCategory] = useState(FilterBtn)
  let [modal, setModal] = useState(false)
  let [edit, setEdit] = useState(false)
  let [saveEmpty, setSaveEmpty] = useState([])

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

let [editName, setEditName] = useState('')
let [editPrice, setEditPrice] = useState('')
let [editBowl, setEditBowl] = useState('')
let [edtifoodType, setFoodType] = useState('')



 const editHandler = (item) =>{
   setEdit(!edit)
   setSaveEmpty([item])

  }
  
  const saveHandler = (item) =>{
   setEdit(!edit)
   dataInfo.map(el =>{
     if(el.id === item.id){
       return el.title = editName
     }
   })

   dataInfo.map(el =>{
    if(el.id === item.id){
      return el.money = editPrice
    }
   })

   dataInfo.map(el =>{
    if(el.id === item.id){
      return el.theRest = editBowl
    }
   })

   dataInfo.map(el =>{
    if(el.id === item.id){
      return el.foodType = edtifoodType
    }
   })

 }



  return (
    <div className='product p-4 text-white'>
      <div className='d-flex align-items-center justify-content-between mb-4'>
        <h3>Products Management</h3>
        <button className='product__btn'>
          <FontAwesomeIcon className='me-3' icon={faBarsProgress}/>
          Manage Categories
        </button>

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

      <ul className='d-flex justify-content-center product__list__wrap flex-wrap'>
        <li>
          <button onClick={() => setModal(!modal)} className='product__add__btn'>
            <FontAwesomeIcon className='product__icon' icon={faPlus}/> <br/>
            Add new dish
          </button>
        </li>

         {dataInfo.map(item =>{
          return (
            <li className='food-prices product__item__food' key={item.id}>
              <div className="text-center d-flex flex-column pt-3">
                <img className="food-images product__imgs" src={item.img} alt="spicy-food" width={132} height={132} />
                <p className="type-of-food">{item.title}</p>
                <div className='d-flex align-items-center justify-content-center'>
                  <p className="price product__infos me-2 m-0">$ {item.money} </p>
                  <p className="amount-of-food product__infos m-0">{item.theRest} Bowls</p>
                </div>
                <div onClick={() => editHandler(item)} className='edit-part d-flex justify-content-center align-items-center'>
                  <i className='bx edit-text fs-5 me-2 bx-edit-alt'></i>
                  <p className='pt-3 edit-text'>Edit dish</p>
                </div>
              </div>
            </li>
          )
         })}

      </ul>

      <div className='d-flex product__btn__wrap'>
        <button className='bg-transparent products__button payment-type-btn me-3'>
          Discard Changes
        </button>
        <button className='bg-transparent products__button payment-type-btn'>Save Changes</button>
      </div>

      <AddModal modal={modal} setModal={setModal} setData={setData} dataInfo={dataInfo}/>
      <EditModal 
      edit={edit} 
      setEdit={setEdit} 
      setData={setData} 
      dataInfo={dataInfo}
      editName={editName}
      setEditName={setEditName}
      setEditPrice={setEditPrice}
      setEditBowl={setEditBowl}
      saveHandler={saveHandler}
      saveEmpty={saveEmpty}
      />
       
    </div>
  )
}

export default ProductManage