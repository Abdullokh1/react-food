import "./App.css";
import { useEffect, useState } from "react";
import data from "./Data/Data";
import { Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Home from "./components/Home/Home";
import Dashboards from "./components/Dashboards/Dashboards";
import Graph from "./components/Graph/Graph";
import Messege from "./components/Messege/Messege";
import Notification from "./components/Notification/Notification";
import LogOut from "./components/LogOut/LogOut";

function App() {
  let [food, setFood] = useState(data);
  let [empty, setEmtpy] = useState([]);
  let [dataInfo, setData] = useState(food);

  let [arr, setArr] = useState([]);

  const addFoodHandler = (item) => {
    let tempTwo = empty.filter((el) => el.id === item.id);
    item.num = tempTwo.length + 1;
    setEmtpy([...empty, item]);
  };

  let [changed, setChanged] = useState([]);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    let num = 0;
    empty.forEach((element) => {
      num += +element.money;
    });
    setTotal(num);

    let temp = [...new Set(empty.map((item) => item))];
    setChanged(temp);
  }, [empty]);

  let deleteHandler = (id) => {
    setEmtpy(empty.filter((item) => item.id !== id));
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addFoodHandler={addFoodHandler}
              food={food}
              empty={empty}
              arr={arr}
              changed={changed}
              total={total}
              deleteHandler={deleteHandler}
              dataInfo={dataInfo}
              setData={setData}
            />
          }
        />

        <Route
          path="/Settings"
          element={<Settings dataInfo={dataInfo} setData={setData} />}
        />

        <Route
          path="/Dashboards"
          element={
            <Dashboards
              food={food}
              empty={empty}
              arr={arr}
              changed={changed}
              total={total}
              deleteHandler={deleteHandler}
            />
          }
        />

        <Route
          path="/Graph"
          element={
            <Graph
              food={food}
              empty={empty}
              arr={arr}
              changed={changed}
              total={total}
              deleteHandler={deleteHandler}
            />
          }
        />

        <Route
          path="/Messege"
          element={
            <Messege
              food={food}
              empty={empty}
              arr={arr}
              changed={changed}
              total={total}
              deleteHandler={deleteHandler}
            />
          }
        />

        <Route
          path="/Notification"
          element={
            <Notification
              food={food}
              empty={empty}
              arr={arr}
              changed={changed}
              total={total}
              deleteHandler={deleteHandler}
            />
          }
        />

        <Route
          path="/Logout"
          element={
            <LogOut
              food={food}
              empty={empty}
              arr={arr}
              changed={changed}
              total={total}
              deleteHandler={deleteHandler}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
