import React, { useState } from "react";
import "./AddModal.scss";

function AddModal({ modal, setModal, setData, setFood, dataInfo }) {
  let [foodName, setFoodName] = useState("");
  let [foodPrice, setFoodPrice] = useState("");
  let [foodBowl, setBowl] = useState("");
  let [typeFood, setType] = useState("");

  const foodNameHandler = (e) => {
    setFoodName(e.target.value);
  };

  const foodPriceHandler = (e) => {
    setFoodPrice(e.target.value);
  };

  const foodBowlHandler = (e) => {
    setBowl(e.target.value);
  };

  const foodTypesHandler = (e) => {
    setData([
      ...dataInfo,
      {
        foodType: e.target.value,
      },
    ]);
  };

  const addFoodHandler = () => {
    setModal(!modal);
    setData([
      {
        img: "https://explorelompoc.com/wp-content/uploads/2021/06/food_placeholder.jpg",
        title: foodName,
        money: foodPrice,
        theRest: foodBowl,
        // foodType: typeFood,
      },
      ...dataInfo,
    ]);
  };

  // const foodTypesHandler = (e) =>{
  //   console.log(e.target.value);
  // }

  return (
    <>
      <div className={`backdrop-add ${modal ? "d-block" : "d-none"}`}>
        <div className={`add-modal p-4 ${modal ? "d-block" : "d-none"}`}>
          <h3 className="mb-4">Add Food</h3>
          <form className="d-flex flex-column">
            <label className="mb-2">Food Name</label>
            <input
              onChange={foodNameHandler}
              required
              className="mb-4"
              type="text"
              placeholder="Food Name"
            />

            <label className="mb-2">Price</label>
            <input
              onChange={foodPriceHandler}
              required
              className="mb-4"
              type="number"
              placeholder="$"
            />

            <label className="mb-2">Bowl Count</label>
            <input
              onChange={foodBowlHandler}
              required
              className="mb-4"
              type="number"
              placeholder="0"
            />

            <label className="mb-2">Food Type</label>
            <select
              onChange={foodTypesHandler}
              className="payment-select add-food-select"
            >
              <option value="hot-dishes">hot-dishes</option>
              <option value="cold-dishes">cold-dishes</option>
              <option value="Grill">Grill</option>
              <option value="soup">soup</option>
              <option value="Dessert">Dessert</option>
            </select>
          </form>

          <div className="d-flex justify-content-center">
            <div className="add-modal-btns">
              <button onClick={() => setModal(!modal)} className="me-3">
                Cancel
              </button>
              <button onClick={addFoodHandler}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddModal;
