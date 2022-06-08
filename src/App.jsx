import Middle from "./components/Middle/Middle";
import Navbar from "./components/Navbar/Navbar";
import Right from "./components/Right/Right";
import './App.css';
import { useEffect, useState } from "react";
import data from "./Data/Data";


function App() {

  let [food, setFood] = useState(data)
  let [empty, setEmtpy] = useState([])

  let [arr, setArr] = useState([])

  
  const addFoodHandler = (item) =>{
    let tempTwo = empty.filter((el) => el.id === item.id);
    item.num = tempTwo.length + 1;
    
    setEmtpy([...empty, item]);
  }
  
  
  let [changed, setChanged] = useState([]);
  let [total, setTotal] = useState(0);
  
  useEffect(() => {
    let num = 0;
    empty.forEach(element => {
      num += element.money;
    });
    setTotal(num); 
    
    let temp = [...new Set(empty.map(item => item))];
    setChanged(temp);
  }, [empty]);

  
  let deleteHandler = (id) => {
    setEmtpy(empty.filter(item => item.id !== id))
  }; 
 
  return (

    <div className="d-flex justify-content-between">
      
      <div>
        <Navbar/>
      </div>
 
      <div className="w-100">
        <Middle
        addFoodHandler={addFoodHandler}
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
  );
}

export default App;
