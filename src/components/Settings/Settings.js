import React from 'react'
import Middle from '../Home/Middle/Middle'
import Navbar from '../Home/Navbar/Navbar'
import ProductManage from './ProductManage/ProductManage'
import SettingMenu from './SettingMenu/SettingMenu'

function Settings({dataInfo, setData}) {
  return (
    <>
     <div className="d-flex justify-content-between align-items-center">
      
      <div>
        <Navbar/>
      </div>


       <div>
        <h3 className=' ps-2 pb-3 setting__title  text-white'>Settings</h3>
        <SettingMenu/>
       </div>

       <div className='pe-4'>
         <ProductManage
         dataInfo={dataInfo}
         setData={setData}
         />
       </div>

  
    </div>
    
    </>
  )
}

export default Settings