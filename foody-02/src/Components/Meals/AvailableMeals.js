import React, { useState, useEffect } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [isLoding , stIsLoading] = useState(true);
  const [resmeals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async() => {
      const response = await fetch(
        "https://foody-react-app-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      const dynamicData = [];
      
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      for(let key in responseData){
        console.log(responseData[key])
        dynamicData.push({
          id : key,
          name : responseData[key].name,
          description : responseData[key].description,
          price : responseData[key].price,
        })
      }
  
      setMeals(dynamicData);
      stIsLoading(false)
    }
    fetchMeals().catch((err)=>{
      stIsLoading(false);
      setHttpError(err.message)
    })
  }, []);

  if(isLoding){
    return <p className={classes.loding}>Loding....</p>;
  }
  if(httpError){
    return <p className={classes.loding}>{httpError}</p>;
  }

  const mealsList = resmeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoding && <p className={classes.loding}>Loding....</p>}
        {!isLoding && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
